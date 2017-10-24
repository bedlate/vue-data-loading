<template>
    <div>
        <vue-data-loading :loading="loading" :completed="completed" :listens="['pull-down', 'infinite-scroll']" @infinite-scroll="infiniteScroll" @pull-up="pullUp" @pull-down="pullDown">
            <ul>
                <li v-for="(item, index) in list" :key="index">Item: {{item}}</li>
            </ul>
            <div slot="infinite-scroll-loading" class="text-center">loading...</div>
        </vue-data-loading>
    </div>
</template>

<script>
    import VueDataLoading from '../src'

    export default {
        name: 'app',
        components: {
            VueDataLoading
        },
        data() {
            return {
                list: [],
                loading: false,
                completed: false,
                page: 1,
            }
        },
        methods: {
            fetchData() {
                this.loading = true
                setTimeout(() => {
                    if (this.page > 3) {
                        this.completed = true
                        this.loading = false
                        return
                    }

                    const temp = []
                    for (let i = this.list.length + 1; i <= this.list.length + 50; i++) {
                        temp.push(i)
                    }
                    this.list = this.list.concat(temp)
                    this.page++

                    this.loading = false
                }, 1000)
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
    .text-center {
        text-align: center;
    }
</style>