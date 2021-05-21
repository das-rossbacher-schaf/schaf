function video_appears() {
     document.getElementById("background_video").style.visibility = "visible";
     for (var i = 0; i < 11; i += 1) {
          document.getElementById("background_video").style.opacity = i / 10;
          document.getElementById("Schaf").style.opacity = (10-i)/10;
     }
}

function play_audio() {
     document.getElementById("maehen").play();
}

var video = document.getElementById("background_video");
video.onended = function () {
     alert("hallo");
     /*
     document.getElementById("background_video").style.visibility = "hidden";
     document.getElementById("Schaf").style.opacity = 1.0;
     */
};