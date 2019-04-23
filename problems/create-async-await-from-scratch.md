# [第二期]实现一个简化版的 async/await

## 问题描述
ES7的 async/await 由于其简洁性和符合直觉的异步写法深得前端开发者的喜爱。

async顾名思义是“异步”的意思，async 关键字后面的函数会隐式返回Promise对象。而await从字面意思上是“等待”的意思，就是用于等待异步完成。并且await只能在async函数中使用

你可以把它看成generator的语法糖。


补充代码，使得输出符合要求。

```jsx
function newAsync(genFunc) {
  // 补充代码
}


// test
function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve({
        userId: 1,
        userName: 'lucifer'
    }), 1000))
}

function fetchArticle(user) {
    console.log(user);
    return new Promise(resolve => setTimeout(() => resolve({
        id: 2,
        title: 't',
        content: 'hello world~'
    }), 3000))
}

function* t() {
  const user = yield fetchUser();
  const article = yield fetchArticle(user);
  console.log(article);
}

newAsync(t) // 一秒后输出正确的user对象， 四秒后输出正确article对象




```
## 扩展

- 如果Promise reject了应该怎么处理，你应该怎么修改代码

- 如何才能够捕获Promise内部的异常，使用try/catch么？有没有更优雅的方式