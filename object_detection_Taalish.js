objectDetector = ""
img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('cat_dog.png');
}

function modelLoaded(){
    console.log("MODEL LOADED!!!!!!!!!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for (i = 0; i < objects.length;i++){
            document.getElementById("status").innerHTML = "status : Objects detected";
            fill("#FF0000");
            Percent = floor(Objects[i].confidence * 100);
            text(Objects[i].label + " " + Percent + "%" ,Objects[i].x + 15 ,Objects[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(Objects[i].x ,Objects[i].y ,Objects[i].width ,Objects[i].height);
        }
    }
    fill("#FF0000");
    text("DOG" , 45 , 75);
    nofill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("CAT" , 320 , 120 );
    nofill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
