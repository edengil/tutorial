// let p = $.get("/randomWord"); //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// console.log(p);
// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${synonyms}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

// //Spot Check 1

// $.get("https://random-word-api.herokuapp.com/word").then(function (word) {
//   console.log(word);
// });

// //Spot Check 2
// $.get("/sentiment/Ploy").then(function (response) {
//   console.log(response);
// });

// $.get("https://random-word-api.herokuapp.com/word")
//   .then(function (word) {
//     console.log(word);
//     return $.get(
//       `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
//     );
//   })
//   .then(function (synonyms) {
//     console.log(synonyms);
//   });

// $.get("/randomWord")
//   .then(function (word) {
//     return $.get(`/synonyms/${word}`);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function (synonyms) {
//     console.log(synonyms);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// $.get("/randomWord").then(function (word) {
//   let synonymsPromise = $.get(`/synonyms/${word}`);
//   let sentimentPromise = $.get(`/sentiment/${synonyms}`);
//   // We use Promise.all([...]) to tell JS
//   // to resolve all the promises in the array
//   // before executing the next then
//   Promise.all([synonymsPromise, sentimentPromise]).then(function (results) {
//     console.log(results);
//   });
// });

// const printResults = function (word, synonyms, sentiment) {
//   console.log(`
//         The word ${word} has a
//         ${
//           sentiment === 1
//             ? "Positive"
//             : sentiment === -1
//             ? "Negative"
//             : "Neutral"
//         } sentiment,
//         its synonyms are: ${synonyms}`);
// };

// $.get("https://random-word-api.herokuapp.com/word").then(function (word) {
//   let synonymsPromise = $.get(`/synonyms/${word}`);
//   let sentimentPromise = $.get(`/sentiment/${word}`);
//   Promise.all([synonymsPromise, sentimentPromise]).then(function (results) {
//     printResults(word, results[0], results[1]);
//   });
// });

// class APIManager {
//   fetch() {
//     return $.get("/data");
//   }
// }

// class Renderer {
//   render(dataPromise) {
//     dataPromise.then(function (data) {
//       $("#body").append(`<div>${data}</div>`);
//     });
//   }
// }

// const apiManager = new APIManager();
// const renderer = new Renderer();

// let initialDataPromise = apiManager.fetch();
// renderer.render(initialDataPromise); //initial page load

// $(".some-thing").on("click", function () {
//   let newDataPromise = apiManager.fetch();
//   renderer.render(newDataPromise);
// });

//
//
//
//ex1

$.get("https://random-word-api.herokuapp.com/word")
  .then(function (word) {
    // console.log(word);
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
  })
  .then(function (synonyms) {
    // console.log(synonyms);
  });
//ex1
//
//
//
//ex2
const ApiKey = "aik3nQroeFvUjvwKDTZmPyFqN5DawqI0";
let randomInt = Math.floor(Math.random() * 50);

const printResults = function (word, results, gif) {
  $("#gifts").attr("src", gif.data[0].embed_url);
  console.log(results.items[0].volumeInfo.title);
  $("#book-title").text(
    `The Word is: ${word} 
    The Book title is: ${results.items[0].volumeInfo.title}`
  );
};

$.get("https://random-word-api.herokuapp.com/word").then(function (word) {
  //   console.log(word);
  let synonymsPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let sentimentPromise = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${ApiKey}`
  );
  Promise.all([synonymsPromise, sentimentPromise]).then(function (results) {
    // console.log(word);
    // console.log(results[0]);
    // console.log(results[1]);
    printResults(word, results[0], results[1]);
  });
});

//ex2
//
//
//
//ex3
