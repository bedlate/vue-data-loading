<template>
    <div>
        <div v-show="'pull-down' === pull.type && !pull.available" :style="{height: pullHeight + 'px'}">
            <slot name="pull-down-pre">
                <div class="d-table">
                    <div class="d-cell pull-down-pre">下拉刷新数据</div>
                </div>
            </slot>
        </div>
        <div v-show="'pull-down' === pull.type && pull.available" :style="{height: pullHeight + 'px'}">
            <slot name="pull-down-ing">
                <div class="d-table">
                    <div class="d-cell pull-down-ing">松开刷新数据</div>
                </div>
            </slot>
        </div>
        <div v-show="loading && 'pull-down' === loadingType" :style="{height: distance + 'px'}">
            <slot name="pull-down-loading">
                <div class="d-table">
                    <div class="d-cell pull-down-loading">加载中...</div>
                </div>
            </slot>
        </div>

        <slot></slot>

        <div v-show="'pull-up' === pull.type && !pull.available" :style="{height: pullHeight + 'px'}">
            <slot name="pull-up-pre">
                <div class="d-table">
                    <div class="d-cell pull-up-pre">上拉加载数据</div>
                </div>
            </slot>
        </div>
        <div v-show="'pull-up' === pull.type && pull.available" :style="{height: pullHeight + 'px'}">
            <slot name="pull-up-ing">
                <div class="d-table">
                    <div class="d-cell pull-up-ing">松开加载数据</div>
                </div>
            </slot>
        </div>
        <div v-show="loading && 'pull-up' === loadingType" :style="{height: distance + 'px'}">
            <slot name="pull-up-loading">
                <div class="d-table">
                    <div class="d-cell pull-up-loading">加载中...</div>
                </div>
            </slot>
        </div>

        <div v-show="loading && 'infinite-scroll' === loadingType" :style="{height: distance + 'px'}">
            <slot name="infinite-scroll">
                <div class="d-table">
                    <div class="d-cell infinite-scroll">加载中...</div>
                </div>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            container: {
                type: String,
            },
            loading: {
                type: Boolean,
                default: false
            },
            offset: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 60
            },
            listens: {
                type: Array,
                default() {
                    return ['pull-down', 'pull-up', 'infinite-scroll']
                }
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
                if (this.loading) {
                    return
                }
                this.updateView()
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
                }
                this.resetPull()
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
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.init()
            })
        },
    }
</script>

<style>
    .pull-down-pre, .pull-down-ing, .pull-down-loading, .pull-up-pre, .pull-up-ing, .pull-up-loading, .infinite-scroll {
        font-size: 0.8em;
        padding: 0.4em;
        color: #868e96;
    }

    .d-table {
        display: table;
        width: 100%;
        height: 100%;
    }

    .d-cell {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
</style>