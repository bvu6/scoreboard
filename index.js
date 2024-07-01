let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
let homeCount = 0
let awayCount = 0

function homeAddOne(){
    homeCount += 1
    homeEl.textContent = homeCount
}
function homeAddTwo(){
    homeCount += 2
    homeEl.textContent = homeCount
}
function homeAddThree(){
    homeCount += 3
    homeEl.textContent = homeCount
}
function awayAddOne(){
    awayCount += 1
    awayEl.textContent = awayCount
}
function awayAddTwo(){
    awayCount += 2
    awayEl.textContent = awayCount
}
function awayAddThree(){
    awayCount += 3
    awayEl.textContent = awayCount
}