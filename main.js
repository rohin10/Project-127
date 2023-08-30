song1="";
song2="";
function preload(){
    song1=loadSound("music.mp3");
    song1=loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet is intiallized")
}
function draw(){
    image(video,0,0,600,500);
}
