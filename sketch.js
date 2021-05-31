 var ball;
 var database,position;


 function preload(){
    bg =loadImage("cityImage.png");
    balloonImage1=loadAnimation("hotairballoon1.png");
    balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
    "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
    "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
   }

   
 function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball=createSprite(250,450,150,150);
    ball.addAnimation("hotAirBalloon",balloonImage1);
    ball.scale=0.5;
    
    
    ballPos=database.ref("Ball/position")
    ballPos.on("value",readPosition,showerror)
 }

function draw(){
    background(bg);
    if(position !== undefined  ){

    
    
    if(keyDown(LEFT_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        ball.addAnimation("hotAirBalloon",balloonImage2);
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
   database.ref("Ball/position").set({
       "x":position.x +x ,
       "y":position.y +y
   })
}
function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y

}
function showerror(){
    console.log("error")
}
 
