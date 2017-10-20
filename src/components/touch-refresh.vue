<template>
    <div>
    </div>
</template>

<script>
    import throttle from 'throttleit'
    import inViewport from 'element-in-view'

    export default {
        props: {
//            handler: {
//                type: Function,
//                required: true
//            },
//            shouldHandle: {
//                type: Boolean,
//                default: true
//            },
            container: {
                type: String,
            }
        },
        data() {
            return {
                events: ['scroll', 'resize']
            }
        },
        computed: {
            _container() {
                if (!this.container) {
                    return window
                }
                return this.$parent.$refs[this.container]
            }
        },
        methods: {
            handleEvent() {
                if (inViewport(this.$el)) {
                    this.$emit('infinite-scroll')
                }
            },
            bindEvents() {
                this.events.forEach(e => {
                    this._container.addEventListener(e, throttle(this.handleEvent, 200))
                })
            },
            init() {
                this.bindEvents()
            },
        },
        mounted() {
            this.init()
        },
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
</style>