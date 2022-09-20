//
//
//
//ex1
const aDynamicDiv = `<input type=${"text"} id=${"my-input"} placeholder=${"Name"}></input>`;
const elem = $(aDynamicDiv);
// console.log(elem);
$("#start").append(elem);

const aButton = `<button class="Add-Human" >Add Human</button>`;
const elemButton = $(aButton);
// console.log(elemButton);
$("#start").append(elemButton);

const addDiv = function () {
  const text = $("#my-input").val();
  // console.log(text);
  $("#first").append(`<li class=list>${text}</li>`);
};

$(".Add-Human").on("click", function () {
  addDiv();
});

$("button").hover(function () {
  $(this).css("background-color", "gray");
});
$("button").mouseleave(function () {
  $(this).css("background-color", "white");
});

$("input").hover(function () {
  $(this).css("border-color", "azure");
});

$("input").mouseleave(function () {
  $(this).css("border-color", "black");
});

//ex1 end
//
//
//ex2
$(".list").on("click", function () {
  // console.log(this);
  $(this).remove();
});

//ex2 end
//
//
//ex3
$("body").append(`<div class=box1></div>`);
$("body").append(`<div class=box2></div>`);

const color = function (c) {
  if (c === "blue") return "red";
  return "blue";
};

$(".box1").hover(function () {
  $(this).css("background-color", "blue");

  $(".box2").css("background-color", "red");
});

$(".box1").mouseleave(function () {
  $(".box2").css("background-color", "blue");
  $(this).css("background-color", "red");
});

//ex3 end
//
//
//ex4
$("#cart").on("click", ".remove-me", function () {
  $(this).remove();
});
let i = 1;
$(".item").on("click", function () {
  if ($(this).data().instock) {
    $("#cart").append(`<div class=remove-me>${$(this).text()} x ${i++}</div>`);
  }
});

//ex4 end
//
//
//ex5
const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];

for (let fruit of fruits) {
  $("#basket").append(`<div class=${fruit.color}>${fruit.name}</div>`);
}

//ex5 end
//
//
//ex6
$("span").addClass("span");
// console.log($(".span").text);

$("span").on("click", function () {
  let color = $(this).data().color;
  // console.log(color);
  $(".box").css("background-color", color);
});

const spans = $("span");
for (let span of spans) {
  $(span).addClass("picker");
  //   let color =
  $(span).css("background-color", $(span).text());
}

//ex6 end
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// $(".text").hide(); //when we select elements with jQuery, we also get methods that can work on the element, on top of the element itself

// console.log($("h1"));

// console.log($);

// console.log(jQuery("#thisH1"));
// console.log(jQuery("h1"));
// console.log($("h4"));

// $("button").on("click", function () {
//   alert("clicked!");
// });

// const clicked = function () {
//     alert('clicked!')
//   }

//   $('button').on('click', clicked)

// $("div").click(function () {
//   alert("div is clicked!");
// });

// $("body").on("click", ".box", function () {
//   alert("hi");
// });

//
// const addDiv = function () {
//   $("body").append("<div class=box></div>");
// };

// $("button").on("click", function () {
//   addDiv();
// });

// $("body").on("click", ".box", function () {
//   alert("hi");
// });
//
//
$("#blog-button").on("click", function () {
  const text = "New blog post!";
  let divCopy = $(`<div class=blog>${text}</div>`);

  $("#blogs").append(divCopy);
});
$("#blogs").on("click", ".blog", function () {
  $(this).text("uncool blog");
});

// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" },
// ];

// for (let name of names) {
//   $("body").append(`<div>${name.first}-${name.last}</div>`);
// }

$(".feedme").on("click", function () {
  const text = "Feed me more";
  let divCopy = $(`<div class=fruit>${text}</div>`);

  $(".feedme").append(divCopy);
});
$(".feedme").hover(function () {
  $(this).remove();
});

const text = "Banana";
const item = $("<div class=fruit>" + text + "</div>");

// const aDynamicDiv = "<div class='mine'>Oh yes</div>";
// const elem = $(aDynamicDiv);
// // console.log(elem);
// $("body").append(elem);

// $(".fruits").append('<p class="red">Raspberry</p>');
// $(".fruits").append('<p class="brown">Kiwi</p>');

// $(".box").hover(function () {
//   //   console.log($(this));
//   $(this).css("background-color", "blue");
// });

// $("b1").hover();
const clickedB = function () {
  //   alert("clicked!");
  alert($("#my-input").val());
};

$("#ClickMe").click(clickedB);

const clicked = function () {
  //   alert("clicked!");
  $("#backrondcolor").css("background-color", "blue");
};

$("#backrondcolor").click(clicked);

// const barcode = $("#data").data().barcode;
// console.log(barcode);
// const dataExp = $("#data").data().expirationdate;
// console.log(dataExp);

// const color = $("div").data().color;
// console.log(color); //prints #2980b9

// $("#my-input").val("eden");

// $("#my-input").val("Terabyte");

// $("h4").css("color", "green");
$("h1").css("color", "blue");
$(".red-div").css("color", "red");
$("#brown-div").css("color", "brown");

// $("#b1,#b2").addClass("box");
// $(".box").css("background-color", "green");
// $("#b2").addClass("box");

// const arrLi = $("li");
// console.log(arrLi[0]);
// arrLi[o].css("color", "pink");
// arrLi[1].css("color", "green");
// $("li:first-child").css("color", "pink");
// $("li:last-child").css("color", "green");

// const sayHi = function () {
//   console.log("Hi!");
// };

// const $ = sayHi;

// $(); //prints "Hi!"
// $("p").remove();
// $("div").remove(".box");
