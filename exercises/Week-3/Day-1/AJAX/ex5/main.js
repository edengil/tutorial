const ApiKey = "aik3nQroeFvUjvwKDTZmPyFqN5DawqI0";
const xhr = $.get(
  `http://api.giphy.com/v1/gifs/search?q=dog&api_key=${ApiKey}`,
  function (result) {
    console.log(result);
    $("#gifts").attr("src", result.data[0].embed_url);
  }
);

const fetch = function () {
  let randomInt = Math.floor(Math.random() * 50);
  let animal = $("input").val();
  const xhr = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${animal}&api_key=${ApiKey}`,
    function (result) {
      console.log(result);
      $("#gifts").attr("src", result.data[randomInt].embed_url);
    }
  );
};
