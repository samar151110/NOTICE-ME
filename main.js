difference = 0;
rightX = 0;
leftX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(250, 100);

    canvas = createCanvas(500, 400);
    canvas.position(1100, 100);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotposes);
}

function modelLoded() {
    console.log("posenet is intialized");
}



function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        rightX = results[0].pose.rightWrist.x;
        leftX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftX - rightX);
    }
}

function draw() {
    background("grey");
    textSize(difference);
    fill("red");
    text("Samar Mahajan", 50, 200);
}