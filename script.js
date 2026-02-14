// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("theme")==="light") document.body.classList.add("light");

// LANGUAGE TOGGLE
const btnEn = document.getElementById("langEn");
const btnAr = document.getElementById("langAr");
const aboutContent = document.getElementById("aboutText");

const translations = { /* same as before, EN + full AR */ };

// Set language function
function setLanguage(lang){
  aboutContent.innerHTML = translations[lang].aboutText;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.body.dir = lang==="ar"?"rtl":"ltr";
  btnEn.classList.toggle("active", lang==="en");
  btnAr.classList.toggle("active", lang==="ar");
}
btnEn.addEventListener("click", ()=>setLanguage("en"));
btnAr.addEventListener("click", ()=>setLanguage("ar"));
setLanguage("en");

// REVEAL ON SCROLL + PARALLAX
const reveal = ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight-150) el.classList.add("active");
    else el.classList.remove("active");
  });
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// Parallax layers
const layers = document.querySelectorAll(".parallax-layer");
window.addEventListener("scroll",()=>{
  const scroll = window.scrollY;
  layers.forEach((layer,i)=>{
    const speed = (i+1) * 0.2;
    layer.style.transform = `translateY(${scroll*speed}px)`;
  });
});
