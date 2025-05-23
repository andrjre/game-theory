let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let scoreboard = document.querySelectorAll(".scoreboard")
let cooperate = document.querySelector("#cooperate")
let defect = document.querySelector("#defect")

// creating grids and setup

for(let i = 0;i < 10; i ++){
    let point = document.createElement("div")
    point.className = "point"
    player.appendChild(point)
    point.id = `playerPoint${i}`
}

for(let i = 0;i < 10; i ++){
    let point = document.createElement("div")
    point.className = "point"
    computer.appendChild(point)
    point.id = `computerPoint${i}`
}

let score = 0
let computerScore = 0 
let num = 0
let current = document.querySelector(`#playerPoint${num}`)
let currentComputer = document.querySelector(`#computerPoint${num}`)
let playerUnits = document.querySelector("#playerUnits")

//computer choices 

let computerDefect = function(){
let currentComputer = document.querySelector(`#computerPoint${num}`)
currentComputer.style.backgroundColor = "red"
}

let computerCooperate = function(){
let currentComputer = document.querySelector(`#computerPoint${num}`)
currentComputer.style.backgroundColor = "green"
}

//player choices

let computerColor = getComputedStyle(currentComputer).backgroundColor;

cooperate.addEventListener("click", function(){
    console.log("cooperate")
    let current = document.querySelector(`#playerPoint${num}`)
    let currentComputer = document.querySelector(`#computerPoint${num}`)
    current.style.backgroundColor = "green"
    
    let randomNum = (Math.floor(Math.random()*2))

    if (randomNum == 0){
    computerDefect()
    }
    else{
    computerCooperate()
    }
    
    let currentComputerColor = getComputedStyle(currentComputer).backgroundColor
    let currentColor = "green"

    if(
        currentColor === "green" && 
        currentComputerColor === "rgb(255, 0, 0)"
    ){
    computerScore = computerScore + 5
    console.log("you lose")}
    else if(
        current.style.backgroundColor === currentComputer.style.backgroundColor
    ){
    score = score + 3
    computerScore = computerScore + 3
    console.log("draw")}
    else{console.log("coop error")}
    
    num++
    computerUnits.textContent = `Computer Units: ${computerScore}`
    playerUnits.textContent = `Player Units: ${score}`
})

defect.addEventListener("click", function(){

    console.log("defect")
    let current = document.querySelector(`#playerPoint${num}`)
    let currentComputer = document.querySelector(`#computerPoint${num}`)

    current.style.backgroundColor = "red"

    let randomNum = (Math.floor(Math.random()*2))

    if (randomNum == 0){
    computerDefect()
    }
    else{
    computerCooperate()
    }
    
    let currentComputerColor = getComputedStyle(currentComputer).backgroundColor

    if(
        current.style.backgroundColor == "red" &&
        currentComputerColor == "rgb(0, 128, 0)"
    ){
    score = score + 5
    console.log("you win")} 
    else if(
        current.style.backgroundColor === currentComputer.style.backgroundColor
    ){
    score = score + 1
    computerScore = computerScore + 1
    console.log("draw")}
    else(
        console.log("defect error"))

    num++
    playerUnits.textContent = `Player Units: ${score}`
    computerUnits.textContent = `Computer Units: ${computerScore}`
})

