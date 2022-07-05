let homeScoreboard = document.getElementById("score-box-home")
let awayScoreboard = document.getElementById("score-box-away")
let homeCount = 0
let awayCount = 0

const resetBtn = document.getElementById("reset-button")
resetBtn.addEventListener("click", resetScore)

const homeScoreCount1 = document.getElementById("home-1");
const homeScoreCount2 = document.getElementById("home-2");
const homeScoreCount3 = document.getElementById("home-3");

homeScoreCount1.addEventListener("click", homePlusOne);
homeScoreCount2.addEventListener("click", homePlusTwo);
homeScoreCount3.addEventListener("click", homePlusThree);

const awayScoreCount1 = document.getElementById("away-1")
const awayScoreCount2 = document.getElementById("away-2")
const awayScoreCount3 = document.getElementById("away-3")

awayScoreCount1.addEventListener("click", awayPlusOne);
awayScoreCount2.addEventListener("click", awayPlusTwo);
awayScoreCount3.addEventListener("click", awayPlusThree);

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

function awayPlusOne() {
    awayCount = awayCount + 1
    awayScoreboard.innerText = awayCount
}
function awayPlusTwo() {
    awayCount = awayCount + 2
    awayScoreboard.innerText = awayCount
}
function awayPlusThree() {
    awayCount = awayCount + 3
    awayScoreboard.innerText = awayCount
}

function resetScore() {
    homeCount = 0;
    homeScoreboard.innerText = homeCount;
    awayCount = 0;
    awayScoreboard.innerText = awayCount;
}