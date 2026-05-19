let photo = document.getElementById("secondsectionphoto");
let currentPosition = 0;
let inter;
function slide(){
  currentPosition += -100;
  if (currentPosition < -300) {
    currentPosition = 0;
  }
  let tra = `translate(${currentPosition}vw)`;
  photo.style.transform = tra;
}
setInterval(slide, 3000);
document.getElementById("secondsectionphoto").addEventListener('mouseover',()=>{
        clearInterval(inter);
    })
document.getElementById("secondsectionphoto").addEventListener('mouseout',()=>{
        inter=setInterval(slide,3000);
    })
