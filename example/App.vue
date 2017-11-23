<template>
    <div class="app">
        <h1>vue-data-loading</h1>
        <vue-data-loading :loading="loading" :completed="completed" :listens="['infinite-scroll', 'pull-down']" :init-scroll="true" @infinite-scroll="infiniteScroll" @pull-down="pullDown">
            <div slot="pull-down-ready">ready to refresh</div>
            <ul>
                <li v-for="(item, index) in list" :key="index">测试专用填充数据: {{item}}</li>
            </ul>
            <div slot="infinite-scroll-loading">loading...</div>
            <div slot="completed">completed!</div>
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
//            this.fetchData()
        }
    }
</script>

<style lang="scss">
    .app {
        max-width: 400px;
        margin: 0 auto;
        text-align: center;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }
</style>