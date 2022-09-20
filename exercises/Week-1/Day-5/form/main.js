const isMissing = function (input) {
  if (input.length === 0) {
    return true;
  } else {
    return false;
  }
};

const message = document.createElement("div");
message.setAttribute("id", "error-message");

const validate = function () {
  const form = document.getElementById("form");
  const name = document.getElementById("name").value;
  const salary = parseInt(document.getElementById("desired-salary").value);
  console.log(salary);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;

  if (isMissing(name)) {
    message.innerHTML = "Name is missing";
  } else if (name.length <= 2) {
    message.innerHTML =
      "Name is too short, please enter name with more than 2 characters";
  } else if (isMissing(salary)) {
    message.innerHTML = "Desired salary is missing";
  } else if (salary < 10000) {
    message.innerHTML = "Salary must be greater than 10000";
  } else if (salary > 16000) {
    message.innerHTML = "Salary must be less than 16000";
  } else if (isMissing(birthday) || birthday === null) {
    message.innerHTML = "Please enter your birthday";
  } else if (isMissing(phone)) {
    message.innerHTML = "Phone is missing";
  } else if (phone.length < 10) {
    message.innerHTML = "Phone number too short, must be 10 digits";
  } else if (phone.length > 10) {
    message.innerHTML = "Phone number too long, must be 10 digits";
  } else {
    form.style.display = "none";
    const welcome = document.createElement("h1");
    welcome.innerHTML = "Welcome in, " + name;
    welcome.style.color = "green";
    document.body.appendChild(welcome);
  }

  document.getElementById("form").appendChild(message);
};
