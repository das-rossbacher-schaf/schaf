function video_appears() {
     document.getElementById("background_video").style.visibility = "visible";
     for (var i = 0; i < 11; i += 1) {
          document.getElementById("background_video").style.opacity = i / 10;
          document.getElementById("Schaf").style.opacity = (10-i)/10;
     }
}