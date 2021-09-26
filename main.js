img="";
status="";
 function preload (){
     img=loadImage('dog_cat.jpg');
 }
 function setup(){
     canvas=createCanvas(640,420);
     canvas.center();
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="status : detecting objects";
 }
 function modelLoaded(){
     console.log("modelLoaded");
     status=true;
     objectDetector.detect(img,gotResults);
 }
 function gotResults(error,results){
     if(error){
         console.log(error);
     }
     console.log(results);
 }
 function draw(){
     image(img,0,0,640,420);
     fill('#A020F0');
     text("dog",45,75);
     noFill();
     stroke("#A020F0");
     rect(30,60,450,350);
     fill('#A020F0');
     text("cat",320,120);
     noFill();
     stroke("#A020F0");
     rect(300,90,270,370);
 }