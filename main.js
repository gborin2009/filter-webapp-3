nose_x=0
nose_y=0
function preload(){
    clown=loadImage('https://i.postimg.cc/DZBYbfYt/mouth-and-lip-33221-removebg-preview.png')

}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()


poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',got_poses)
}
function modelLoaded(){
    console.log("poseNet model is loaded")
}
function got_poses(results){
    if(results.length>0){
        console.log(results)
        nose_x=results[0].pose.nose.x-30;
        nose_y=results[0].pose.nose.y+5;
        console.log("nose x="+results[0].pose.nose.x)
        console.log("nose y="+results[0].pose.nose.y)
    }
}
function draw(){
 image(video,0,0,300,300)
 fill("aqua")
 stroke("pink") 
 image(clown,nose_x,nose_y,60,60) 
}
function takesnapshot(){
 save("selfie.png")   
}