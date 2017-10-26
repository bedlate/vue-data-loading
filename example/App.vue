<template>
    <div>
        <vue-data-loading :loading="loading" :completed="completed" :listens="['infinite-scroll', 'pull-down', 'pull-up']" @infinite-scroll="infiniteScroll" @pull-up="pullUp" @pull-down="pullDown">
            <div slot="pull-down-ready">ready to refresh</div>
            <ul>
                <li v-for="(item, index) in list" :key="index">Lorem ipsum dolor sit item: {{item}}</li>
            </ul>
            <div slot="infinite-scroll-loading">loading...</div>
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

                    this.loading = false
                }, 1000)
            },

            pullUp() {
                this.fetchData()
                this.page++
            },
            pullDown() {
                this.list = []
                this.page = 1
                this.completed = false
                this.fetchData()
            },
            infiniteScroll() {
                this.fetchData()
                this.page++
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