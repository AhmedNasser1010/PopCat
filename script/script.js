let score = document.querySelector(".score span");
let body = document.querySelector("body");
let img = document.querySelector(".cat img");
let audio = document.querySelector("audio");

body.onmousedown = function() {
  score.innerHTML++;
  img.src = "resource/image/op.png"
  audio.currentTime = 0;
  audio.play();
}
body.onkeydown = function() {
  score.innerHTML++;
  img.src = "resource/image/op.png"
  audio.play();
}

body.onkeyup = function() {
  img.src = "resource/image/p.png"
}
body.onmouseup = function() {
  img.src = "resource/image/p.png"
}