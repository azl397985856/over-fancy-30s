# [第一期]实现一个简化版的 React Hook - useState

## 问题描述
React Hooks 是 React 的一个新特性，是一项巨大的更新，对于整个react生态乃至前端都有着非常的影响力，Vue 3.0 已经计划加入hooks了，
社区有无数自定义的脑洞hooks。

那么React Hooks的原理是什么呢？ 我们能够实现一个简易版本的Hooks么？
下面请补充代码，使得输出符合预期。 如果你能够完成这个任务，你对Hooks的理解有可能超过90%的人

```js

// 补充代码


function Example() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("lucifer");

  console.log(`${name} clicked ${count} times`);

  setTimeout(() => setCount(count + 1), 1000);

  setTimeout(() => {
    setName("karl");
    setCount(0);
  }, 2000);
}

function Wrapper(component) {
  // 补充代码
}

Wrapper(Example);

console.assert(state[0] === 0, `#1 state[0] should be 0, but got ${state[0]}`);
console.assert(state[1] === "lucifer", `#2 state[1] should be lucifer, but got ${state[1]}`);

setTimeout(() => {
  Wrapper(Example);
  console.assert(state[0] === 1 , `#3 state[0] should be 1, but got ${state[0]}`);
  console.assert(state[1] === "lucifer", `#4 state[1] should be lucifer, but got ${state[1]}`);
}, 1000);
setTimeout(() => {
  Wrapper(Example);
  console.assert(state[0] === 0, `#5 state[0] should be 0, but got ${state[0]}`);
  console.assert(state[1] === "karl", `#6 state[1] should be karl, but got ${state[1]}`);
}, 2000);

```
## 扩展

如果你能够实现上面的功能的话，那让我更进一步，来看一个稍微复杂的例子.

请补充代码，使得输出符合预期。 如果你能够完成这个任务，你对Hooks的理解有可能超过99%的人

```js
// 补充代码

function Example() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("lucifer");

  console.log(`Example: ${name} clicked ${count} times`);

  setTimeout(() => setCount(count + 1), 1000);

  setTimeout(() => {
    setName("karl");
    setCount(0);
  }, 2000);
}

function Example2() {
  const [count, setCount] = useState(100);

  const [name, setName] = useState("karl");

  console.log(`Example2: ${name} clicked ${count} times`);

  setTimeout(() => setCount(count + 1), 1000);

  setTimeout(() => {
    setName("lucifer");
    setCount(0);
  }, 2000);
}

function Wrapper(component) {
  // 补充代码
}

const wrapperedExample = Wrapper(Example);
const wrapperedExample2 = Wrapper(Example2);

wrapperedExample();
wrapperedExample2();

console.assert(state[0] === 0, `#1 state[0] should be 0, but got ${state[0]}`);
console.assert(state[1] === "lucifer", `#2 state[1] should be lucifer, but got ${state[1]}`);

wrapperedExample2();
console.assert(state[2] === 100, `#3 state[2] should be 100, but got ${state[2]}`);
console.assert(state[3] === "karl", `#4 state[3] should be karl, but got ${state[3]}`);

setTimeout(() => {
  wrapperedExample2();
  console.assert(state[2] === 101, `#5 state[2] should be 101, but got ${state[2]}`);
  console.assert(state[3] === "karl", `#6 state[3] should be karl, but got ${state[3]}`);
}, 1000);
setTimeout(() => {
  wrapperedExample();
  console.assert(state[0] === 1, `#7 state[0] should be 1, but got ${state[0]}`);
  console.assert(state[1] === "lucifer", `#8 state[1] should be lucifer, but got ${state[1]}`);
}, 1000);
setTimeout(() => {
  wrapperedExample();
  console.assert(state[0] === 0, `#9 state[0] should be 0, but got ${state[0]}`);
  console.assert(state[1] === "karl", `#10 state[1] should be karl, but got ${state[1]}`);
}, 2000);
setTimeout(() => {
  wrapperedExample2();
  setTimeout(() => {
    console.assert(state[2] === 0, `#11 state[0] should be 0, but got ${state[2]}`);
    console.assert(state[3] === "lucifer", `#12 state[1] should be lucifer, but got ${state[3]}`);
  }, 2000);
}, 3000);

```

## 思考

如果需要增加和扩展程序通信的功能， 比如我想显示当前应用所有的hooks信息，
以及hook的状态是怎么变化的，甚至直接操作改变hooks状态（类似redux调试工具），
应该怎么组织代码？

## 挑战

画出你实现的hooks版本的内存图
