// let rand1 = Math.random();
// let num1 = 10*Math.round(rand1* 1000) / 1000;

// let rand2 = Math.random();
// let num2 = 10*Math.round(rand2* 1000) / 1000;

// let rand3 = Math.random();
// let num3 = 10*Math.round(rand3* 1000) / 1000;

// let rand4 = 10*Math.random();
// let num4 = Math.round(rand4* 1000) / 1000;

// let rand5 = 10*Math.random();
// let num5 = Math.round(rand5* 1000) / 1000;

// console.log(Math.max(num1.toFixed(2), num2.toFixed(2), num3.toFixed(2), num4.toFixed(2), num5.toFixed(2)));
// console.log(Math.min(num1.toFixed(2), num2.toFixed(2), num3.toFixed(2), num4.toFixed(2), num5.toFixed(2)));

//  let arr = [];

//  for (let i = 0; i < 5; i++) {
//   arr[i] = 10*Math.round((Math.random())* 1000) / 1000;
// }
// console.log(arr);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

 let arr = [];

 for (let i = 0; i < 5; i++) {
  arr[i] = (10*Math.random()).toFixed(2);
}
console.log(arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));
