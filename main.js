console.log("hello world");

let v = document.querySelector("div");
console.log(v);
v.classList.add("black");
v.addEventListener("click", () => console.log("click"));

var minimumSum = function (num) {
  let s = num.toString();
  s = s.split("").sort();
  console.log(s[0] * 10 + s[2] * 1 + s[1] * 10 + s[3] * 1);
  return s[0] * 10 + s[2] * 1 + s[1] * 10 + s[3] * 1;
};

minimumSum(2932);

let c = /^mario[\d]/i;

console.log(c.test("Mario3add"));

const callbackFun = (val, callb) => {
  setTimeout(() => {
    console.log(callb(val));
  }, 2000);
  let b = 4 * 35;
  console.log(b);
};

callbackFun(5, (v) => v * 5);

//obtener elemento rood del dom??
