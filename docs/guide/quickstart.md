# 快速开始
本节将介绍如何在项目中使用 demo-ui。

## 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import demoUI from 'demo-ui'
import 'demo-ui/umd/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(demoUI)
app.mount('#app')
```

## 按需导入
您需要使用额外的插件来导入要使用的组件。

首先，安装 babel-plugin-component
```shell
npm install babel-plugin-component -D
```
然后，将 .babelrc 修改为：
```json
{
	"plugins": [
	  [
		  "component",
		  {
			  "libraryName": "demo-ui",
			  "libDir": "es"
		  }
	  ]
  ]
}
```

```vue
<template>
	<d-button type="success" round>按钮</d-button> 
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { DButton } from 'demo-ui'

export default defineComponent({
	name: 'home',
	components: {
		DButton,
	},
})
</script>
```
