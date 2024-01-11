let userAge;
let ghostbustersAgeRating = 13;

const gbWatchApproval = document.querySelector("#gb-watch-approval");
const checkingButton = document.querySelector("#checking-button");

checkingButton.addEventListener("click", checkAge);

function checkAge() {
  let userAge = parseInt(prompt("How old are you?"), 10);
  if (userAge > ghostbustersAgeRating) {
    console.log("You can watch Ghostbusters!");
    gbWatchApproval.innerText = `You are ${userAge} years old, you can watch Ghostbusters!`;
  } else {
    console.log("Maybe you're a bit too young for ghostbusters :(");
    gbWatchApproval.innerText = `You are ${userAge} years old, you are too young to watch Ghostbusters!`;
  }
}
