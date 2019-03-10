const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', this.toggleOpen, false));
panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive, false));

function toggleOpen(){
  this.classList.toggle('open');
};

function toggleActive(e){

  if(e.propertyName.includes('flex')){
     this.classList.toggle('open-active');
    }

 };





var btn = document.querySelector('.btn');
var mp4 = document.querySelector('.mp4');

btn.addEventListener('click', playPause, false);


function playVideo(){
   mp4.play();
};


function pauseVideo(){
    mp4.pause();
};

function playPause(){
    var change =document.getElementById('btn');
    if(change.innerHTML == "Play Video"){
        change.innerHTML = "Pause Video";
        playVideo();
    }else{
        change.innerHTML = "Play Video";
        pauseVideo();
    }
};

function zoom(){
    window.onload = function() {
        document.body.className += ' loaded';
      };

}

zoom();






    
