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
};

let favouriteActivities: string[];

console.log(person.name)

export default Sec02Basics;
