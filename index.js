let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let scoreboard = document.querySelectorAll(".scoreboard")

for(let i = 0;i < 10; i ++){
    let point = document.createElement("div")
    point.className = "point"
    player.appendChild(point)
    point.id = `playerPoint ${i}`
}

for(let i = 0;i < 10; i ++){
    let point = document.createElement("div")
    point.className = "point"
    computer.appendChild(point)
    point.id = `computerPoint ${i}`
}


let cooperate
let defect
let points 

