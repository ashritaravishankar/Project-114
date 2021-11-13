function preload(){

}

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

  
}

function draw(){


    

}

function take_photo(){
    save('My_Lipstick_Filter_Image.png');

}
