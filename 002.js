// Even Fibonacci numbers

let x = 1;
let y = 2;
let total = 0;

while (x < 4000000) {
  let z = x;
  x = y;
  y += z;
  if (x % 2 === 0) {
    total += x;
  }
}
console.log(total);
