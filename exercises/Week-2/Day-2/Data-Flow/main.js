let _posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      {
        id: "c4",
        text: "Don't wory second poster, you'll be first one day.",
      },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ],
  },
];
// const render = function () {
//   for (let post of posts) {
//     let postBox = $(
//       "<div class='post-box'><p class=name>" +
//         post.name +
//         ":" +
//         "</p><p class=text>" +
//         post.text +
//         "</p></div>"
//     );

//     $(".start").append(postBox);
//   }
// };
// render();
const divPost = (post) =>
  `<div class=post-box><p class=name>${post.id}:</p><p class=text>${post.text}</p></div>`;
const divComment = (comment) =>
  `<div class=comment-box><p class=name>${comment.text}:</p></div><br>`;

const render = function () {
  $(".start").empty();
  for (let post of _posts) {
    let postBox = divPost(post);
    let comments = post.comments;

    for (let comment of comments) {
      let commentBox = divComment(comment);
      $(".start").append(commentBox);
    }
    $(".start").append(postBox);
  }
};
render();

$("button").on("click", function () {
  posts.push({
    name: $("#input-name").val(),
    text: $("#input-text").val(),
  });
  $(".start").empty();
  render();
});
