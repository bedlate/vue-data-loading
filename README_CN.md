# vue-data-loading

[English Document](https://github.com/bedlate/vue-data-loading)

> 一个为滚动加载及下拉/上拉加载而生的组件.

这是一个演示： [HackNews](http://hacknews.xyz)

![vue-data-loading](https://github.com/bedlate/vue-data-loading/raw/master/screenshot.gif)


## 安装

    npm install vue-data-loading --save

## 使用

首先导入:

    import VueDataLoading from 'vue-data-loading'
    
注册为组件:

    components: {
        VueDataLoading
    },

你唯一需要做的就是用 `vue-data-loading` 标签将数据包裹起来.

    <vue-data-loading>
        <ul>
            <li v-for="(item, index) in list" :key="index">Item: {{item}}</li>
        </ul>
    </vue-data-loading>

另外，你也可以传入 `props` 或 `events` 参数到组件.

    <vue-data-loading :loading="loading" :listens="['pull-down', 'infinite-scroll']" @infinite-scroll="infiniteScroll" @pull-down="pullDown">
        <!--your data here-->
    </vue-data-loading>

有时候你也能想修改默认的样式或文字，非常简单，只要编辑对应的 `slot` 即可:

举个 `infinite-scroll-loading` 的例子:

*默认*:

    <slot :name="infinite-scroll-loading">加载中...</slot>

*编辑*:

    <div slot="infinite-scroll-loading" class="some-style-you-like">
        <img src="/path/to/your-icon.png">
        <span>loading...</span>
    </div>


这里有个 [完整的示例](https://github.com/bedlate/vue-data-loading/blob/master/example/App.vue)

## API

### 属性

#### loading

类型: boolean

默认: false

当 `loading` 为 `true` 时将不会触发任何事件, 所以你可以使用它来控制加载数据.

#### completed

类型: boolean

默认: false

当设置为 `true` 时将不会再触发 `infinite-scroll` 事件.

当所有数据全部加载完毕后，建议设置为 `true`

#### init-scroll

类型: boolean

默认: false

如果设置为 `true` 时，组件加载完毕后将会触发一次　`infinite-scroll` 事件.

通常用来处理页面首次加载时候接收数据.

#### distance

类型: number

默认: 60

单位: px

仅对 `touch*` 事件有效, 当下/上拉距离不小于设置的值的时候, `pull-down` 或 `pull-up` 事件将被触发.

#### offset

类型: number

默认: 0

单位: px

有时候你可能希望调节距离底部的距离，来提前触发 `infinite-scroll`

#### listens

类型: array

默认: ['infinite-scroll', 'pull-down', 'pull-up']

不在数组中的事件将不会被触发.

#### container

类型: string

必须: false

所有事件 `events` 默认绑定在 `window` ，如果你想自定义外层容器，需要指定其 `ref` .

#### watch-scroll

类型: boolean

默认: false

如果为 `true` 组件将会触发 `scrolling` 事件.

用来获取 `container` `scrollTop` 和 `scrollLeft` 属性.

### 事件

#### infinite-scroll

当容器已经达到窗口底部时触发

#### pull-down

当容器已经下拉超过 `distance` 属性时触发

#### pull-up

当容器已经上拉超过 `distance` 属性时触发

#### scrolling

当容器滚动时触发.

有个回调参数，返回当前容器的 (scrollTop, scrollLeft).


### Slots

#### infinite-scroll-loading

当已经滚动到窗口底部，且正在 `loading` 时显示

#### pull-down-before

当正在下拉，且下拉距离小于 `distance` 属性显示

#### pull-down-ready

当正在下拉，且下拉距离不小于 `distance` 属性显示

#### pull-down-loading

当正在下拉，且下拉距离不小于 `distance` 属性，且松手时数据正在 `loading` 时显示

#### pull-up-before

当正在上拉，且上拉距离小于 `distance` 属性显示

#### pull-up-ready

当正在上拉，且上拉距离不小于 `distance` 属性显示

#### pull-up-loading

当正在上拉，且上拉距离不小于 `distance` 属性，且松手时数据正在 `loading` 时显示

#### completed

当数据加载完毕(`completed`)，且没有加载中(`loading`，如下拉可以出发刷新)


## 开发

``` bash
# 安装依赖
npm install

# 运行示例 localhost:8080
npm run dev

# 编译 vue-data-loading 组件
npm run dist
```

