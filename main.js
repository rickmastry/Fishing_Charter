window.onload = function() {
    document.body.className += ' loaded';
  };



const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
};

function toggleActive(e){
    if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }

};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



var btn = document.querySelector('.btn');
var mp4 = document.querySelector('.mp4');

btn.addEventListener('click', playPause, false);


function playVideo(){
   mp4.play();
};


function pauseVideo(){
    mp4.pause();
}

function playPause(){
    var change =document.getElementById('btn');
    if(change.innerHTML == "Play Video"){
        change.innerHTML = "Pause Video";
        playVideo();
    }else{
        change.innerHTML = "Play Video";
        pauseVideo();
    }
}




    
