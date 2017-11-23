# vue-data-loading

[中文文档](https://github.com/bedlate/vue-data-loading/blob/master/README_CN.md)

> Another component for infinite scroll and pull down/up to load data.

Here is a demo: [HackNews](http://hacknews.xyz)

![vue-data-loading](https://github.com/bedlate/vue-data-loading/raw/master/screenshot.gif)


## Install

    npm install vue-data-loading --save

## Usage

Import first:

    import VueDataLoading from 'vue-data-loading'
    
Register as a component:

    components: {
        VueDataLoading
    },

The only you need to do is wrapping your data with `vue-data-loading` tag.

    <vue-data-loading>
        <ul>
            <li v-for="(item, index) in list" :key="index">Item: {{item}}</li>
        </ul>
    </vue-data-loading>

However, you can pass some `props` or `events` to the component.

    <vue-data-loading :loading="loading" :listens="['pull-down', 'infinite-scroll']" @infinite-scroll="infiniteScroll" @pull-down="pullDown">
        <!--your data here-->
    </vue-data-loading>

Sometimes, you may want to change the default style or text(html), that is easy, just edit the `slot`:

Here is a example for `infinite-scroll-loading` slot:

*default*:

    <slot :name="infinite-scroll-loading">加载中...</slot>

*edit*:

    <div slot="infinite-scroll-loading" class="some-style-you-like">
        <img src="/path/to/your-icon.png">
        <span>loading...</span>
    </div>


Here is a [full example](https://github.com/bedlate/vue-data-loading/blob/master/example/App.vue)

## API

### Props

#### loading

Type: boolean

Default: false

The component will not trigger any events while `loading` is `true`.

It should be `true` when data are downloading, and `false` when finished.

#### completed

Type: boolean

Default: false

The component will not trigger `infinite-scroll` if `true`.

It should be `true` when all data have be loaded.

#### init-scroll

Type: boolean

Default: false

The component will trigger `infinite-scroll` once if `true` when it has be mounted.

It uses to bootstrap when page first-time loads.

#### distance

Type: number

Default: 60

Unit: px

Only available for `touch*` event, when pull distance is not less than it, `pull-down` or `pull-up` will be triggered.

#### offset

Type: number

Default: 0

Unit: px

Sometimes you want to change bottom offset to trigger `infinite-scroll` in advance.

#### listens

Type: array

Default: ['infinite-scroll', 'pull-down', 'pull-up']

The component will not trigger the event if it not in the list.

#### container

Type: string

Required: false

All `events` bind on `window` if it is not set, or you need to specify a container `ref` to it.


### Events

#### infinite-scroll

Emit when container has already scrolled to bottom of window

#### pull-down

Emit when container has already pulled down

#### pull-up

Emit when container has already pulled up


### Slots

#### infinite-scroll-loading

Display when container has already scrolled to bottom of window and data is `loading`

#### pull-down-before

Display when distance of `pull-down` is less then `distance` prop

#### pull-down-ready

Display when distance of `pull-down` is not less then `distance` prop

#### pull-down-loading

Display when container has already `pull-down` and data is `loading`

#### pull-up-before

Display when distance of `pull-up` is less then `distance` prop

#### pull-up-ready

Display when distance of `pull-up` is not less then `distance` prop

#### pull-up-loading

Display when container has already `pull-up` and data is `loading`

#### completed

Display when data is `completed` and not `loading`


## Develop

``` bash
# install dependencies
npm install

# serve example with hot reload at localhost:8080
npm run dev

# build vue-data-loading component
npm run dist
```

