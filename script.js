const stop = document.querySelector('#stopBtn');
const start = document.querySelector('#startBtn');
const reset = document.querySelector('#resetBtn');
const display = document.querySelector('.timerDisplay');

let isStop = true;


start.addEventListener('click', function(){
  if(isStop === true){
    isStop = false;
    time();
  }
})


let sec = 0;
let min = 0;
let hr = 0;




function time(){
  if(isStop === false){
    sec++;

    sec = Number(sec);
    min = Number(min);
    hr = Number(hr);

    if(sec === 60){
      sec = 0;
      min++
    }

    if(min === 60){
      min = 0
      hr++
    }

    if(sec<10){
      sec = "0" + sec
    }

    if(min<10){
      min = "0" + min
    }

    if(hr<10){
      hr = "0" + hr
    }
 
    display.textContent = hr + " : " + min + " : " + sec

    setTimeout("time()", 1000);
  }
}

stop.addEventListener('click', ()=>{
  isStop = true;
})

reset.addEventListener('click', ()=>{
  isStop = true;
  sec = 0;
  min = 0
  hr = 0;

  display.textContent = '00 : 00 : 00'
})