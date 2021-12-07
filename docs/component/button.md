# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<d-button>按钮</d-button>
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
| plain  | 是否为朴素按钮 | boolean | — | false |
| round  | 是否为圆角按钮 | boolean | — | false |
| circle  | 是否为圆形按钮 | boolean | — | false |
| loading  | 是否为加载中状态 | boolean | — | false |
| disabled  | 是否为禁用状态 | boolean | — | false |
| icon  | 图标组件 | string / Component | — | — |
| autofocus  | 是否默认聚焦 | boolean | — | false |
| native-type  | 原生 type 属性 | string | button / submit / reset | button |
| auto-insert-space  | 自动在两个中文字符之间插入空格 | boolean | | — |

## Button 插槽
|  插槽名   | 说明  |
|  ----  | ----  |
| —  | 自定义默认内容 |
