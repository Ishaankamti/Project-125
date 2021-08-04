noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,450);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
    textSize(100);
    fill('#FFE787');
    text('Ishaan',50,400);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}