const fetch = function (queryType, ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${ISBN}`,
    success: function (data) {
      data.items.forEach((element) => {
        authors = element.volumeInfo.authors;
        if (authors != undefined) {
          authors.forEach((author) => {
            console.log(author);
          });
        }
      });
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
