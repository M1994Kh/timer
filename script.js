const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');
var range = document.querySelector('.inputRange');
var field = document.getElementById('num1');

range.addEventListener('input', function (e) {
  field.value = e.target.value;
});
field.addEventListener('input', function (e) {
  range.value = e.target.value;
});

function updateTextInput1(val) {
    val = val > 300 ? 300 : val;
    val = val < 0 ? 0 : val;
    document.getElementById('range').value = val;
    document.getElementById('num1').value = val;
}


let hrs=min=sec=ms=0,startTimer;

btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    if (hrs == 0 && min == 0 && sec == 0 && ms == 0)    {
        val = document.getElementById('num1').value;
        sec = 0;
        ms = 0;
        min = val%60;
        hrs = Math.floor(val/60);
    }
    // else {
        
    // }
    
    startTimer=setInterval(()=>{
        if (hrs != 0 || min != 0 || sec != 0 || ms != 0)    {
            btnStart.innerHTML = "Resume";
            ms--;}//ms=ms-1;
            if(ms==-1){
            sec--;
            ms=100;
            }
            if(sec==-1){
            min--;
            sec=59;
            }
            if(min==-1){
            hrs--;
            min=59;
            }
    updateDisplay();
    },10);
});

btnStop.addEventListener('click',()=>{
  clearInterval(startTimer);
  btnStart.classList.remove('start-active');
  btnStop.classList.add('stop-active');

});

btnReset.addEventListener('click',()=>{
  hrs=min=sec=ms=0;
  clearInterval(startTimer);
  updateDisplay();
  btnStart.innerHTML = "Start";
  btnStart.classList.remove('start-active');
  btnStop.classList.remove('stop-active');
});


function updateDisplay(){
  //Formated Display
  phrs=hrs<10?'0'+hrs:hrs;
  pmin=min<10?'0'+min:min;
  psec=sec<10?'0'+sec:sec;
  pms=ms<10?'0'+ms:ms;
  //Output
  document.querySelector('.hrs').innerText=phrs;
  document.querySelector('.min').innerText=pmin;
  document.querySelector('.sec').innerText=psec;
  document.querySelector('.ms').innerText=pms;
}
