img = ""
Status = ""
object = []
function setup(){
 canvas = createCanvas(600,500)
 canvas.position(400,100)
 objectDetector = ml5.objectDetector("cocossd",modelloaded)
 document.getElementById("Status").innerHTML = " - Detecting Objects"
}
function draw(){
image(img,0,0,600,500)
if(Status != ""){
    for(var I = 0; I <object.length; I++){
        document.getElementById("Status").innerHTML = "- Objects Detected"
        fill("red")
text(object[I].label, object[I].x, object[I].y);
text( 400, 100);
noFill()
rect(object[I].x, object[I].y, object[I].width, object[0].height)
    }
}
}
function preload(){
img = loadImage("dog_cat.jpg")
}
function modelloaded(){
    console.log("modelloaded")
    objectDetector.detect(img,gotResult)
}
function gotResult(error,result){
if(error){
    console.log(error)
}
else{
    console.log(result)
    Status = true
    object = result
}
}
