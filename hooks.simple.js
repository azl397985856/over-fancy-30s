// 补充代码
let hooks = [];
const state = [];

function useState(initialState) {
  hooks.push(useState.name); // 这部分存hookData以便用于扩展
  const cur = hooks.length - 1;
  if (state[cur] === undefined) {
    state[cur] = initialState;
  }
  return [state[cur], payload => (state[cur] = payload)];
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

function Wrapper(component) {
  // 补充代码
  hooks = [];
  component();
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
