canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")
car1_width=120;
car1_height = 70;
car1_img= "car1.png";
car_x = 10
car_y = 10

car2_width=120;
car2_height = 70;
car2_img= "car1.png";
car_x = 10
car_y = 10

function add1(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTac.src = backgroud_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTac.src = car1_image;
}
function add2(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTac.src = backgroud_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTac.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvaswidth,canvas.height,)
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y, car1_width,car1.height,)
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y, car2_width,car2.height)
}
window.addEventListener("keydown", my_keydown);
 

function my_keydown(){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key")
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key")
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key")
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("W key")
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("D key")
    }
    if(keyPressed == '83')
    {
        car2_left();
        console.log("S key")
    }
}
function car1_down()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x =" + car1_x + "and" + car1_y) 
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}

function car1_left()
{
    if(car1_y >= 0)
    {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x =" + car1_x + "and" + car1_y,) 
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}
function car1_right()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x =" + car1_x + "and" + car1_y ) 
        uploadBackground()
        uploadcar1()
        uploadcar2()
    }
}
function car1_up()
{
    if(car1_y <= 500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x =" + car1_x + "and" + car1_y) 
        uploadBackground()
        uploadcar1()
        uploadcar2
    }
}