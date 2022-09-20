const add = function (a, b) {
  return a + b;
};

const calculateHyp = function (num1, num2) {
  return Math.sqrt(num1 * num1 + num2 * num2);
};
// calculateHyp();
const removeBugs = function (code) {
  return code.map((c) => c != "BUG");
};

const clearLowPriority = function (tasks) {
  return tasks.filter((t) => t.priority != "LOW");
};

class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
  }
}
class ArrayManipulator {
  manipulate(arr1, arr2) {
    if (arr1.length == arr2.length) {
      let obj = {};
      for (let i in arr1) {
        obj[arr1[i]] = arr2[i];
      }
      return obj;
    } else {
      return "error";
    }
  }
}
class Exercises {
  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }
  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }
  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    if (str == null) return null;

    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }
  validate(arr) {
    let numOfTrue = 0;
    if (arr.length == 0) return { error: "Need at least one boolean" };
    arr.forEach((element) => {
      if (element == true) numOfTrue++;
    });
    return numOfTrue > arr.length - numOfTrue;
  }
}

// module.exports = ArrayManipulator;
module.exports = {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  PictureManager,
  ArrayManipulator,
  Exercises,
};
