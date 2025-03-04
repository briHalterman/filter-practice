const numbers = [10, 20, 30, 40, 50];

const higherThan22 = numbers.filter((num) => num > 22);
console.log(higherThan22);

const students = [
  {
    name: 'Kelly',
    age: 27,
    eyeColor: 'blue',
  },
  {
    name: 'George',
    age: 19,
    eyeColor: 'brown',
  },
  {
    name: 'Beth',
    age: 43,
    eyeColor: 'brown',
  },
];

const brownEyedStudents = students.filter(
  (student) => student.eyeColor === 'brown'
);
console.log(brownEyedStudents);

const under30 = students.filter((student) => student.age < 30);
console.log(under30);
