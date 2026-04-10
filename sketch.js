function setup() {
  createCanvas(400, 800);
}
//fill_aplico código color RGB
//rect_ubico en el plano

function draw() { 
  background(232, 229, 225);
  text(`x: ${winMouseX} y: ${winMouseY}`, 50, 50); //Este código me facilitó para ubicar las figuras en el plano de acuerdo a las coordenadas
  
  noStroke(0);//quita bordes negros de las figuras
  
  fill(255, 255, 255); //BORDE BLANCO
  rect(0, 0, 400, 800);
  
  fill(232, 229, 225); //BORDE INTERIOR BEIGE código RGB
  rect(20, 20, 360, 760);
  
  fill(145, 21, 30); //BORDE ROJO, código RGB
  rect(50, 50, 300, 700);
  
  fill(10); //BORDE NEGRO
  rect(80, 80, 240, 640);
  
  //MÓDULOS FRANJAS DE COLOR
  let x = 90;
  let y = 90;
  let w = 220;
  let h = 120;
  let s = 20;
  
  let sw= w / 7; //Aqui estoy dividiendo el ancho de mi primer módulo en 7 partes
  
  //MÓDULO VERTICAL
  fill(123, 77,  90);
  rect (x, y, sw, h);
  
  fill(182, 140, 156);
  rect(x + sw, y, sw, h);
  
  fill(159, 137, 151);
  rect(x + sw*2, y, sw, h);
  
  fill(65, 48, 36);
  rect(x + sw*3, y, sw, h);
  
  fill(133, 89, 102);
  rect(x + sw*4, y, sw, h);
  
  fill(77, 88, 135);
  rect(x + sw*5, y, sw, h);
  
  fill(159, 23, 31);
  rect(x + sw*6, y, sw, h)
  y += h + s;
  
  //MÓDULO HORIZONTAL_01
  let sh = h / 6;
  fill(169, 27, 38);
  rect(x, y, w, sh);
  
  fill(79, 60, 38);
  rect(x, y + sh, w, sh);

  fill(174, 53, 43);
  rect(x, y + sh*2, w, sh);
  
  fill(85, 99, 143);
  rect(x, y + sh*3, w, sh);

  fill(96, 93, 103);
  rect(x, y + sh*4, w, sh);
  
  fill(200, 144, 82);
  rect(x, y + sh*5, w, sh)
  
  y += h + s;
  
  //MÓDULO VERTICAL_02
  
  fill(142, 93, 106);
  rect (x, y, sw, h);
  
  fill(88, 25, 28);
  rect(x + sw, y, sw, h);
  
  fill(172, 54,  48);
  rect(x + sw*2, y, sw, h);
  
  fill(79, 94, 139);
  rect(x + sw*3, y, sw, h);
  
  fill(143, 91, 105);
  rect(x + sw*4, y, sw, h);
  
  fill(69, 30, 40);
  rect(x + sw*5, y, sw, h);
  
  fill(193, 58, 86);
  rect(x + sw*6, y, sw, h);

  y += h + s;
  
  //MPODULO HORIZONTAL_02
  let = h / 10;
  fill(76, 24, 33);
  rect(x, y, w, sh);
  
  fill(150, 46, 43);
  rect(x, y + sh, w, sh);

  fill(66, 88,135);
  rect(x, y + sh*2, w, sh);
  
  fill(133, 85, 103);
  rect(x, y + sh*3, w, sh);

  fill(185, 151, 166);
  rect(x, y + sh*4, w, sh);
  
  fill(140, 102, 110);
  rect(x, y + sh*5, w, sh)
  
  fill(54, 25, 27);
  rect(x, y + sh*6, w, sh);
  
  fill(201, 80, 105);
  rect(x, y + sh*7, w, sh);
  
  fill(194, 53, 54);
  rect(x, y + sh*8, w, sh);
  
  fill(146, 97, 110);
  rect(x, y + sh*9, w. sh);
  
  y += h + s;
  
}
  