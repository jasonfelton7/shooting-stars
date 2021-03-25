let sparkleX;
let sparkleY;
let sparkleSize;

let sparkleX2;
let sparkleY2;

let sparkleX3;
let sparkleY3;

let sparkleX4;
let sparkleY4;

let starX = 0;
let starY = 0;
let starSize = 6;
let starSpeed = 0;

let starX2 = 400;
let starY2 = 0;
let starSize2 = 5;
let starSpeed2 = 5;

let starX3 = 0;
let starY3 = 500;
let starSize3 = 5;
let starSpeed3 = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(35);
}

function draw() {

    background(0, 50);

    // random values every draw loop
    sparkleX = random(0, width);
    sparkleY = random(0, height);
    sparkleSize = random(0, 10);

    sparkleX2 = random(0, width);
    sparkleY2 = random(0, height);

    sparkleX3 = random(0, width);
    sparkleY3 = random(0, height);

    sparkleX4 = random(0, width);
    sparkleY4 = random(0, height);


    // white stars
    fill(255);
    noStroke();
    ellipse(sparkleX, sparkleY, sparkleSize);

    // red stars
    fill(255, 0, 0);
    noStroke();
    ellipse(sparkleX2, sparkleY2, sparkleSize);

    // yellow stars
    fill(255, 255, 0);
    noStroke();
    ellipse(sparkleX3, sparkleY3, sparkleSize);

    // blue stars
    fill(0, 0, 255);
    noStroke();
    ellipse(sparkleX4, sparkleY4, sparkleSize);


    // create a shooting star animation defined in the shootingStar() function
    shootingStar(4);
}

function shootingStar(starSpeed) {
    fill(255);
    noStroke();
    ellipse(starX, starY, starSize);
    starX = starX + starSpeed;
    starY = starY + starSpeed;
    starSize = starSize + 0.1;

    fill(255, 0, 0);
    noStroke();
    ellipse(starX2, starY2, starSize2);
    starX2 = starX2 + starSpeed2 + 2;
    starY2 = starY2 + starSpeed2;
    starSize2 = starSize2 + 0.1;

    fill(0, 0, 255);
    noStroke();
    ellipse(starX3, starY3, starSize3);
    starX3 = starX3 + starSpeed3 + 2;
    starY3 = starY3 - starSpeed3;
    starSize3 = starSize3 + 0.1;

    if(starX > width || starY > height) {
        starX = random(0, 100);
        starY = 0;
        starSize = 1;
    }

    if(starX2 > width || starY2 > height) {
        starX2 = random(300, 400);
        starY2 = 0;
        starSize2 = 1;
    }

    if(starX3 > width || starY3 < 0) {
        starX3 = 0;
        starY3 = random(400, 500);
        starSize3 = 10;
    }
}