const ApiKey = "aik3nQroeFvUjvwKDTZmPyFqN5DawqI0";

const xhr = $.get(
  `http://api.giphy.com/v1/gifs/search?q=cats&api_key=${ApiKey}`,
  function (result) {
    console.log(result);
    $("#gift").attr("src", result.data[0].embed_url);
  }
);
console.log(xhr.data);
