//ex9

let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

function customerTesla(boughtTesla, isUSCitizen, yearOfTeslaPurchase) {
  if (boughtTesla) {
    if (isUSCitizen) {
      if (checktTeslaYears(yearOfTeslaPurchase) >= 4) {
        console.log(`Would you like an upgrade?`);
      } else {
        console.log("Would you satisfied?");
      }
    } else {
      console.log("Would you like to move to the US?");
    }
  } else {
    console.log("Would you interested in Tesla?");
  }
}
function checktTeslaYears(x) {
  return 2018 - x || 0;
}

customerTesla(boughtTesla, isUSCitizen, yearOfTeslaPurchase);

//ex11

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(1, 2);
numbers[3] = 1;
numbers.splice(numbers.length - 4);
numbers.unshift(0);
console.log(numbers);

//ex13.1

const p1 = {
  name: "Rami",
  age: 27,
  city: "Netanya",
};

const p2 = {
  name: "Dana",
  age: 27,
  city: "Netanya",
};

function comperPeople(p1, p2) {
  if (p1.city === p2.city) {
    if (p1.age === p2.age) console.log(`${p1.name} wanted to date ${p2.name}`);
  } else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn’t`);
  }
}

comperPeople(p1, p2);

//ex13.2

const book = {
  title: "the lion king",
  author: "Eden Gil",
};

const library = {
  books: [book, { title: "city life", author: "bill gates" }],
};

//13.1
const reservaBobtions = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

//const name = prompt('Please enter the name for your reservation');

function checkReservation(name) {
  name = name.toLowerCase();
  if (name === "bob") {
    if (!reservaBobtetions.Bob.claimed) {
      alert("Welcome Bob");
    } else {
      alert("You are not under this name!");
    }
  } else if (name === "ted") {
    if (!reservaBobtions.Ted.claimed) {
      alert("Welcome Ted");
    } else {
      alert("You are not under this name!");
    }
  } else {
    reservaBobtions.name = { claimed: true };
    alert(reservaBobtions.name.claimed);
  }
}
//checkReservation(name)

const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: true, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "raddish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

function useKitchen(kitchen) {
  owmer = kitchen.owmer;
  expiryDate = kitchen.fridge.items[1].expiryDate;
  priceToFix = kitchen.fridge.price / 2;
  hasOven = kitchen.hasOven;
  fridgeWorks = kitchen.fridge.works;
  raddish = kitchen.fridge.items[1].name;
  if (hasOven && fridgeWorks) {
    console.log(
      `${owmer}’s ${raddish} expired ${expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${raddish} in.`
    );
  } else if (!hasOven && fridgeWorks) {
    console.log(
      `${owmer}’s ${raddish} expired  ${expiryDate} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the ${raddish} in. And she’ll have to pay  ${priceToFix} to fix the fridge.`
    );
  } else if (hasOven && !fridgeWorks) {
    console.log(
      `${owmer}’s ${raddish} expired  ${expiryDate} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the ${raddish} in. And she’ll have to pay ${priceToFix} to fix the fridge.`
    );
  } else {
    console.log(
      `${owmer}’s ${raddish} expired  ${expiryDate} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the ${raddish} in. And she’ll have to pay ${priceToFix} to fix the fridge.`
    );
  }
}
useKitchen(kitchen);

let companies = ["Tesla", "Amazon", "Google", "Microsoft"];

for (let companyIndex in companies) {
  console.log(companies[companyIndex]);
}

for (let company of companies) {
  console.log(company);
}

//loops ex15.1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

function towArrToObjectArr(name, ages, people) {
  for (let i = 0; i < Math.min(name.length, ages.length); i++) {
    people.push({ name: name[i], age: ages[i] });
  }
  return people;
}

console.log(towArrToObjectArr(names, ages, people));
towArrToObjectArr(names, ages, people);

//ex15.2
function printPeople(people) {
  for (let person of people) {
    console.log(`${person.name} is ${person.age} years old`);
  }
}
// printPeople(people)

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

// function removwById (posts,id){
//     for(let i = 0; i < posts.length ; i++){
//         if(posts[i].id === id){
//             posts.splice(i,1)
//         }
//     }
// }

// removwById(posts,2)
// console.log(posts)

const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

function removeById(posts, id) {
  let index;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      index = i;
    }
  }
  posts.splice(index, 1);
}

function removeByTowId(posts, id1, id2) {
  let index;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id1) {
      index = i;
    }
  }
  comment = posts[index].comments;
  removeById(comment, id2);
}

removeByTowId(posts, 2, 3);
console.log(posts);

const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

function printDictionary(dictionary) {
  arr = Object.keys(dictionary);
  for (let leter of arr) {
    console.log(`Words that begin with ${leter}`);
    words = dictionary[leter];
    for (let word of words) {
      console.log(word);
    }
  }
}

printDictionary(dictionary);
