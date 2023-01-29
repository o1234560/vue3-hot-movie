# hot-movie

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 笔记

## 使用vant

#### 安装
```
npm i vant unplugin-vue-components -D
```

#### 在vue.config.js中配置

```
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
};

```


## keep-alive
```
<router-view>
  <keep-alive exclude="HomeView"> // exclude="HomeView"，缓存时，排除名字为 HomeView 的组件。
    <component :is="Component"/>
  </keep-alive>
</router-view>
```