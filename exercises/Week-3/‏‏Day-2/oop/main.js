class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const dani = new Human("Dani", 28, false);
const printDani = dani.isFriendly
  ? `${dani.name} is friendly`
  : `${dani.name} is ${dani.age} and not friemdly`;
// console.log(printDani);

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }
  giveBrith(name) {
    this.children.push(name);
    console.log(`Boom. Birthed ${name}`);
  }
}
// const cat = new Animal("Puss", 4);
const dog = new Animal("Shnow", 4);
// console.log(dog.name + " has " + dog.numLegs + " legs");
//prints "Puss has 4 legs"
// cat.giveBrith("e");
// cat.giveBrith("ed");
// cat.giveBrith("ede");
// cat.giveBrith("eden");
// console.log(cat.children);
// class Vehicle {
//   constructor(x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this._speed = speed;
//   }

//   set speed(speed) {
//     if (speed < 0) {
//       return console.log("Speed must be positive");
//     }
//     this._speed = speed;
//   }
//   get speed() {
//     return this._speed;
//   }
// }

class Vehicle {
  static carsSold = 0;
  static eden = 1;
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
    Vehicle.eden = 100;
  }
  set fuel(fuel) {
    if (fuel < 0) return console.log("Fuel must be positive");
    if (fuel > 150) return console.log("Fuel must be last then 150");

    this._fuel = fuel;
  }
  get fuel() {
    return this._fuel;
  }
  static getInfo() {
    console.log("Cars are great");
  }
  static calculateMoney() {
    console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
  }
  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }
}

const car2 = new Vehicle(3, 4, 5);
const car3 = new Vehicle(3, 4, 5);
const car4 = new Vehicle(3, 4, 5);
const car5 = new Vehicle(3, 4, 5);

// console.log(Vehicle.carsSold);
// console.log(Vehicle.eden);
Vehicle.calculateMoney();
const car = new Vehicle();
car.x = 3;
car.y = 1;
car.speed = 5;

// console.log(car.x); //prints 3
// console.log(car.y); //prints 1
// console.log(car.speed); //prints 5

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed); // prints undefined
c.speed = 10;
// console.log(c.speed);

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log("Added " + animal.name + " to the zoo");
  }

  showAnimals() {
    this.animals.forEach((a) => console.log(a.name));
  }
}

// class Animal {
//   constructor(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
//   }
// }

const cat = new Animal("Puss", 4);
const zoo = new Zoo();

// zoo.addAnimal(cat); // prints "Added Puss to the zoo"
// zoo.addAnimal(dog); // prints "Added Puss to the zoo"

// zoo.showAnimals(); // prints "Puss"
