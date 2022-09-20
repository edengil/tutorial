let users = [];

// const getData = function () {
//   users = [{ name: "Rick" }, { name: "Morty" }];
//   console.log("Got users");
// };

// const getData = function (displayData) {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//     displayData();
//   }, 3000);
// };

// const displayData = function () {
//   console.log("Going to display users");
//   for (user of users) {
//     console.log(user.name);
//   }
// };

// getData(displayData);

// const first = function (callback) {
//   //receive the function as a parameter
//   setTimeout(function () {
//     console.log("should be first");
//     callback(); //this is the `second` function being invoked
//   }, 3000);
// };

const first2 = () => {
  setTimeout(function () {
    console.log("should be first");
    second(); //this is the `second` function being invoked
  }, 3000);
};

// first2();

const second = function () {
  console.log("should be second");
};

// first(second); //pass the second function to the first, as an argument

const greet = () => {
  console.log("Hello there");
};

const greet2 = function () {
  console.log("Hello there");
};

const greet3 = (name) => {
  console.log("Hello there, " + name);
};

const greet4 = (name) => console.log("Hello there, " + name);

const greet5 = (name) => console.log("Hello there, " + name);

// greet(); //prints "Hello there, Jolene"
// greet2(); //prints "Hello there, Jolene"
// greet3("Eden"); //prints "Hello there, Jolene"
// greet4("Jolene"); //prints "Hello there, Jolene"
// greet5("Koral"); //prints "Hello there, Jolene"

const square = (num) => console.log(Math.pow(num, 2));

// square(4); // should print 16

const add = (x, y) => {
  return x + y;
};

const sum = add(1, 2);
// console.log(sum); //prints 3

const add2 = (x, y) => x + y;

const sum2 = add2(1, 2);
// console.log(sum2); //prints 3

const getHypotenuse = (a, b) => {
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = aSquared + bSquared;
  return Math.sqrt(cSquared);
};

const hypoteneuese = getHypotenuse(3, 4);
// console.log(hypoteneuese); //prints 5

const getFormalTitle = (title, name) => title + " " + name;

// console.log(getFormalTitle("Master", "Eden"));

const suspenseBuilder1 = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");

    setTimeout(function () {
      //normal function
      console.log("The name is: " + this.name);
    }, 3000);
  },
};

// suspenseBuilder1.displayName();

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");

    setTimeout(() => {
      //this is the change
      console.log("The name is: " + this.name);
    }, 3000);
  },
};

// suspenseBuilder.displayName();

//ex1
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = (pushOrPull) => pushOrPull();

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"

//ex2
const getTime = function (returnTime) {
  const time = new Date();
  returnTime(time);
};

const returnTime = function (time) {
  alert("The current time is: " + time);
};

//   getTime(returnTime);

//ex3

const logData = (word) => console.log(word);

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

// displayData(alert, logData, "I like to party");

//ex4
const sumOf3 = (x, y, z) => x + z + y;

//ex5
const capitalize = (text) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();
// console.log(capitalize("bOb")); // returns Bob
// console.log(capitalize("TAYLOR")); // returns Taylor
// capitalize("feliSHIA"); // returns Felishia

//ex6
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => determineWeather(temp);

commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
console.log(commentOnWeather(30));
console.log(commentOnWeather(22));

//ex7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);
const box = document.getElementById("box");
box.style.backgroundColor = "red";

box.onclick = function () {
  explode(shineLight, makeSound, "BOOM");
};
