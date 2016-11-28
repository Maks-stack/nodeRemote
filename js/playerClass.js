function Player() {
    var id = Math.random()*100;
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
    if(posX <= -CANVAS_WIDTH/2) posX = -CANVAS_WIDTH/2;
    if(posX >= CANVAS_WIDTH/2) posX = CANVAS_WIDTH/2;
    if(posY <= -CANVAS_HEIGHT/2) posY = -CANVAS_HEIGHT/2;
    if(posY >= CANVAS_HEIGHT/2) posY = CANVAS_HEIGHT/2;
    ctx.beginPath();
    ctx.fillStyle = '#FF694B';
    ctx.arc(canvas.width/2 + posX, canvas.height/2 + posY, 20,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
}


