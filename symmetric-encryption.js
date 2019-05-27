function encrpt(msg, key) {
  // 补充代码
  const secretMsg = [];
  for (let i = 0; i < msg.length; i++) {
    secretMsg[i] = msg[i].charCodeAt() + key;
  }

  return secretMsg.join('\n');
}

function decrypt(msg, key) {
  // 补充代码
  const secretMsg = msg.split('\n')
  const ret = [];
  for (let i = 0; i < secretMsg.length; i++) {
    ret[i] = String.fromCharCode(secretMsg[i] - key);
  }

  return ret.join("");
}

const msg = "hello";
const key = 3;

const secretMsg = encrpt(msg, key);

decrypt(secretMsg, key) === msg;

console.log(secretMsg);  // secretMsg !== msg

console.log(decrypt(secretMsg, key) === msg);  // true
