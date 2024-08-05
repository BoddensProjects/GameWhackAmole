let curMoleTile;
let curPlantTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
   
    for(let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(placeMole, 2000);
    setInterval(placePlant, 2000);
}

function ranTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
  

}

function placeMole(){
    if(gameOver){
        return;
    }
    
if(curMoleTile){
    curMoleTile.innerHTML = "";
}

    let mole = document.createElement("img");
    mole.src = "monty-mole.png";
    let num = ranTile();
    
    if(curPlantTile && curPlantTile == num){
        return;
    }

   curMoleTile = document.getElementById(num);
   curMoleTile.appendChild(mole);

}


function placePlant(){
    if(gameOver){
        return;
    }
    if(curPlantTile){
        curPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "piranha-plant.png";

    let num = ranTile();

    if(curMoleTile && curMoleTile == num){
        return;
    }

    curPlantTile = document.getElementById(num);
    curPlantTile.appendChild(plant);
 

}

function selectTile(){
    if(gameOver == true){
        return;
    }
    if(this == curMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }else if(this == curPlantTile){
     document.getElementById("score").innerText = "Game Overrr: " + score.toString();
    gameOver = true;
    }
}