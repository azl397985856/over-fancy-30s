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

Wrapper(Example); // lucifer clicked 0 times
setTimeout(() => Wrapper(Example), 1000); // lucifer clicked 1 times
setTimeout(() => Wrapper(Example), 2000); // karl clicked 0 times

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

wrapperedExample(); // Example: lucifer clicked 0 times
wrapperedExample2(); // Example2: karl clicked 100 times
setTimeout(() => wrapperedExample2(), 1000); // Example2: karl clicked 101 times
setTimeout(() => wrapperedExample(), 1000); // Example: lucifer clicked 1 times
setTimeout(() => wrapperedExample(), 2000); // Example: karl clicked 0 times
setTimeout(() => wrapperedExample2(), 2000); // Example2: lucifer clicked 0 times

```