import React from 'react';
import './Sec02Basics.scss';

const Sec02Basics = () => (
  <div className="Sec02Basics">
    Sec02Basics Component
  </div>
)

let userInput: unknown; // 14
let userName: string;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
  console.log('userName:', userName);
}

/**
 * 14. 'unknown' means 'any value'. It's better than 'any' because type 'any' is too lax.
 */

// ========================

function add(n1: number, n2: number) {
  return n1 + n2;
}
console.log("add():", add(1, 2));

function printResult(num: number): void { // 10
  console.log(`Result: ${num}`);
}

printResult(add(5, 12));

// let combineValues: (a: number, b: number) => number; // 11
// combineValues = add;
// console.log("combineValues():", combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num) => void) {
  const result = n1 + n2;
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log('in addAndHandle()', result);
  return result; // 13
}); // 12


/**
 * 10. This function has no return statement.
 *     Therefore, the type of its return is 'void' which it'd rather specify as ': void'.
 *     Although the return value of this function is 'undefined'.
 * 11. Specifying that the value is a function that takes 2 params of type 'number' 
 *     and returns data of type 'number'.
 * 12. Param C '() => {}' is anonymous function.
 * 13. Function definition defined that the type of the return value is void,
 *     yet TS doesn't complain that a return statement exists.
 */
// =========================

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Igor",
//   age: 40,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'] // a tuple (2 elements)
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 }; // 4

type ClusterA = number | string; // 9
type ClusterB = 'as-number' | 'as-string'; // 9

function combine(
  input1: ClusterA,
  input2: ClusterA,
  resultTypeConversion: ClusterB) { // 5
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultTypeConversion === 'as-number') {
    result = +input1 + +input2; // 8
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number'); // 6
console.log("combinedAges", combinedAges);

const combinedStringAges = combine('30', '26', 'as-number'); // 7
console.log("combinedStringAges", combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-string'); // 6
console.log("combinedNames", combinedNames);

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
console.log("u1:", u1);


type Guest = { name: string; age: number };

function greet(user: Guest) {
  console.log(`Hi, I am ${user.name}`);
}
greet({ name: 'Igor', age: 46 });

function isOlder(user: Guest, checkAge: number) {
  return checkAge > user.age;
}
console.log('isOlder():', isOlder({ name: 'Igor', age: 46 }, 44));

// =============================

const person = {
  name: "Igor",
  age: 40,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin'); // 1, 2, 3
// person.role[1] = 10; // 1, 3

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

// let favouriteActivities: string[];

console.log(person.name);
console.log(person)

export default Sec02Basics;

/**
 * 1. no TS complaint
 * 2. no TS complaints, sadly
 * 3. TS complains, won't compile
 * 4. ADMIN is 'ADMIN', READ_ONLY is 100, AUTHOR is 200
 * 5. added parameter C to force type casting to specifically 2 possible types.
 *    Combination of type 'union' and type 'literal'
 * 6. how to add flexibility so that it accepts data of various types?
 * 7. convert the type of data from type 'string' to type 'number'
 * 8. the plus sign casts to type 'number'
 * 9. This is a type 'alias' using type 'union'
 */
