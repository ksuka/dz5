document.addEventListener('DOMContentLoaded', function(){

//1
    let timer = 0;
    let knopk = document.getElementById('knopk');
    const count = document.getElementById('countic');

    knopk.addEventListener("click", function(){
timer += 1;
count.textContent = timer;




//2

if (timer >= 20){

knopk.disabled = true;
}
    });


let time = 10;
let intervalic;

const restart = document.getElementById('restart');
const bomba = document.getElementById('bomba');

function startTimer() {
    intervalic = setInterval(function () {
      time--;
      bomba.textContent = time;

      if (time <= 0) {
        clearInterval(intervalic);
        bomba.textContent = "Время вышло!";
      }
    }, 1000);
  }

 restart.addEventListener('click', function () {
    clearInterval(intervalic);
    time = 10;
    bomba.textContent = time;
    startTimer();
  });

  startTimer();
});


//3

let ct = 0;
let interval;

const ourtext = document.getElementById("tm");
const Stop = document.getElementById("Stop");
const Sb = document.getElementById("Sb");
const Res = document.getElementById("Reset");

Sb.addEventListener("click", function(){
if(!interval){ //проверяем, запущен ли таймер

    interval = setInterval(function(){
    ct++ //увеличиваем счетчик
    ourtext.textContent = ct;

    }, 1000);

}

});


Stop.addEventListener("click", function(){
    clearInterval(interval); //stop our interval
    interval = null; //сбрасываем идентификатор

});

Res.addEventListener("click", function(){
    clearInterval(interval);
    interval = null;
    ct = 0;
    ourtext.textContent = ct;
});










