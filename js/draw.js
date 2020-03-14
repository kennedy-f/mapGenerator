function draw(){
    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext("2d"); 
    ctx.moveTo(0,0); 
    ctx.lineTo(200,200); 
    ctx.stroke(); 
}