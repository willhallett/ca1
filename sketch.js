let w = 4;
let b = w; 
let cells; 
let generation = 0; 

let ruleset = [0, 1, 1, 0, 1, 1, 1, 0];

function setup() {
  createCanvas(1440, 5000);
  background(230);

  cells = Array(floor(width/w));

  for(i = 0; i < cells.length; i++){

      cells[i] = 1;

  }

  cells[cells.length/2] = 0;
  cells[cells.length/3] = 0; 
  cells[cells.length/4] = 0; 
  cells[cells.length/8] = 0; 
  cells[cells.length - cells.length/3] = 0;
  cells[cells.length - cells.length/4] = 0;
  cells[cells.length - cells.length/8] = 0;
  cells[cells.length] = 0;
}

function draw() {

  // frameRate(60); 

  for(i = 0; i < cells.length; i++){

    if(cells[i] == 1){
      stroke(0), 50;
      rect(i * b, generation * w, w, w);
    } else {
      stroke(255);
      rect(i * b, generation * w, w, w);
    }
  }

  if(generation < height/w){
    generate();
  }
  
}

function generate(){

  let nextGen = Array(cells.length);

  for(i = 0; i < cells.length; i++){

    let left, right, me; 

    left = cells[i-1];
    right = cells[i+1];
    me = cells[i];

    nextGen[i] = rules(left, me, right);
  }

  cells = nextGen;
  generation++; 

} 

function rules(a, b, c) {
    if (a == 1 && b == 1 && c == 1) return ruleset[0];
    if (a == 1 && b == 1 && c == 0) return ruleset[1];
    if (a == 1 && b == 0 && c == 1) return ruleset[2];
    if (a == 1 && b == 0 && c == 0) return ruleset[3];
    if (a == 0 && b == 1 && c == 1) return ruleset[4];
    if (a == 0 && b == 1 && c == 0) return ruleset[5];
    if (a == 0 && b == 0 && c == 1) return ruleset[6];
    if (a == 0 && b == 0 && c == 0) return ruleset[7];
  return 0;
}
