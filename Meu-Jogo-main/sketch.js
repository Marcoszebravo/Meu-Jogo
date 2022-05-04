var player
var chao
function preload(){

}
function setup(){
createCanvas(800,400)
player = createSprite(30,340,15,30)
player.shapeColor = "red"
chao = createSprite(400,380,800,50)
zumbi()
}
function draw(){
    background("black")
    drawSprites()
    player.collide(chao)
    if(keyDown("d")){
        player.x+=2
    }
    if(keyDown("a")){
        player.x-=2
    }
    if(keyDown("w")){
        player.velocityY = -10
    }
    player.velocityY+=0.8
   
}
function zumbi(){
    for(var N=1;N<=30;N++){
        var zumbi = createSprite(400,340,15,30)
        zumbi.shapeColor = "green"
        zumbi.x=Math.round(random(100,800))
        var speeds = [2,-2,3,-3,4,-4]
        var celetor = random(speeds)
        zumbi.velocityX = celetor
    }
}