const fetch = function (queryType, ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${ISBN}`,
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
fetch("isbn", 9789814561778);
fetch("title", "How to Win Friends and Influence People");
