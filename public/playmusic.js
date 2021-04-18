var music="";
document.addEventListener("DOMContentLoaded", function(e) {
    var listenButtons = document.getElementsByClassName("listen")

    for (var i = 0; i < listenButtons.length; i++) {
        listenButtons[i].addEventListener("click", function() {
            var songName = this.id;
            playAndPauseMusic(songName,this.innerHTML)
            if(this.innerHTML === "Play"){
                this.innerHTML = "Pause"
            }else{
                this.innerHTML = "Play"
            }
        });
      }
 })


function playAndPauseMusic(musicName,PlayOrPause){

    if(music === ""){
        music = new Audio("songs/"+musicName+".mp3");
    }

    PlayOrPause === "Play" ? music.play() : music.pause();
    
}