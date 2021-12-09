# 安装
## 环境支持
demo-ui 可以在支持 [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) 和 [ResizeObserver](https://caniuse.com/resizeobserver) 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，demoUI 也不再支持 IE 浏览器。

|  ![](/edge_32x32.png)   | ![](/firefox_32x32.png)  | ![](/chrome_32x32.png)  | ![](/safari_32x32.png)  |
|  ----  | ----  | ----  | ----  |
| Edge ≥ 79  | Firefox ≥ 78 | Chrome ≥ 64 | Safari ≥ 12 |

## 版本
demo-ui 目前还处于快速开发迭代中。

## 使用包管理器
我们建议您使用包管理器 (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 demo-ui, 然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 和 [webpack](https://webpack.js.org/)
```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install demo-ui --save

# Yarn
$ yarn add demo-ui

# pnpm
$ pnpm install demo-ui
```
如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) or [淘宝 npm 镜像](https://registry.npm.taobao.org/)。

## 浏览器直接引入
直接通过浏览器的 HTML 标签导入 demoUI，然后就可以使用全局变量 `demoUI` 了。

根据不同的 CDN 提供商有不同的引入方式， 根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://www.jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg
```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/demo-ui/umd/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/demo-ui"></script>
</head>
```
### jsDelivr
```html
<head>
  <!-- 导入样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/demo-ui/umd/index.css"
  />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/demo-ui"></script>
</head>
```
> **TIP**
>
> 我们建议使用 CDN 引入 demo-ui 的用户在链接地址上锁定版本，以免将来 demoUI 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。
