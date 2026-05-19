const textchanger = ["textchanger1", "textchanger2", "textchanger3", "textchanger4"];
const photo = document.getElementById("secondsectionphoto");  
const flexphotos = document.querySelectorAll('.flexphoto'); 

let currentPosition = 0;
let slideinterval;



function slide() { 

  currentPosition -= 100; 

  if (currentPosition < -300) {
    currentPosition = 0;
  }

  if (photo) {
    photo.style.transform = `translate(${currentPosition}vw)`;
  }
}

function updateTextHighlight(index, Visible) {
  const textId = textchanger[index]; 
  const textElement = document.getElementById(textId);
  
  if (textElement) {
    if (Visible) {
      textElement.style.color = "white";
    } else {
      textElement.style.color = "rgb(139, 139, 139)";
    }
  }
}
function startinterval() {
  clearInterval(slideinterval);
  slideinterval = setInterval(slide, 3000);
}
function stopinterval() {
  clearInterval(slideinterval);
}
document.getElementById("secondsectionphoto").addEventListener("mouseover",stopinterval);
document.getElementById("secondsectionphoto").addEventListener("mouseout",()=>startinterval());
startinterval();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const index = Array.from(flexphotos).indexOf(entry.target);

    if (index !== -1) {
      updateTextHighlight(index, entry.isIntersecting);
    }
  });
}, {
  threshold: 0.7 
});


flexphotos.forEach(flexphoto => {
  observer.observe(flexphoto);
});

// let sell1=document.getElementById("sell1");
// let s1=document.getElementById("s1");
// sell1.addEventListener("mouseover",()=>{
//   s1.style.display="flex";
// })
// sell1.addEventListener("mouseout",()=>{
//   s1.style.display="none";
// })
// let sell2=document.getElementById("sell2");
// let s2=document.getElementById("s2");
// sell2.addEventListener("mouseover",()=>{
//   s2.style.display="flex";
// })
// sell2.addEventListener("mouseout",()=>{
//   s2.style.display="none";
// })
// let sell3=document.getElementById("sell3");
// let s3=document.getElementById("s3");
// sell3.addEventListener("mouseover",()=>{
//   s3.style.display="flex";
// }); // <-- add missing parenthesis and semicolon here
// sell3.addEventListener("mouseout",()=>{
//   s3.style.display="none";
// })
// let locally1=document.getElementById("locally1");
// let l1=document.getElementById("l1");
// locally1.addEventListener("mouseover",()=>{
//   l1.style.display="flex";
// })
// locally1.addEventListener("mouseout",()=>{
//   l1.style.display="none";
// })
// let locally2=document.getElementById("locally2");
// let l2=document.getElementById("l2");
// locally2.addEventListener("mouseover",()=>{
//   l2.style.display="flex";
// })
// locally2.addEventListener("mouseout",()=>{
//   l2.style.display="none";
// })
// let locally3=document.getElementById("locally3");
// let l3=document.getElementById("l3");
// locally3.addEventListener("mouseover",()=>{
//   l3.style.display="flex";
// });
// locally3.addEventListener("mouseout",()=>{
//   l3.style.display="none";
// })

const triggerIds = [
    "sell1", "sell2", "sell3", 
    "locally1", "locally2", "locally3"
];

// Define two arrays containing the IDs of the target elements (the elements to show/hide)
const targetIds = [
    "s1", "s2", "s3", 
    "l1", "l2", "l3"
];
triggerIds.forEach((triggerId, index) => {  
    const targetId = targetIds[index];
    hover(triggerId, targetId);
})

function hover(hid,targetid) {
  let triggerElement = document.getElementById(hid);
  let targetElement = document.getElementById(targetid);
  triggerElement.addEventListener("mouseover", () => {
    targetElement.style.display = "flex";
  });
  triggerElement.addEventListener("mouseout", () => {
    targetElement.style.display = "none";
  });
}