localStorage.name = "eden";
// console.log(localStorage.name); //'Shoobert'
// console.log(localStorage.name); //'Shoobert'
// console.log(localStorage.name); //'Shoobert'
const name = localStorage.getItem("name");
// localStorage.removeItem("name");

localStorage.clear();
// console.log(name);

// localStorage.personalData = {
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   }

// localStorage.personalData = JSON.stringify({
//   averageTimeOnSite: { unit: "hr", amt: 9 },
//   probabilityOfFriends: 0.02,
//   commonKeywords: ["salsa for one", "1 vs. none Chess"],
// });
// let x = { name: "Shoobert" };
// x = JSON.stringify(x);
// console.log(x); //prints a string-version of the object

// // not work
// // let userStuff = localStorage.personalData; //the object we stored earlier

// // console.log(userStuff.probabilityOfFriends); //prints undefined
// let userStuff = JSON.parse(localStorage.personalData);

// console.log(userStuff.probabilityOfFriends); //prints 0.02
//

//
//
//
// // 7. Spot Check 1
// let userStorage = {
//   darkMode: true,
//   showSideNav: false,
//   defaultResultCount: 9,
//   latestMarks: {
//     sectionA: 92,
//     sectionB: 11,
//   },
//   cart: [
//     { id: 3112, count: 2 },
//     { id: 812, count: 16 },
//   ],
// };
// localStorage.userStorage = JSON.stringify(userStorage);
// let userStuff = JSON.parse(localStorage.userStorage);
// console.log(userStuff.cart[userStuff.cart.length - 1].count);
// // 7. Spot Check 1
// //
// //
// //

let wisdom = [];
let input;
// let texts = localStorage.wisdom || []

let texts = JSON.parse(localStorage.wisdom || "[]");

if (texts) {
  for (let a of texts) {
    $("#info").append(
      `<div class="line-delete" data-id="${a.text}"><i class="fas fa-trash delete"></i><span>${a.text}</span></div>`
    );
  }
}

let isInside;
let p;

$("#app").on("click", function () {
  $("#info").empty();
  input = $("input").val();
  $("#info").append(`<div>${input}</div>`);
  wisdom.push({ text: input });
  $("input").val("");

  if (!(wisdom.length % 2)) {
    localStorage.wisdom = JSON.stringify(wisdom);
  }
});

$("#ls-clear").on("click", function () {
  localStorage.removeItem("wisdom");
  $("#info").empty();
});

$("#info").on("click", ".delete", function () {
  $(this).closest(".line-delete").remove();

  let id = $(this).closest(".line-delete").data().id;

  let storage = JSON.parse(localStorage.wisdom);

  for (let i in storage) {
    if (storage[i].text == id) {
      storage.splice(i, 1);
    }
  }

  localStorage.wisdom = JSON.stringify(storage);
});
