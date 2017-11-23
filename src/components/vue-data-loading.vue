<template>
    <div class="vue-data-loading">
        <div class="loading-header" :style="{height: pullHeight + 'px'}" v-show="PULL_DOWN === pull.type">
            <div class="header-text" v-show="!pull.available">
                <slot :name="PULL_DOWN + '-before'">下拉刷新数据</slot>
            </div>
            <div class="header-text" v-show="pull.available && PULL_DOWN !== loadingType">
                <slot :name="PULL_DOWN + '-ready'">松开刷新数据</slot>
            </div>
            <div class="header-text" v-show="PULL_DOWN === loadingType">
                <slot :name="PULL_DOWN + '-loading'">刷新中...</slot>
            </div>
        </div>

        <div class="loading-content">
            <slot></slot>
        </div>

        <div class="loading-footer" :style="{height: pullHeight + 'px'}" v-show="PULL_UP === pull.type">
            <div class="footer-text" v-show="!pull.available">
                <slot :name="PULL_UP + '-before'">上拉加载数据</slot>
            </div>
            <div class="footer-text" v-show="pull.available && PULL_UP !== loadingType">
                <slot :name="PULL_UP + '-ready'">松开加载数据</slot>
            </div>
            <div class="footer-text" v-show="PULL_UP === loadingType">
                <slot :name="PULL_UP + '-loading'">加载中...</slot>
            </div>
        </div>

        <div class="loading-footer" :style="{height: distance + 'px'}" v-show="loading && INFINITE_SCROLL === loadingType">
            <div class="footer-text">
                <slot :name="INFINITE_SCROLL + '-loading'">加载中...</slot>
            </div>
        </div>

        <div class="loading-footer" :style="{height: distance + 'px'}" v-show="!loading && completed">
            <div class="footer-text">
                <slot name="completed">加载完毕</slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            completed: {
                type: Boolean,
                default: false
            },
            distance: {
                type: Number,
                default: 60
            },
            offset: {
                type: Number,
                default: 0
            },
            listens: {
                type: Array,
                default() {
                    return ['infinite-scroll', 'pull-down', 'pull-up']
                }
            },
            container: {
                type: String,
            },
            initScroll: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                margin: {
                    top: 0,
                    bottom: 0,
                },
                pull: {
                    from: -1,
                    to: -1,
                    distance: 0,
                    type: null,
                    available: false,
                },
                loadingType: null,

                PULL_UP: 'pull-up',
                PULL_DOWN: 'pull-down',
                INFINITE_SCROLL: 'infinite-scroll',
            }
        },
        computed: {
            _container() {
                return this.container ? this.$parent.$refs[this.container] : window.window
            },
            pullHeight() {
                return this.pull.distance > this.distance ? this.distance : this.pull.distance
            },
        },
        watch: {
            loading(val, oldVal) {
                if (oldVal && !val) {
                    this.resetPull()
                    this.setLoadingType()
                }
            }
        },
        methods: {
            updateView() {
                let {top, height} = this.$el.getBoundingClientRect()
                this.margin = {
                    top,
                    bottom: window.innerHeight - (height + top + this.offset)
                }
            },
            setLoadingType(type = null) {
                this.loadingType = type
            },
            handleScroll() {
                this.updateView()
                if (this.loading || this.completed) {
                    return
                }
                if (this.margin.bottom >= 0) {
                    this.$emit(this.INFINITE_SCROLL)
                    this.setLoadingType(this.INFINITE_SCROLL)
                }
            },
            handleTouchStart(e) {
                if (this.loading || !(this.hasListen(this.PULL_UP) || this.hasListen(this.PULL_DOWN)) || (this.margin.top < 0 && this.margin.bottom < 0)) {
                    return
                }

                this.pull.from = e.touches.item(0).pageY
            },
            handleTouchMove(e) {
                if (this.loading || this.pull.from < 0) {
                    return
                }
                this.pull.to = e.touches.item(0).pageY
                let distance = this.pull.to - this.pull.from

                if (distance > 0 && this.margin.top >0 && this.hasListen(this.PULL_DOWN)) {   // pull down
                    this.pull.type = this.PULL_DOWN
                } else if (distance < 0 && this.margin.bottom > 0 && this.hasListen(this.PULL_UP)) {    // pull up
                    this.pull.type = this.PULL_UP
                } else {
                    this.pull.type = null
                }

                this.pull.distance = Math.abs(distance)
                this.pull.available = this.pull.distance >= this.distance
            },
            handleTouchEnd() {
                if (this.pull.distance >= this.distance) {
                    if (this.PULL_UP === this.pull.type || this.PULL_DOWN === this.pull.type) {
                        this.$emit(this.pull.type)
                        this.setLoadingType(this.pull.type)
                    }
                } else {
                    this.resetPull()
                }
            },
            resetPull() {
                this.pull = {
                    from: -1,
                    to: -1,
                    distance: 0,
                    type: null,
                    available: false,
                }
            },
            bindEvents() {
                // scroll
                if (this.hasListen(this.INFINITE_SCROLL)) {
                    ['scroll', 'resize'].forEach(e => {
                        this._container.addEventListener(e, this.handleScroll)
                    })
                }

                // touch
                if (this.hasListen(this.PULL_UP) || this.hasListen(this.PULL_DOWN)) {
                    this._container.addEventListener('touchstart', this.handleTouchStart)
                    this._container.addEventListener('touchmove', this.handleTouchMove)
                    this._container.addEventListener('touchend', this.handleTouchEnd)
                }
            },
            hasListen(event) {
                return this.listens.indexOf(event) >= 0
            },
            init() {
                this.bindEvents()
                this.updateView()
                if (this.initScroll) {
                    this.handleScroll()
                }
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.init()
            })
        },
    }
</script>

<style lang="scss">
    .vue-data-loading {
        .loading-header, .loading-footer {
            position: relative;
            text-align: center;

            font-size: 0.8em;
            color: #868e96;

            .header-text, .footer-text {
                width: 100%;
                position: absolute;
            }
            .header-text {
                bottom: 20px;
            }
            .footer-text {
                top: 20px;
            }
        }
        .loading-content {

        }
    }
</style>