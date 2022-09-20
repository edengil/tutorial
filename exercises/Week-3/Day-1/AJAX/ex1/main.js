// Initialize the HTTP request to a server located at "someURL"
// var xhr = new XMLHttpRequest();
// xhr.open('get', '/someURL');

// // Track the state changes of the request.
// xhr.onreadystatechange = function () {
//     var DONE = 4; // readyState 4 means the request is done.var OK = 200; // status 200 is a successful return.if (xhr.readyState === DONE) {
//         if (xhr.status === OK) {
//             console.log(xhr.responseText); // 'This is the returned text.'
//         } else {
//             console.log('Error: ' + xhr.status); // An error occurred during the request.

//         }
//     }
// };

// // Send the request to send-ajax-data.php
// xhr.send(null);

// $.get(
//   "https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind",
//   function (result) {
//     console.log(result.items[0].volumeInfo.description); //prints A lot of description Text
//   }
// );

// let person = { name: "Kyle", age: 37 };
// let expectedYearsLeft = 120 - person.age;

// console.log(`${person.name} has ${expectedYearsLeft} years to live`); //prints Kyle has 83 years to live

//request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//   //extract the geo data of the first user
//   let lat = users[0].address.geo.lat;
//   let long = users[users.length - 1].company.catchPhrase;
//   console.log(`${lat}, ${long}`);
//   // log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// });

// const useData = function (data) {
//   console.log(data);
// };

// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: useData,
// });

const fetch = function (ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
fetch(9780575087057);
fetch(1440633908);
fetch(9781945048470);
fetch(9780307417138);
