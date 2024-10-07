const emailInput = document.getElementById('mail');
const button = document.getElementsByClassName("circle")[0];
const container = document.getElementsByClassName("mail")[0];

button.addEventListener("click", function (e) {
  container.style.borderColor = "red";
});

console.log('today')

const firstName = 'David';

const password = new RegExp('David*');

console.log(password.test(firstName));


if (password.test(firstName){})