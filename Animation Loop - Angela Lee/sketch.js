var x = 0;
var y = 0;

var x_fish = 0;
var y_fish = 0;
var x_speed_fish = 2;

var x_speed = 2;
var y_speed = 0;


function setup() {
    createCanvas(400, 400);
    drawtheBackground();
    
    x_fish = width;
}

function draw() {
    drawtheBackground(); 
    
    fill(128,0,0);
    
    x = x + x_speed;
    y = 200;
    
    if (x > width) {
        x = 0;
    }
    
    rect(x+30,y,60,31);
    
    stroke(128,0,0);
    triangle(x-30,y,x+30,y,x+30,y+30);
    triangle(x+150,y,x+90,y,x+90,y+30);
    
    stroke(51);
    line (x+60,y,x+60,60)
    
    fill (255,255,153);
    stroke(255,255,153);
    triangle(x+60,60,x+130,160,x+60,180);
    
    
    fill (255,255,0);
    stroke (255,255,0);
    ellipse (56,46,55,55);

    fill (194,102,255);
    stroke (194,102,255);
    ellipse (x,y+177,50,28);
    triangle (x+2,y+177,x-40,y+187,x-40,y+167);
    fill(51);
    ellipse(x+20,y+173,6,6);
    
    fill (204,153,0);
    stroke (204,153,0);
    ellipse (x-80,y+70,50,28);
    triangle (x-72,y+70,x-122,y+80,x-122,y+60);
    fill(51);
    ellipse(x-60,y+65,6,6);
    
    y_fish = 200;
    
    fill(255,102,102);
    //x_speed = x_speed * -1
    x_fish = x_fish - x_speed_fish;
    
    if (x_fish < 0) {
        x_fish = width;
    }
    
    
    stroke (255,102,102);
    ellipse (x_fish,y_fish+100,50,28);
    triangle (x_fish-2,y_fish+100,x_fish+40,y_fish+110,x_fish+40,y_fish+90);
    fill(51);
    ellipse(x_fish-20,y_fish+97,7,7);
    
    fill(38,77,0);
    stroke (38,77,0);
    ellipse (x_fish+150,y_fish+150,50,28);
    triangle (x_fish+148,y_fish+150,x_fish+190,y_fish+160,x_fish+190,y_fish+140);
    fill(51);
    ellipse(x_fish+130,y_fish+147,6,6);
    
    textSize (10);
    fill (255,255,255);
    text ("Angela Lee",340,390);
    
}

function drawtheBackground (){
    background(128,223,255);
    fill(0,102,255);
    stroke(0,102,255);
    rect(0,230,400,400);
}