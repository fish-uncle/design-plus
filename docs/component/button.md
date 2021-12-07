# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`round` 来定义按钮的样式。
<p>
<d-button>Default</d-button>
<d-button type="primary">Primary</d-button>
<d-button type="success">Success</d-button>
<d-button type="info">Info</d-button>
<d-button type="warning">Warning</d-button>
<d-button type="danger">Danger</d-button>
</p>
<p>
<d-button round>Default</d-button>
<d-button type="primary" round>Primary</d-button>
<d-button type="success" round>Success</d-button>
<d-button type="info" round>Info</d-button>
<d-button type="warning" round>Warning</d-button>
<d-button type="danger" round>Danger</d-button>
</p>

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
<vp-demo>
111
</vp-demo>
<d-button :disabled="true">按钮</d-button>
<d-button :disabled="true" type="primary">按钮</d-button>
```vue
<template>
	<d-button>按钮</d-button>
</template>
```

## Button 属性
|  属性   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| size  | 尺寸 | string | medium / small / mini | — |
| type  | 类型 | string | primary / success / warning / danger / info / text | — |
| round  | 是否为圆角按钮 | boolean | — | false |
| loading  | 是否为加载中状态 | boolean | — | false |
| disabled  | 是否为禁用状态 | boolean | — | false |

## Button 插槽
|  插槽名   | 说明  |
|  ----  | ----  |
| —  | 自定义默认内容 |
