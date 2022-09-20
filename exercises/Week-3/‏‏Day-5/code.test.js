const myModule = require("./code");
// const calculateHyp = require("./code");
// module.exports = calculateHyp;

test("add should return sum of a + b", () => {
  let sum = myModule.add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return sqrt(a*a + b*b)", () => {
  let calculate = myModule.calculateHyp(3, 4);
  expect(calculate).toBe(5);
});
const removeBugs = require("./code");

test("should remove all BUGs from list of code", () => {
  let code = [
    "great code",
    "good code",
    "BUG",
    "async await awesome code",
    "BUG",
    "BUG",
    "general code",
  ];
  let bugFreeCode = myModule.removeBugs(code);
  expect(bugFreeCode).not.toContain("BUG");
});

test("should keep only HIGH priority tasks", () => {
  let tasks = [
    { text: "dummy", priority: "HIGH" },
    { text: "dummy", priority: "LOW" },
  ];
  let filteredTasks = myModule.clearLowPriority(tasks);

  expect(filteredTasks.length).toBe(1);
  expect(filteredTasks[0].priority).toBe("HIGH");
});

// const PM = require("./code");

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity
  const picManager = new myModule.PictureManager();
  expect(picManager.pictureURLs.length).toBe(0);

  picManager.addPicture("some_url");
  picManager.addPicture("some_url2");
  picManager.addPicture("some_url3");
  expect(picManager.pictureURLs.length).toBe(3); //test
  expect(picManager.pictureURLs).toContain("some_url"); //double check
  picManager.removePicture("some_url");
  expect(picManager.pictureURLs.length).toBe(2);
  expect(picManager.pictureURLs).not.toContain("some_url"); //double check
});

test("should convert two arrays of equal length to a single object with key-values from the arrays", function () {
  let arrayManipulator = new myModule.ArrayManipulator();
  let x = ["food", "item", "location"];
  let y = ["cherry", "lightbulb", "Tazmania", "X"];
  const m = arrayManipulator.manipulate(x, y);
  expect(m).toBe("error");
  let newY = ["cherry", "lightbulb", "Tazmania"];
  //   let testOb = { food: "cherry", item: "lightbulb", location: "Tazmania" };
  let result = arrayManipulator.manipulate(x, newY);
  //   expect(result).toEqual(testOb);
  expect(result).toEqual({
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania",
  });
});

test("use class Exercises in the function isEven and chack if number is even ", () => {
  let exercisesClass = new myModule.Exercises();
  let numEven = 2;
  let numNotEven = 3;

  expect(exercisesClass.isEven(numEven)).toBe(true);
  expect(exercisesClass.isEven(numNotEven)).toBe(false);
});

test("use class Exercises in the function removeAtLeastOne and remove at least one number from arr ", () => {
  let exercisesClass = new myModule.Exercises();
  let arr = [];
  expect(exercisesClass.removeAtLeastOne(arr).length).toBe(0);
  let arr2 = [1, 2, 3, 4];
  expect(exercisesClass.removeAtLeastOne(arr2).length <= arr2.length).toBe(
    true
  );
});

test("use class Exercises in the function simplify  should return a clean string without these symbols: !, #, ., ,, ", () => {
  let exercisesClass = new myModule.Exercises();
  let srt = "test";
  expect(exercisesClass.simplify(null)).toBe(null);
  expect(exercisesClass.simplify(srt)).toBe(srt);
  let str2 = "t!e##.s,'t";
  expect(exercisesClass.simplify(str2)).toBe("test");
});

test("use class Exercises in the function simplify  should return a clean string without these symbols: !, #, ., ,, ", () => {
  let exercisesClass = new myModule.Exercises();
  let arr = [];
  let result = exercisesClass.validate(arr);
  expect(result).toEqual({ error: "Need at least one boolean" });
  arr = [true, false, true];
  expect(exercisesClass.validate(arr)).toBe(true);
  arr = [false, false, true];
  expect(exercisesClass.validate(arr)).toBe(false);
});
