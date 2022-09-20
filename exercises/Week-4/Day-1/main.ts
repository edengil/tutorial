let num: number = 0;
let num1: number = 0;
console.log(num);
console.log(num1);

let id = 5; // Inferred as 'number'
let firstname = "danny"; // Inferred as 'string'
let hasDog = true; // Inferred as 'boolean'

// let id: number = 5;
// let firstname: string = "danny";
// let hasDog: boolean = true;
let ids: number[] = [1, 2, 3, 4, 5]; // array of type 'number'
let names: string[] = ["Danny", "Anna", "Bazza"]; // array of type 'string'
let options: boolean[] = [true, false, false]; // array of type 'boolean'

ids.push(6); // OK
names.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

person = {
  name: "John",
  location: "Israel",
  isProgrammer: true,
};

// person.isProgrammer = "Yes"; // ERROR, must be of 'boolean' type

// person = {
//   name: "John",
//   location: "Israel",
// };
// ERROR, missing 'isProgrammer' property

// Calculate the circumference of a circle given its diameter
function circumference(diameter: number): string {
  return "The circumference is " + Math.PI * diameter;
}

// console.log(circumference(10)); // => "The circumference is 31.41592653589793"

// The same function, using ES6 arrow function.
//
const circumference2 = (diameter: number): string => {
  return "The circumference is " + Math.PI * diameter;
};
// console.log(circumference2(10)); // => "The circumference is 31.41592653589793"
//
//

class Person {
  name: string;
  isProgrammer: boolean;
  children: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isProgrammer = c;
    this.children = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.children} children`;
  }
}

const person1 = new Person("John", false, 2);
// const person2 = new Person("Michael", "yes", 4); // ERROR, Argument of type 'string' is not assignable to parameter of type 'boolean'.

// console.log(person1.sayHello()); // => Hi, my name is John and I have 1 children

let result: number | string;

result = 10; // OK
result = "Hi"; // also OK
// result = false; // a boolean value, ERROR

type ID = number | string; // Type alias 'ID'

let returnedId: ID = 8; // OK
let newId: ID = "9"; // OK

// const val: string | number | boolean = true;

// function doX(val: string | number | boolean): string | number | boolean {
//   return val == 8;
// }

// doX(val);

type Type = string | number | boolean;
const val: Type = true;

function doX(val: Type): Type {
  return val == 8;
}

doX(val);
//
//
let favouriteColor: "red" | "blue" | true | 12;

favouriteColor = "blue";
// favouriteColor = "crimson"; // ERROR, Type "crimson" is not assignable to type 'red' | 'blue' | true | 12.
//
//
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction.Right); // => 1

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction2.Up); // => UP
//
//
//
//
//ex1

function concat(str: string | string[], bool: boolean | number): void {
  if (Array.isArray(str)) {
    str = str.join(" ");
  } else if (typeof str !== "string") {
    console.log(`Function doesn't support type ${typeof str}`);
  }
  if (
    (typeof bool === "boolean" && bool) ||
    (typeof bool === "number" && bool == 1)
  ) {
    console.log(str);
  } else {
    console.log(`Function doesn't support 'isPrinted' with value '${bool}'`);
  }
}

// concat("Tomer", false);
// concat("Tomer", 2);
// concat(["Tomer", "Sagi"], 1);
// concat(["Tomer", "Sagi"], 0);
// concat(["Michael", "Jordan", "is", "the", "King"], true);
// //ex1
//
//
//
//
//ex2
type Phone = string | number | string[] | number[];

function print_numbers(phoneNumber: Phone): void {
  if (Array.isArray(phoneNumber)) {
    console.log(`Array of ${typeof phoneNumber[0]}s`);
    // } else if (typeof str !== "string") {
    //   console.log(`Function doesn't support type ${typeof str}`);
  } else if (typeof phoneNumber === "string") {
    console.log(`The type is string`);
  } else if (typeof phoneNumber === "number") {
    console.log(`The type is number`);
  } else {
    console.log(`Function doesn't support 'phoneNumber' with this value`);
  }
}

print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);
// if (
//   (typeof bool === "boolean" && bool) ||
//   (typeof bool === "number" && bool == 1)
// ) {
//   console.log(str);
// } else {
//   console.log(`Function doesn't support 'isPrinted' with value '${bool}'`);
// }

//ex2
//
//
//
//

//
//
//
//
//ex1.1
const sum = (numArr: number[]): number => numArr.reduce((a, b) => a + b, 0);
//ex1.1
//
//
//
//
//ex1.2
const isEven = (num: number): boolean => num % 2 == 0;
//ex1.2
//
//
//
//
//ex1.3
const numArray1: number[] = [4, 7, 44, 5, 234];
const numArray2: number[] = [65, 33, 5, 2532, 32, 6];
const numArray3: number[] = [54, 6, 656, 4];

// console.log(`${numArray1} | ${sum(numArray1)} | ${isEven(sum(numArray1))}`);
// console.log(`${numArray2} | ${sum(numArray2)} | ${isEven(sum(numArray2))}`);
// console.log(`${numArray3} | ${sum(numArray3)} | ${isEven(sum(numArray3))}`);
//ex1.3
//
//
//
//
//ex2
class Student {
  name: string;
  age: number;
  arrayOfGrades: number[];

  constructor(n: string, c: number, p: number[]) {
    this.name = n;
    this.age = c;
    this.arrayOfGrades = p;
  }

  addGrade(grade: number): void {
    this.arrayOfGrades.push(grade);
  }
  getGradeAvg(): number {
    return sum(this.arrayOfGrades) / this.arrayOfGrades.length;
  }
}

const student1 = new Student("Eden Haim", 27, []);
student1.addGrade(90);
student1.addGrade(99);
student1.addGrade(88);
student1.addGrade(100);
const student2 = new Student("Gil", 18, [60, 77, 12, 34, 89]);
const student3 = new Student("John", 30, []);
student3.addGrade(0);
student3.addGrade(30);
student3.addGrade(65);
student3.addGrade(86);

const studentArr: Student[] = [student1, student2, student3];

// studentArr.forEach((student) => {
//   console.log(`${student.name} as average of ${student.getGradeAvg()}`);
// });
//ex2
//
//
//
//
