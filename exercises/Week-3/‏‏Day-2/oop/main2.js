class DataManger {
  constructor() {
    this.data = this.getFromDB();
  }

  getFromDB() {
    // some code that gets data from the DB
  }

  addData(data) {
    // code that saves the new piece of data to the DB
  }
}

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

class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}

class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}
const weArePoor = true;

const feeder = weArePoor ? new CheapFeeder() : new LuxuryFeeder();

class Animal {
  constructor(name, type, feeder) {
    this.name = name;
    this.type = type;
    this.feeder = feeder; //dependency injection!
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = this.feeder.getFood(this.type);
    this._consume(food);
  }
}
const bumdo = new Animal("Bumdo", "elephant", feeder);
bumdo.eat();

// console.log(feeder.getFood("monkey"));
