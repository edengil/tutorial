const reservaBobtions = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

function checkReservation() {
  const getVal = document.getElementById("name").value;
  const name = getVal.toLowerCase();
  if (name === "bob") {
    if (!reservaBobtions.Bob.claimed) {
      alert("Welcome Bob");
    } else {
      alert("You are not under this name!");
    }
  } else if (name === "ted") {
    if (!reservaBobtions.Ted.claimed) {
      alert("Welcome Ted");
    } else {
      alert("You are not under this name!");
    }
  } else {
    reservaBobtions.name = { claimed: true };
    alert("You have no reservation");
  }
}
