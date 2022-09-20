"use strict";
let num = 0;
let num1 = 0;
console.log(num);
console.log(num1);
let id = 5; // Inferred as 'number'
let firstname = "danny"; // Inferred as 'string'
let hasDog = true; // Inferred as 'boolean'
// let id: number = 5;
// let firstname: string = "danny";
// let hasDog: boolean = true;
let ids = [1, 2, 3, 4, 5]; // array of type 'number'
let names = ["Danny", "Anna", "Bazza"]; // array of type 'string'
let options = [true, false, false]; // array of type 'boolean'
ids.push(6); // OK
names.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
let person;
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
function circumference(diameter) {
    return "The circumference is " + Math.PI * diameter;
}
// console.log(circumference(10)); // => "The circumference is 31.41592653589793"
// The same function, using ES6 arrow function.
//
const circumference2 = (diameter) => {
    return "The circumference is " + Math.PI * diameter;
};
// console.log(circumference2(10)); // => "The circumference is 31.41592653589793"
//
//
class Person {
    constructor(n, c, p) {
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
let result;
result = 10; // OK
result = "Hi"; // also OK
let returnedId = 8; // OK
let newId = "9"; // OK
const val = true;
function doX(val) {
    return val == 8;
}
doX(val);
//
//
let favouriteColor;
favouriteColor = "blue";
// favouriteColor = "crimson"; // ERROR, Type "crimson" is not assignable to type 'red' | 'blue' | true | 12.
//
//
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Right); // => 1
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // => UP
//
//
//
//
//ex1
function concat(str, bool) {
    if (Array.isArray(str)) {
        str = str.join(" ");
    }
    else if (typeof str !== "string") {
        console.log(`Function doesn't support type ${typeof str}`);
    }
    if ((typeof bool === "boolean" && bool) ||
        (typeof bool === "number" && bool == 1)) {
        console.log(str);
    }
    else {
        console.log(`Function doesn't support 'isPrinted' with value '${bool}'`);
    }
}
function print_numbers(phoneNumber) {
    if (Array.isArray(phoneNumber)) {
        console.log(`Array of ${typeof phoneNumber[0]}s`);
        // } else if (typeof str !== "string") {
        //   console.log(`Function doesn't support type ${typeof str}`);
    }
    else if (typeof phoneNumber === "string") {
        console.log(`The type is string`);
    }
    else if (typeof phoneNumber === "number") {
        console.log(`The type is number`);
    }
    else {
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
const sum = (numArr) => numArr.reduce((a, b) => a + b, 0);
//ex1.1
//
//
//
//
//ex1.2
const isEven = (num) => num % 2 == 0;
//ex1.2
//
//
//
//
//ex1.3
const numArray1 = [4, 7, 44, 5, 234];
const numArray2 = [65, 33, 5, 2532, 32, 6];
const numArray3 = [54, 6, 656, 4];
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
    constructor(n, c, p) {
        this.name = n;
        this.age = c;
        this.arrayOfGrades = p;
    }
    addGrade(grade) {
        this.arrayOfGrades.push(grade);
    }
    getGradeAvg() {
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
const studentArr = [student1, student2, student3];
// studentArr.forEach((student) => {
//   console.log(`${student.name} as average of ${student.getGradeAvg()}`);
// });
//ex2
//
//
//
//
