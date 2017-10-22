<template>
    <div>
        <h1>Lorem ipsum dolor.</h1>

        <touch-refresh @infinite-scroll="infiniteScroll" @pull-up="pullUp" @pull-down="pullDown" :loading="loading" :listens="['pull-down', 'infinite-scroll']">
            <ul>
                <li v-for="(item, index) in list" :key="index">{{item}}</li>
            </ul>
        </touch-refresh>
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
                list: [],
                loading: false,
                data: [
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
                ],
            }
        },
        methods: {
            fetchData() {
                this.loading = true
                setTimeout(() => {
                    this.list = this.list.concat(this.data)
                    this.loading = false
                }, 400)
            },

            pullUp() {
                console.log('pull-up...')
                this.fetchData()
            },
            pullDown() {
                console.log('pull-down...')
                this.list = []
                this.fetchData()
            },
            infiniteScroll() {
                console.log('infinite-scroll...')
                this.fetchData()
            },
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style>
    ul {
        margin: 0;
    }
</style>