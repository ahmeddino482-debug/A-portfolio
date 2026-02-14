// Dark / Light Mode
const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("theme")==="light") document.body.classList.add("light");

// Reveal on scroll
const reveals=document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach(section=>{
    const top=section.getBoundingClientRect().top;
    if(top<window.innerHeight-100) section.classList.add("active");
  });
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

// Language Toggle
const translations={
  en:{
    navAbout:"About", navProjects:"Projects", navContact:"Contact",
    heroTitle:"Space-Tech Data Scientist",
    heroSubtitle:"I build intelligent systems at the intersection of AI, automation, and orbital mechanics.",
    heroBtn:"View Work",
    aboutTitle:"About Me",
    aboutText:`Hello, I am Ahmed Rashdan, a professional Data Scientist from Egypt, specializing in data analysis and AI for space technology and satellites.

I started my journey in technology at a young age, inspired by my love for video games and curiosity about how digital systems work, which led me to start programming early and build a strong foundation in data science and AI. Over time, I focused on integrating data science with space technology and analyzing orbital systems and remote sensing data.

I have worked on projects in data analysis, visualization, and developing intelligent models related to satellite and space environment data, with a proven ability to transform complex space data into actionable solutions supporting research and technical development.

Why work with me?

My unique value lies in combining advanced data science skills with a deep understanding of space technology, enabling me to efficiently handle specialized space projects beyond traditional ones. I have experience in satellite data analysis, navigation systems (GPS), and space weather, delivering accurate and reliable solutions in high-complexity technical environments.

I focus on your goals, transforming data into actionable insights that drive innovation and decision-making. I excel at adapting to modern tools, working professionally under pressure, and meeting high-quality standards and deadlines.

My goal is to build long-term partnerships based on trust, technical excellence, and continuous development.

If you are looking for a data scientist with real expertise in space technologies, capable of turning space data into tangible value, I am ready to collaborate.`,
    projectsTitle:"Selected Projects",
    contactTitle:"Contact"
  },
  ar:{
    navAbout:"من أنا",navProjects:"المشاريع",navContact:"تواصل",
    heroTitle:"عالم بيانات في تقنيات الفضاء",
    heroSubtitle:"أبني أنظمة ذكية عند تقاطع الذكاء الاصطناعي والأتمتة وميكانيكا المدارات.",
    heroBtn:"عرض الأعمال",
    aboutTitle:"من أنا",
    aboutText:`مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.

بدأت رحلتي في مجال التكنولوجي
