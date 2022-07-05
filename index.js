let homeScoreboard = document.getElementById("score-box-home")
let homeCount = 0

const homeScoreAddOne = document.getElementById("home-1");

homeScoreAddOne.addEventListener("click", homePlusOne);

function homePlusOne() {
    homeCount = homeCount + 1
    homeScoreboard.innerText = homeCount
}

function homePlusTwo() {
    homeCount = homeCount + 2
    homeScoreboard.innerText = homeCount
}

function homePlusThree() {
    homeCount = homeCount + 3
    homeScoreboard.innerText = homeCount
}

function resetScore() {
    homeCount = 0;
    homeScoreboard.innerText = homeCount;
}