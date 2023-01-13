---
title: React笔记
date: 2023-01-10T21:21:44
tags: []
categories: []
image: ""
slug: 20230110212144
draft: true
---

## React & JavaScript

### 简介

```js
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)
```

euqls:

```js
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```


```js
() => ()  // function
```

tips:
- use more `console.log()`
- add fragments:

```js
return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
)
```

- Don't use `var`

### js语法

list

foreach

```js
t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})
```

map

> map在React中的使用相当频繁

```js
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed


const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
```

```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```

函数

```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```

### 组件 事件

计数器
