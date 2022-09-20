// 3
// // turn our "template" into html
// var source = $("#store-template").html();

// // compile our template html using handlebars
// var template = Handlebars.compile(source);

// // fill our template with information
// var newHTML = template({ item: "bread", price: "3" });

// // append our new html to the page
// $(".items").append(newHTML);

// var newHTML2 = template({ item: "Cheese", price: "10" });

// $(".items").append(newHTML2);
// 3

const menuData = {
  menu: [
    { name: "Google", link: "http://google.com" },
    { name: "Facebook", link: "http://facebook.com" },
    { name: "Instagram", link: "http://nstagram.com" },
    { name: "Twitter", link: "http://twitter.com" },
  ],
};

const source = $("#menu-template").html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);

// append our new html to the page
$(".menu").append(newHTML);

var classData = {
  classmates: [
    { name: "That on gal", description: "Always has the ansswer" },
    { name: "The weird dude", description: "Quick with a smile" },
    { name: "Taylor", description: "Just Taylor" },
  ],
};

const source2 = $("#classmates-template").html();
const template2 = Handlebars.compile(source2);
const newHTML2 = template2(classData);
$(".menu2").append(newHTML2);

const renderFirst = function () {
  const source = $("#first-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ text: "This gets rendered" });
  $("body").append(newHTML);
};

const renderSecond = function () {
  const source = $("#second-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ moreText: "This also gets rendered" });
  $("#special").append(newHTML);
};

renderFirst();
renderSecond();

const animals = [
  "Rabbit",
  "Giraffe",
  "Kangaroo",
  "Whale",
  "Seagull",
  "Caterpie",
];
const animalsFun = function () {
  const source = $("#animals-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template(animals);
  $("#animals").append(newHTML);
};
animalsFun();

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"];

const languagesFun = function () {
  const source = $("#languages-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template(languages);
  $("#languages").append(newHTML);
};
languagesFun();
