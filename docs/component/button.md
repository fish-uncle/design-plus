# Button 按钮
常用的操作按钮。

## 基础用法
使用 `type`、`round` 来定义按钮的样式。

:::demo
button/basic
:::

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::demo
button/disabled
:::

## 自定义颜色
您可以自定义按钮颜色。

我们将自动计算 hover 和 active 颜色。
:::demo
button/custom
:::

## 属性
|  属性   | 说明  | 类型  | 可选值  | 默认值  |
|  ----  | ----  | ----  | ----  | ----  |
| type  | 类型 | string | primary / success / warning / danger / info / text | — |
| round  | 是否为圆角按钮 | boolean | — | false |
| color  | 自定义颜色 | string | 16进制颜色码 | — |
| disabled  | 是否为禁用状态 | boolean | — | false |

## 插槽
|  插槽名   | 说明  |
|  ----  | ----  |
| —  | 自定义默认内容 |
