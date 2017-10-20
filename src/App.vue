<template>
    <div>
        <ul style="height: 600px; overflow-y: scroll" ref="container">
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
        <touch-refresh @infinite-scroll="fetchData"></touch-refresh>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import TouchRefresh from './components/touch-refresh.vue'

    export default {
        name: 'app',
        components: {
            TouchRefresh
        },
        data() {
            return {
                list: [
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                    'Lorem ipsum dolor sit amet.',
                ]
            }
        },
        methods: {
            fetchData() {
                this.list = this.list.concat(this.list)
            }
        }
    }
</script>
