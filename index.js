// Problem >>>>>>>>>> : Array Traversal
// const names = ['Ahsan', 'Ahmad', 'Ali', 'Naeem'];

// using the old for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// using the for of loop;

// for (let name of names) {
//   console.log(name);
// }

// /problem 2 >>>>>>>>>>>>> use strict
// 'use strict';

//  if we use use strict then strict behaviour of JS is enabled and in the below function we sae an  error  in the console that Duplicate parameter name not allowed in this context.

// sum(15, 25);

// function sum(a, a) {
//   console.log(a, a);
// }

//  problem 3 ===>>>>>>>>>>>>>>>>>>>> How to detect an array in JS;

// console.log(typeof {});
// console.log(typeof []);

// console.log([] instanceof Array);
// console.log(Array.isArray([]));

//  problem 4 ===>>>>>>>>>>>>>>>> Primitive are copied by their values and non-primitive are copied by their refernce;
//  The another fundamental difference between primitive and refernce is that primitive values are immutable and non-primitive values are mutable

// let name1 = 'Ahsan';
// let name2 = name1;
// name2 = 'Ahmad';
// console.log(name1);  return "Ahsan"

// let obj1 = { id: 1, name: 'Ahsan' };
// let obj2 = obj1;
// obj2.name = 'Ahmad';
// console.log(obj1.name);  returns Ahsan

// const arr1 = [1, 2, 3];
// arr2 = arr1;
// arr1.push(2);
// console.log(arr1);   returns [ 1, 2, 3, 2 ] as non-primitve are copied by their refernce

//  problem 5 ===>>>>>>>>>>>>>>>> what wil be output ??

// const a = {};
// const b = {};

// c = a;
// console.log(a === b);  This returns false as objects are non-primitve data types and two similar objects are not equal in JS
// console.log(b === c); This also returns false as objects are non-primitve data types and two similar objects are not equal in JS

// const array = [{ id: 1, name: 'Ahsan' }];

// console.log(array.indexOf({ id: 1, name: 'Ahsan' }));  This will returns -1 because objects are pass by refernce so it;s never found the result.

//  problem 6 ===>>>>>>>>>>>>>>>> Guess the output

// var myName = 'Ahsan';

// const guessMyName = () => {
// //   console.log(myName);  returns undefined here due to hoisting  as myName is also defined in this function and local variables takes precedence over global variables;
// //   var myName = 'Ali';
// };

// guessMyName();

//  problem 7 ===>>>>>>>>>>>>>>>>  write a program to compare two arrays are equal or not;

// const arr1 = [3, 5, 9, 4, 88];
// const arr2 = [88, 5, 9, 4, 3];

// const isArraysSame =
//   arr1.length === arr2.length &&
//   arr1.every((curr) => {
//     if (arr2.indexOf(curr) > -1) {
//       return (curr = arr2[arr2.indexOf(curr)]); return true as both arrays contains same values it does'nt matter about their placement
//     }
//   });

// console.log(isArraysSame);

//  problem 8 ===>>>>>>>>>>>>>>>> Program to removes duplicates in an array;

// The difference between Set and Array is Set always contain unique values and Arrays contain duplicate values too.

// let arr4 = [1, 2, 3, 4, 1, 3, 4, 1, 1, 3, 8, 9];
// // const uniqueArray = [...new Set(arr4)];  USing Set removes here duplicate values so we copy the remaining values using the spread operator.

// console.log(uniqueArray);

//  problem 9 ===>>>>>>>>>>>>>>>>  write a  program to reverse an integar

// function reverseInt(num) {
//   let revInt = num.toString().split('').reverse().join('');
//   if (revInt.endsWith('-')) {
//     revInt = '-' + parseInt(revInt);
//     return revInt;
//   } else {
//     parseInt(revInt);
//   }
// }

// console.log(reverseInt(-321));

//  problem 10 ===>>>>>>>>>>>>>>>> Program to find an prime or composite numbers;
// let number = 10;
// let isPrime = true;

// for (let i = 2; i < number; i++) {
//   if (number % i == 0) isPrime = false;
// }

// if (isPrime == true) {
//   console.log(`${number} is  a prime number`);
// } else {
//   console.log(`${number} is not  a prime number`);
// }

//  problem 11 ===>>>>>>>>>>>>>>>> Find factorial of any numbers in JavaScript;

// let num = 5;
// // // first method
// for (let i = num; i > 1; ) {
//   i = i - 1;
//   var fact = num * i;
//   num = fact;
// }

// 2nd method
// // for (var fact = 1; num > 1; num--) {
// //   fact = fact * num;
// // }

// console.log(fact);

// problem 12 ===>>>>>>>>>>>>>>>> Find union of two arrays;

// const num1 = [2, 8, 6, 2];
// const num2 = [6, 9, 2];

// function getUnion() {
//   const combineTwoArrays = [...num1, ...num2];
//   return [...new Set(combineTwoArrays)];
// }

// console.log(getUnion().sort((a, b) => b - a));

//  problem 13 ===>>>>>>>>>>>>>>>> find intersection of two arrays;

// const num1 = [2, 8, 6, 2];
// const num2 = [6, 9, 2];

// const intersection = num1.filter((curr) => num2.includes(curr));

// console.log([...new Set(intersection)]);

//  problem 14 ===>>>>>>>>>>>>>>>> Curying sum

// Curying is when we return another anonymous funcion inside  function
// using the regular function method
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// now using the arrow function

// const sum = (a) => (b) => (c) => a + b + c;

// console.log(sum(1)(3)(4));

// problem 15 ===>>>>>>>>>>>>>>>>  Find whether a character is vowel or consotant;

// function findVowel(char) {
//   char = char.toLocaleLowerCase();
//   if (
//     char === 'a' ||
//     char === 'e' ||
//     char === 'i' ||
//     char === 'o' ||
//     char === 'u'
//   ) {
//     console.log(`${char} is vowel`);
//   } else {
//     console.log(`${char} is consotant`);
//   }
// }

// findVowel('A');

//  problem 16 ===>>>>>>>>>>>>>>>> Find the Fibonacci sequence ;

// const num = 10;

// let x = 0;
// let y = 1;
// let fn = x + y;

// while (fn < num) {
//   console.log(fn);
//   fn = x + y;
//   x = y;
//   y = fn;
// }

//  problem 17 ===>>>>>>>>>>>>>>>>  ASI(Automatic Semicolon Insertion) Is semi colon is Optional?
// var x = 1,
//   y = 1;

// x;
// ++y;
// console.log(x, y);

// program 18 ===>>>>>>>>>>>>>>>> Write a  program to swap two numbers;

// const swap = () => {
//   let a = 10;
//   let b = 20;

// //   a = a + b;  a here  at the end become 30
// //   b = a - b;  b here at the end become 10
// //   a = a - b;     a here  at the end become 20 so, a and b swap as you can see clearly;
//   console.log(a);
//   console.log(b);
// };

// swap();

// program 19 ===>>>>>>>>>>>>>>>> Find the average of an array;

// const array = [8, 8, 2, 2];

// const average = array.reduce((acc, curr, index, arr) => {
//   let total = acc + curr;
//   if (index === arr.length - 1) {
//     return total / arr.length;
//   }
//   return total;
// }, 0);

// console.log(average);

//  program 20 ===>>>>>>>>>>>>>>>> How to flatten an array (Convert 2 and 3D array to 1))

// const arr = [
//   ['zone-1', 'zone-2'],
//   ['zone-3', 'zone-4'],
//   ['zone-5', 'zone-6'],
// ];

// const flatArray = arr.reduce((acc, curr) => {
//   return acc.concat(curr);  this will convert this array to a single demension array;
// });

// console.log(flatArray[2]);

// 2nd method ===>>>>>>>>>>>>>>>>

// const arr = [
//   ['zone-1', 'zone-2'],
//   ['zone-3', 'zone-4'],
//   ['zone-5', ['zone-6', 'zone-7']],
// ];

// console.log(arr.flat(2));  2 here means depth how deep the array is as you see above in line 274

//   Q******Differnce between HOC and Callback function
// Function which takes another function as an argument is called HOC.
// Function which get passed as an argument to another function is called callback function

// const sum = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };

// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };

// console.log(calculator(2, 4, sum));   calculator is HOC here as it takes another function as an argument and sum is an CBF as it passed an argument to another argument
