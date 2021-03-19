var mouseEvent= "empty";
var lastposition_x, lastposition_y;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
width=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    //to take color from input
    color= document.getElementById("color").value;
 width=document.getElementById("width").value;

 mouseEvent="mouseDown";
  

}


 canvas.addEventListener("mouseup",my_mouseup);

 function my_mouseup(e){
    mouseEvent="mouseUP";
 }


             
 canvas.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(e){
    mouseEvent="mouseLeave";
 }


 canvas.addEventListener("mousemove",my_mousemove);

 function my_mousemove(e){



 curent_mouse_x= e.clientX-canvas.offsetLeft;
    curent_mouse_y= e.clientY-canvas.offsetTop;

if (mouseEvent=="mouseDown") {

    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= width;

ctx.moveTo(lastposition_x, lastposition_y);

ctx.lineTo(curent_mouse_x,curent_mouse_y);
ctx.stroke();


}


lastposition_x=curent_mouse_x;
lastposition_y=curent_mouse_y;
 }


function erase(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}