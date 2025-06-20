let playerBody = document.getElementById("player");
let playerMove = 0;

function queuePlayerMovement(event){
    if (event.key == "d"){
        playerMove = 1;
    }
    if (event.key == "a"){
        playerMove = -1;
    }
    if(event.code == "Space"){
        playerMove = 0;
    }

}
document.addEventListener("keydown", queuePlayerMovement);




function gameRunning(){    
    if(playerMove == 1){
        if(parseInt(getComputedStyle(playerBody).paddingLeft) <= 1700){
            playerBody.style.paddingLeft = parseInt(getComputedStyle(playerBody).paddingLeft, 10) + 222+ "px"
        }
    }
    if(playerMove == -1){
        playerBody.style.paddingLeft = parseInt(getComputedStyle(playerBody).paddingLeft, 10) - 222+ "px"

    }
    

}
setInterval(gameRunning, 250)


