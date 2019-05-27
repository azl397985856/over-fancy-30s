function isPromise(f) {
  return typeof f === "object" && typeof f.then === "function";
}

function iterate(gen, value) {
    const { value:v, done } = gen.next(value);
    if (done) return Promise.resolve(v);
    const p = isPromise(v) ? v : Promise.resolve(v);

    p.then(res => iterate(gen, res));
}

function newAsync(genFunc) {
  const gen = genFunc();
  iterate(gen);
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

newAsync(t)


