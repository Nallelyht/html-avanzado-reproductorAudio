var miAudio = document.getElementById("audioMP3");

function reproducir() {
    var reproducir = document.getElementById("reproducir");

    if (miAudio.paused) {
        miAudio.play();
        reproducir.textContent = "Pausa";
        
    } else {
        miAudio.pause();
        reproducir.textContent = "Reproducir";
    }
}
function adelantar(value) {
        miAudio.currentTime += value;
    }  
function atrasar(value) {
        miAudio.currentTime -= value;
    }
function volumenAlto(){
    miAudio.volume +=.2;
}

function volumenBajo(){
    miAudio.volume -= .2;
}
function stop(){
    miAudio.currentTime=0;
    miAudio.pause();
}