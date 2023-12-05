// function a (){
//     let b = 2;
//     return function(){
//         console.log(b);
//     }
// }

// let cFun = a();
// cFun();

// for (let k = 0; k < 5; k++) {
//   setTimeout(() => console.log(k), 0);
// }
// 5
// 5
// 5
// 5
// 5

//micro macro

var trees = ["pine","apple","oak","maple","cherry"];
delete trees[3];
delete trees[2];
delete trees[0];
console.log(trees[0])
console.log(trees);

// ["pine","apple","oak","cherry"]
// 5

// ==  ===
// 1 '1' true ==
// 1 '1' false ===

// 1 stack
// setTimeout

// console.log(1);
// console.log(2);
// setTimeout(() => console.log(0), 2000);
// console.log(3);
// console.log(4);