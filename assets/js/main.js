var miAudio = document.getElementById("audioMP3");

function reproducir() {         
    miAudio.play();
}
function pausa(){
    miAudio.pause();
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
function silencio(){
    miAudio.volume = 0;
}
function stop(){
    miAudio.currentTime=0;
    miAudio.pause();
}
miAudio.ontimeupdate = function() {
   var rango = document.getElementById("rango");
   rango.value = miAudio.currentTime;

};