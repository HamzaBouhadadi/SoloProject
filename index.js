let scoreHome = document.getElementById("score_Home")

let scoreGuest = document.getElementById("score_Guest")

let totalHome = 0;
let totalGuest = 0;

scoreHome.textContent = totalHome;
scoreGuest.textContent = totalGuest;


function addOneHome() {
    totalHome ++;
    scoreHome.textContent = totalHome;
}

function addTwoHome() {
    totalHome += 2;
    scoreHome.textContent = totalHome;
}

function addThreeHome() {
    totalHome += 3;
    scoreHome.textContent = totalHome;
}


function addOneGuest() {
    totalGuest ++;
    scoreGuest.textContent = totalGuest;
}

function addTwoGuest() {
    totalGuest += 2;
    scoreGuest.textContent = totalGuest;
}

function addThreeGuest() {
    totalGuest += 3;
    scoreGuest.textContent = totalGuest;
}