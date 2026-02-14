// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("theme")==="light") document.body.classList.add("light");

// LANGUAGE TOGGLE
const languageSwitcher = document.getElementById("languageSwitcher");
const translations = {
  en: {
    navAbout:"About",navProjects:"Projects",navContact:"Contact",
    heroTitle:"Space-Tech Data Scientist",
    heroSubtitle:"I build intelligent systems at the intersection of AI, automation, and orbital mechanics.",
    heroBtn:"View Work",
    aboutTitle:"About Me",
    aboutText:"Hello, I am Ahmed Rashdan, a professional Data Scientist from Egypt...",
    projectsTitle:"Selected Projects",
    contactTitle:"Contact"
  },
  ar: {
    navAbout:"من أنا",navProjects:"المشاريع",navContact:"تواصل معي",
    heroTitle:"عالم بيانات تقنيات الفضاء",
    heroSubtitle:"أقوم ببناء أنظمة ذكية عند تقاطع الذكاء الاصطناعي، الأتمتة، وميكانيكا المدار.",
    heroBtn:"عرض الأعمال",
    aboutTitle:"من أنا",
    aboutText:"مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر...",
    projectsTitle:"المشاريع",
    contactTitle:"تواصل معي"
  }
};
function setLanguage(lang){
  document.documentElement.lang=lang;
  document.documentElement.dir=(lang==="ar")?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    el.innerHTML=translations[lang][key];
  });
}
let savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
languageSwitcher.value=savedLang;
languageSwitcher.addEventListener("change", e=>{
  setLanguage(e.target.value);
  localStorage.setItem("lang", e.target.value);
});

// SCROLL REVEAL
function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight-150) el.classList.add("active");
    else el.classList.remove("active");
  });
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
