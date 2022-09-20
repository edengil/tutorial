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
// $(".remove").on("click", function () {
//   alert($(this).closest(".post").data().id);
// });

// 3. Spot Check 1
//
//
// $("button").on("click", function () {
//   let relevantInputValue = $(this).closest("div").find("span").text();
//   alert(relevantInputValue);
// });
//
//
// 3. Spot Check 1

// 4. Spot Check 2
//
//
// $("button").on("click", function () {
//   let relevantInputValue = $(this)
//     .closest("body")
//     .find(".container")
//     .find("p")
//     .text();
//   alert(relevantInputValue);
// });
//
//
// 4. Spot Check 2
// Exercises
//
//
const cmpArr = [];
$(".generator").on("click", function () {
  let firstDiv = $(this).closest("div");
  let computerDiv = firstDiv.closest(".computer");

  let processorId = firstDiv.attr("id");
  let computerDataId = computerDiv.attr("data-id");
  let bus = computerDiv.find(".BUS").text();
  console.log(processorId);
  console.log(computerDataId);
  cmpArr.push({ cmp_id: computerDataId });

  console.log(bus);
});

$(".validator").on("click", function () {
  let firstDiv = $(this).closest("div");
  let computerDiv = firstDiv.closest(".computer");
  let mb = computerDiv.find(".MB").text();
  let qr = computerDiv.find("span.QR").siblings().text();
  let generator = computerDiv.find(".generator").text();
  console.log(generator);
  console.log(mb);
  console.log(qr);
});

//
//
// Exercises
