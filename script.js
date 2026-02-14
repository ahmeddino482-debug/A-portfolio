// 🌙 Dark Mode
const themeToggle=document.getElementById("themeToggle");
themeToggle.onclick=()=>{
document.body.classList.toggle("light");
};

// 🍔 Mobile Menu
const hamburger=document.getElementById("hamburger");
const navLinks=document.querySelector(".nav-links");
hamburger.onclick=()=>navLinks.classList.toggle("active");

// 🌠 Shooting Stars
setInterval(()=>{
const star=document.createElement("div");
star.classList.add("shooting-star");
star.style.top=Math.random()*window.innerHeight+"px";
star.style.right="0px";
document.body.appendChild(star);
setTimeout(()=>star.remove(),2000);
},4000);

// 📊 Counter
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
window.addEventListener("scroll",()=>{
if(counter.getBoundingClientRect().top<window.innerHeight){
let update=setInterval(()=>{
const target=+counter.dataset.target;
const current=+counter.innerText;
if(current<target){
counter.innerText=current+1;
}else{
clearInterval(update);
}
},30);
}
});
});

// 🎯 Filter
const filterButtons=document.querySelectorAll(".filter-btn");
const projectCards=document.querySelectorAll(".project-card");

filterButtons.forEach(btn=>{
btn.onclick=()=>{
document.querySelector(".active").classList.remove("active");
btn.classList.add("active");
const filter=btn.dataset.filter;
projectCards.forEach(card=>{
card.style.display=(filter==="all"||card.dataset.category===filter)
?"block":"none";
});
};
});

// 🤖 AI Widget
const aiButton=document.getElementById("aiButton");
const aiWidget=document.getElementById("aiWidget");
const closeAI=document.getElementById("closeAI");

aiButton.onclick=()=>aiWidget.style.display="block";
closeAI.onclick=()=>aiWidget.style.display="none";

// ✨ Scroll Reveal
const sections=document.querySelectorAll(".section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("visible");
}
});
});
