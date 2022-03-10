getCarsAtEnd() {
  database.ref("carsAtEnd").on("value", data => {
    this.rank = data.val();
  });
}

static updateCarsAtEnd(rank) {
  database.ref("/").update({
    carsAtEnd: rank
  });
}  

//---------------------------------
// Línea de meta
const finshLine = height * 6 - 100;

if (player.positionY > finshLine) {
  gameState = 2;
  player.rank += 1;
  Player.updateCarsAtEnd(player.rank);
  player.update();
  this.showRank();
}

//------------------------------
showRank() {
  swal({
    title: `Impresionante!${"\n"}Posición${"\n"}${player.rank}`,
    text: "Llegaste a la meta con éxito",
    imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize: "100x100",
    confirmButtonText: "Ok"
  });
}
//----------------------------------
<!-- Sweet Alert-->
<script	
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
crossorigin="anonymous"
></script>
<script src="./lib/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="./lib/sweetalert.css" />

//---------------------------------------------
showLife() {
  push();
  image(lifeImage, width / 2 - 130, height - player.positionY - 320, 20, 20);
  fill("white");
  rect(width / 2 - 100, height - player.positionY - 320, 185, 20);
  fill("#f50057");
  rect(width / 2 - 100, height - player.positionY - 320, player.life, 20);
  noStroke();
  pop();
}

//----------------------------------
showFuelBar() {
  push();
  image(fuelImage, width / 2 - 130, height - player.positionY - 250, 20, 20);
  fill("white");
  rect(width / 2 - 100, height - player.positionY - 250, 185, 20);
  fill("#ffc400");
  rect(width / 2 - 100, height - player.positionY - 250, player.fuel, 20);
  noStroke();
  pop();
}

//----------------------------------------
// Reducir el combustible del auto
if (player.fuel > 0 && this.playerMoving) {
  player.fuel -= 0.3;
}
if (player.fuel <= 0) {
  gameState = 2;
  this.gameOver();
}

//---------------------------------------
gameOver() {
  swal({
    title: `Fin del juego`,
    text: "Ups perdiste la carrera!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Gracias por jugar"
  });
}

//------------------------------------
if (this.playerMoving) {
  player.positionY += 5;
  player.update();
}


