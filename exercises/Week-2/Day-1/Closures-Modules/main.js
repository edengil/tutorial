const createPerson = function (name, age) {
  const person = {
    personName: name,
    personAge: age,
  };

  return person;
};

const foo = function () {
  const x = 11;

  const bar = function () {
    console.log(x); //notice this inner function using the outer function's variable
  };

  return bar;
};

const baz = foo(); //out here, x doesn't exist
// baz(); //but when we invoke baz, we're printing x!
// console.log(x);

const setCounter = function (num) {
  let counter = 0;

  const count = function () {
    counter += num;
    console.log(counter);
  };

  return count;
};

const increment = setCounter(2);
// increment();
// increment();

const family = function () {
  const members = [];

  const birth = function (name) {
    members.push(name);
    console.log(members);
  };
  return birth;
};

const giveBirth = family();
// giveBirth("Clarissa");
// giveBirth("Mayana");

const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};

const math = mathOperations();
// console.log(math.add(13, 29));
// console.log(math.mult(1.75, 24));
// console.log(math.mult(1.75, math.div(36, 6)));

const StringFormatter = function () {
  const capitalizeFirst = function (text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  };
  const skewerCase = function (str) {
    return str.replaceAll(" ", "-");
  };
  return {
    remove: skewerCase,
    frist: capitalizeFirst,
  };
};
const formatter = StringFormatter();

formatter.frist("dorothy"); //should print Dorothy
console.log(formatter.frist("dorothy"));

formatter.remove("blue box"); //should print blue-box
console.log(formatter.remove("blue          box"));

const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.addUser("Naasrkis");
usersModule.addUser("Nsarkis");
usersModule.listUsers();
// console.log(userModule.users);

const Bank = function () {
  let money = 500;

  const deposit = function (num) {
    money += num;
  };

  const checkBalance = function () {
    console.log(money);
  };

  return {
    deposit: deposit,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

const SongsManager = function () {
  const songs = [];

  const addSong = function (songName, url) {
    songs.push({ Song: songName, Url: url });
  };

  const getSong = function (songName) {
    for (let song of songs) {
      if (songName === song.Song) {
        console.log(song.Url);
      }
    }
  };

  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
