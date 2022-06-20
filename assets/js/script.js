let food = 50;
let energi = 50;
let hummeur = 50;
let vie = 50;
let limite100 = 100;
let limite0 = 0;


function Tamagoshi() {
  this.eat = function () {
    if (food < 100 && vie < 100 ) {
      food += 10;
      document.getElementById("food").innerHTML = food;
      vie += 10;
      document.getElementById("vie").innerHTML = vie;

    }
    else {
      console.log('Vous ne pouvez plus manger');
    }
  };

  this.dodo = function () {
    if (food > 0 && energi > 0){
      energi -= 10;
      document.getElementById("energi").innerHTML = energi;
      food -= 10;
      document.getElementById("food").innerHTML = food;

}
  };

  this.jouer = function () {
    if (energi < 100 && hummeur < 100 && food > 0 && energi > 0){
      energi -= 10;
      document.getElementById("energi").innerHTML = energi;
      food -= 10;
      document.getElementById("food").innerHTML = food;
      hummeur += 30;
      document.getElementById("hummeur").innerHTML = hummeur;

}
  };

  this.combat = function () {
    if(hummeur < 100 && vie > 0 && vie < 100 && energi > 0 && energi < 100){
      let rdm = Math.floor(Math.random() * 2);
      if(rdm === 0){
        document.getElementById("sh").innerHTML = 'Vous avez perdu le combat';
        food -= 10;
        document.getElementById("food").innerHTML = food;
        vie -= 10;
        document.getElementById("vie").innerHTML = vie;
        energi += 10;
        document.getElementById("energi").innerHTML = energi;
      }
      else if(rdm === 1){
        document.getElementById("sh").innerHTML = 'Vous avez gagner le combat';
        energi += 10;
        document.getElementById("energi").innerHTML = energi;
        vie += 10;
        document.getElementById("vie").innerHTML = vie;
        hummeur += 10;
        document.getElementById("hummeur").innerHTML = hummeur;
      }
}
  };


};

let sh = new Tamagoshi();


let btncombat = document.getElementById("btn");
btncombat.addEventListener("click", sh.combat);


let btnfood = document.getElementById("btn3");
btnfood.addEventListener("click", sh.eat);

let btndodo = document.getElementById("btn2");
btndodo.addEventListener("click", sh.dodo);

let btnjouer = document.getElementById("btn4");
btnjouer.addEventListener("click", sh.jouer);