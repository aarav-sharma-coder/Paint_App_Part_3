var database;
var isDrawing = false;
var drawing = [];
var currentPath = [];
var clearButton;
var saveButton;
var weight = 4;
var name;
var artistCount;
var drawState = 0;
var form, paint, artist;
var allArtists;
var bg =855;
var mg =0;
var cg =0;
function setup() {
  database = firebase.database();
  paint = new Paint();
  paint.getState();
  paint.start();

  var canvas = createCanvas(1050, 550);
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer');
  canvas.mouseReleased(endPath);

   clearButton = select('#clearButton')
   //clearButton.position(900,500);
   clearButton.mousePressed(clearDrawing);

   saveButton = select('#saveButton');
   saveButton.mousePressed(saveDrawing);
}

function draw() {
  background("WHITE");

   if(isDrawing){
       var point = {
         x: mouseX,
         y: mouseY
       }
       currentPath.push(point);
   }
   if(drawState === 1){
     paint.play();
   }
   colorMode(RGB);
   stroke(mg,55,cg);
   strokeWeight(weight);
   noFill();
   
   for(var i=0 ; i<drawing.length ; i++){
     var path = drawing[i];
     beginShape();
    for(var j=0 ; j<path.length ; j++){
      vertex(path[j].x , path[j].y);
   }
   endShape();
  }
  

}

function startPath(){
  currentPath = [];
  isDrawing = true;
  drawing.push(currentPath);
}

function clearDrawing(){
      drawing = [];
}

function endPath() {
  isDrawing = false;
}

function keyPressed(){
  if (keyCode === LEFT_ARROW && isDrawing === false) {
    weight = weight + 1;
  } else if (keyCode === RIGHT_ARROW && isDrawing === false) {
    weight = weight - 1;
  }
  if (keyCode === UP_ARROW && isDrawing === false) {
    bg = bg + random(50,150);
    mg = mg + random(50,100);
    cg = cg + random(50,150);
  } else if (keyCode === DOWN_ARROW && isDrawing === false) {
    bg = bg- random(50,150);
    mg = mg - random(50,150);
    cg = cg - random(50,150);
  }
}

function saveDrawing(){
  var ref = database.ref('drawings');
  var data={
    
    drawing: drawing
  }
 var result =  ref.push(data , dataSent);
console.log(result.key);

  function dataSent(status){
    console.log(status);
  }
}