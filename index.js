let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let scoreboard = document.querySelectorAll(".scoreboard")
let cooperate = document.querySelector("#cooperate")
let defect = document.querySelector("#defect")

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



let num = 0

//computer choices 

cooperate.addEventListener("click", function(){
let currentComputer = document.querySelector(`#computerPoint${num}`)
currentComputer.style.backgroundColor = "red"
})

defect.addEventListener("click", function(){
let currentComputer = document.querySelector(`#computerPoint${num}`)
currentComputer.style.backgroundColor = "green"
})

//player choices

cooperate.addEventListener("click", function(){
    console.log("cooperate")
    let current = document.querySelector(`#playerPoint${num}`)
    current.style.backgroundColor = "green"
    num++
})

defect.addEventListener("click", function(){
    console.log("defect")
    let current = document.querySelector(`#playerPoint${num}`)
    current.style.backgroundColor = "red"
    num++
})


