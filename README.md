# vue-data-loading

> Another component for infinite scroll and pull down/up to load data.

Here is a demo of [HackNews](http://hacknews.xyz)

## Screenshot

![vue-data-loading](https://github.com/bedlate/vue-data-loading/raw/master/screenshot.gif)


## Install

    npm install vue-data-loading --save

## Usage

Import first:

    import VueDataLoading from 'vue-data-loading'

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

And sometimes, you may want to change the default `slot`:

Here is a example for `infinite-scroll` slot:

*default*:

    <slot :name="infinite-scroll-loading">加载中...</slot>

*edit*:

    <div slot="infinite-scroll-loading" class="some-style-you-like">loading...</div>


Here is a [full example](https://github.com/bedlate/vue-data-loading/blob/master/example/App.vue)

## API

### Props

#### loading

Type: boolean

Default: false

The component will not trigger event while `loading` is `true`, so you can use it to fetch data.

#### completed

Type: boolean

Default: false

The component will not trigger `infinite-scroll` if `true`.

#### distance

Type: number

Default: 60

Unit: px

Only available for `touch*` event, when pull distance is not less than it, `pull-down` or `pull-up` will be emitted.

#### offset

Type: number

Default: 0

Unit: px

Sometimes you want to change bottom offset.

#### listens

Type: array

Default: ['infinite-scroll', 'pull-down', 'pull-up']

The component will not trigger `infinite-scroll` if it not in the list.

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


## Develop

``` bash
# install dependencies
npm install

# serve example with hot reload at localhost:8080
npm run dev

# build for example production with minification
npm run build

# build for example production and view the bundle analyzer report
npm run build --report

# build vue-data-loading component
npm run dist
```

