let hooks = [];
let state = [];

function useState(initialState) {
  hooks.push(useState.name); // 这部分存hookData以便用于扩展（比如做 chrome 扩展程序）

  const cur = hooks.length - 1;
  const incrementor = hooks.incrementor || 0;
  const pos = cur + incrementor;

  if (state[pos] === undefined) {
    state[pos] = initialState;
  }
  return [state[pos], payload => (state[pos] = payload)];
}

function Example() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("lucifer");

  setTimeout(() => setCount(count + 1), 1000);

  setTimeout(() => {
    setName("karl");
    setCount(0);
  }, 2000);
}

function Example2() {
  const [count, setCount] = useState(100);

  const [name, setName] = useState("karl");

  setTimeout(() => setCount(count + 1), 1000);

  setTimeout(() => {
    setName("lucifer");
    setCount(0);
  }, 2000);
}

function Wrapper(component) {
  let first = true;

  return function wrappered() {
    hooks = [];
    if (first) {
      // incrementor 是为了防止多个组件实例相互影响
      wrappered.incrementor = state.length;
      first = false;
    }
    hooks.incrementor = wrappered.incrementor;
    component();
  };
}

const wrapperedExample = Wrapper(Example);
const wrapperedExample2 = Wrapper(Example2);

wrapperedExample();

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
