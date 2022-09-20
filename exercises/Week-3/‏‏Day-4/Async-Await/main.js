const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521";

// const fetchData = function () {
//   $.get(API_URL, function (res) {
//     console.log(res.items[0]);
//   });
// };

const fetchDatum = async function () {
  let data = await $.get(API_URL);
  console.log(data.items[0]);
};

fetchDatum();

const fetchRecipes = async function (ingredient) {
  let data = await $.get(`/recipe/${ingredient}`, function (recipe) {
    console.log(recipe);
  });
};

//
//
//
//
//
// COMMON PITFALLS
class ApiManager {
  constructor(stocksAPI, renderer) {
    this.stocksAPI = stocksAPI;
    this.renderer = renderer;
  }

  async fetchStockData(ticker) {
    let stockData = await $.get(`${this.stocksAPI}/${ticker}`);
    this.renderer.render(stockData);
  }
}
