import React from 'react';
import './Sec02Basics.scss';

const Sec02Basics = () => (
  <div className="Sec02Basics">
    Sec02Basics Component
  </div>
)

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


function combine(input1: number, input2: number) { // 5
  const result = input1 + input2;
  return result;
}

// const combinedAges = combine(30, 26); // 6
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna'); // 6

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

let favouriteActivities: string[];

console.log(person.name);
console.log(person)

export default Sec02Basics;

/**
 * 1. no TS complaint
 * 2. no TS complaints, sadly
 * 3. TS complains, won't compile
 * 4. ADMIN is 'ADMIN', READ_ONLY is 100, AUTHOR is 200
 * 5. how to make combine() flexible, so it can work with both numbers and strings?
 * 6. how to add flexibility so that it accepts data of various types?
 */
