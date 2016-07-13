React Hot Loader And Redux Boilerplate
=====================

本项目致力于提供能够快速展开React项目开发的Boilerplate，支持React组件的热加载，并引入了 Redux 和 Route ，提供了简单的导航栏页面示例。
压缩包在上级releases目录下，直接下载即可使用。

## 用法

根据 package.json 中的配置安装依赖库。
公司内需要使用 [tnpm](http://km.oa.com/articles/show/260990) 进行安装，npm的使用可以参考 [这里](http://javascript.ruanyifeng.com/nodejs/packagejson.html) 。

```
npm install
npm start
```
在浏览器中打开 [http://localhost:3001](http://localhost:3001) 。
现在可以编辑 `src/containers/App/index.js`，Webpack实时打包将改动映射到页面，无需刷新页面即可实现代码替换。

也可以通过以下命令，进行用于线上发布的代码构建。
```
npm run build
```

## Webpack配置
sass和react的处理工具请参照配置文件。

## 代码目录结构

- src/components：无状态组件；
- src/containers：核心业务逻辑；
- src/libs: ui公告组件，自定义组件；
- src/index.js：web应用入口；
- src/routes.js：路由定义；
- static: 存放打包后的静态文件；
- package.json: npm项目配置；
- webpack.config.js: 开发环境使用；
- webpack.config.prod.js: 线上发布使用；
- boilerplate的压缩包

## action定义
详见 [action定义规范](https://github.com/acdlite/flux-standard-action)

## Redux应用
1. src根目录定义了全局的 reducers 和 configureStore(createStore)，全局 reducers 集中引用各子页面的reducers，据此创建全局 Redux store。
2. 应用了中间件redux-thunk（src/configureStore.js），支持dispatch function，以此让 action creator 控制反转。被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它。

##redux-devtools
详见 [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) 。

