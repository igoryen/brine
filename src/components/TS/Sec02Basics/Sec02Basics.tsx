import React from 'react';
import './Sec02Basics.scss';

const Sec02Basics = () => (
  <div className="Sec02Basics">
    Sec02Basics Component
  </div>
)

const person = {
  name: "Igor",
  age: 40,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // a tuple (2 elements)
};

person.role.push('admin'); // 1
person.role[1] = 10; // 1

let favouriteActivities: string[];

console.log(person.name);
console.log(person)

export default Sec02Basics;

/**
 * 1. no TS complaint
 */
