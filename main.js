noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
} 

function draw(){
    background('#969A97');
    fill("red");
    stroke("red");
    square(noseX, noseY, difference);
}
  
function modelLoaded(){
    console.log('Pose is Inlinsined');

}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);      
         noseX=results[0].pose.nose.x;     
         noseY=results[0].pose.nose.y;
         console.log("noseX="+noseX+"noseY="+noseY)
         leftWristX=results[0].pose.leftWrist.x;
         rightWristX=results[0].pose.rightWrist.x;
         difference=leftWristX-rightWristX;
    }
}