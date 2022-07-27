let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");


function addOneToHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoToHome(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function addThreeToHome(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addOneToGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function addTwoToGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function addThreeToGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function newGame(){
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}

