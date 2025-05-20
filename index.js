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

let playerColor = getComputedStyle(current).backgroundColor;
let computerColor = getComputedStyle(currentComputer).backgroundColor;

cooperate.addEventListener("click", function(){
    console.log("cooperate")
    let current = document.querySelector(`#playerPoint${num}`)
    current.style.backgroundColor = "green"

    computerDefect()
    
    num++
    score = score + 5
    playerUnits.textContent = `Player Units: ${score}`

    if(current.style.backgroundColor == "green" && currentComputer.style.backgroundColor == "red"){
    console.log("you win")} 
    else if(current.style.backgroundColor == "red" && currentComputer.style.backgroundColor == "green"){
    console.log("you lose")
    } 
    else(console.log("coop error"))

})

defect.addEventListener("click", function(){
    console.log("defect")
    let current = document.querySelector(`#playerPoint${num}`)
    current.style.backgroundColor = "red"

    computerCooperate()

    num++
    computerScore = computerScore + 5
    computerUnits.textContent = `Computer Units: ${computerScore}`

    if(current.style.backgroundColor == "red" && currentComputer.style.backgroundColor == "green"){
    console.log("you lose")} 
    else if(current.style.backgroundColor == "green" && currentComputer.style.backgroundColor == "red"){
    console.log("you win")
    } 
    else(console.log("defect error"))

})
