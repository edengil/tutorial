// const cat = {
//     makeNoise: function () {
//       alert(this.noise);
//     },
//     noise: "Meow!"
//   };

//   const dog = {
//     makeNoise: cat.makeNoise,
//     noise: "Woof!"
//   };

//   cat.makeNoise();
//   dog.makeNoise();

// const makeNoiseFunction = function () {
//     alert(this.noise);
//   }

//   const cat = {
//     makeNoise: makeNoiseFunction,
//     noise: "Meow!"
//   };

//   const dog = {
//     makeNoise: makeNoiseFunction,
//     noise: "Woof!"
//   };

//   cat.makeNoise();
//   dog.makeNoise();

// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }

//   person.introduce() //throws an error

const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      hungry = false;
      alert("Im no longer hungry!");
    }
  },
};

//   person.feed() //should alert "I'm no longer hungry"

const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (num) {
    this.coinCount -= num;
  },
};

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that.",
};

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

const coffeeShop = {
  money: 100,
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 2.5 },
    doubleShot: { beanRequirement: 15, price: 7.5 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },
  buyBeans: function (numBeans) {
    costOfBeans = numBeans * 0.2;
    if (this.money - costOfBeans > 0) {
      this.beans += numBeans;
      this.money -= costOfBeans;
    }
  },
  buyDrink: function (drinkType) {
    this.beans -= drinkType.beanRequirement;
    this.money += drinkType.price;
  },

  makeDrink: function (drinkType) {
    for (drink in this.drinkRequirements) {
      if (drinkType === drink) {
        if (
          this.beans - this.drinkRequirements[drinkType].beanRequirement >
          0
        ) {
          this.buyDrink(this.drinkRequirements[drinkType]);
          return;
        } else {
          console.log("Sorry, we're all out of beans");
          return;
        }
      }
    }
    console.log(`Sorry, we don't make ${drinkType}`);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
