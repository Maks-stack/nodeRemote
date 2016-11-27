function Player() {
    var id = Math.random();
    var posX;
    var posY;
    var width = 20;
    var height = 20;
}
Player.prototype.Update = function(Xpos, Ypos){
    posX = Xpos;
    posY = Ypos;

    Draw();
}

function Draw (){
    ctx.fillStyle = "#F52DFF";
    if(posX <= -CANVAS_WIDTH/2) posX = -CANVAS_WIDTH/2;
    if(posX >= CANVAS_WIDTH/2) posX = CANVAS_WIDTH/2;
    if(posY <= -CANVAS_HEIGHT/2) posY = -CANVAS_HEIGHT/2;
    if(posY >= CANVAS_HEIGHT/2) posY = CANVAS_HEIGHT/2;
    ctx.beginPath();
    ctx.arc(canvas.width/2 + posY, canvas.height/2 + posY, 20,0,2*Math.PI);
    ctx.stroke();
}