// Challenge 1 : Your Age in Days

function ageInDays() {
  var birthYear = prompt("What Year you are born");
  if (birthYear > 2021) {
    var h1 = document.createElement("h1");
    var message = document.createTextNode("Please Enter Correct Age");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(message);
    document.getElementById("flex-box-result").appendChild(h1);
  } else {
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode(
      "You Are " + ageInDayss + " days old"
    );
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    // console.log(ageInDayss)
  }
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2 : Your Age in Years

function ageInYears() {
  var birthYear = prompt("What is your Birth Year");
  if (birthYear > 2021) {
    var h1 = document.createElement("h1");
    var message = document.createTextNode("Please Enter Correct Age");
    h1.setAttribute("id", "ageInYears");
    h1.appendChild(message);
    document.getElementById("flex-box-result-2").appendChild(h1);
  } else {
    var ageInYearss = 2021 - birthYear;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode(
      "You are " + ageInYearss + " Years Old"
    );
    h1.setAttribute("id", "ageInYears");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result-2").appendChild(h1);
  }
}

function reset2() {
  document.getElementById("ageInYears").remove();
}

// Challenge 3 : Cat Generator

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(image);
}

// Challenge 4 : Rock , Paper , Scissors

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberTochoice(randTorpsInt());
  console.log("Computer Choice:", botChoice);

  results = decideWinner(humanChoice, botChoice); // [0,1] human loss || bot won
  console.log(results);

  message = finalMessage(results); // {'message':'You Won' , 'color':'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randTorpsInt() {
  return Math.floor(Math.random() * 3);
}
function numberTochoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabse = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { scissors: 0, rock: 1, paper: 0.5 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
  };
  var yourScore = rpsDatabse[yourChoice][computerChoice];
  var computerScore = rpsDatabse[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else if (yourScore === 1) {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var ImageDatabse = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // let's remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    ImageDatabse[humanImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37 ,50 ,233 , 1)'>";
  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size:60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    ImageDatabse[botImageChoice] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243 ,38 ,24 , 1)'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 5 : Change the color of the buttons

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

// console.log(copyAllButtons)

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonRed();
  } else if (buttonThingy.value === "green") {
    buttonGreen();
  } else if (buttonThingy.value === "reset") {
    buttonReset();
  } else if (buttonThingy.value === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function buttonRandom() {
  let choice = ["btn-primary", "btn-success", "btn-danger", "btn-warning"];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choice[randomNumber]);
  }
}
