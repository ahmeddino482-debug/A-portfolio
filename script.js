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

const translations = {
  en:{
    navAbout:"About",
    navSkills:"Skills",
    navProjects:"Projects",
    navContact:"Contact",
    heroTitle:"Space-Tech Data Scientist",
    heroSubtitle:"I build intelligent systems at the intersection of AI, automation, and orbital mechanics.",
    heroBtn:"View Work",
    aboutTitle:"About Me",
    aboutText:`<p>Hello, I’m Ahmed Rashdan, a professional Data Scientist from Egypt, specializing in AI, data analysis, and space/satellite technology.</p>
    <p>I began my journey early through curiosity about video games and digital systems, building a strong foundation in programming and data science.</p>
    <p>I have worked on satellite data projects, remote sensing, and AI solutions, turning complex space data into practical insights.</p>
    <p><strong>Why work with me?</strong></p>
    <p>I combine advanced data science skills with deep space tech knowledge. Experienced in satellite data, GPS, and space weather analysis, delivering accurate and reliable solutions.</p>
    <p>I focus on your goals, transforming data into actionable insights to drive innovation.</p>`,
    skillsTitle:"My Skills",
    skillAI:"AI & Machine Learning",
    skillAutomation:"Automation",
    skillWeb:"Web Development",
    skillSpace:"Space Tech / Satellite Data",
    skillRobotics:"Robotics",
    projectsTitle:"Selected Projects",
    contactTitle:"Contact"
  },
  ar:{
    navAbout:"حول",
    navSkills:"مهارات",
    navProjects:"مشاريع",
    navContact:"تواصل",
    heroTitle:"عالم بيانات تقنيات الفضاء",
    heroSubtitle:"أقوم ببناء أنظمة ذكية تجمع بين الذكاء الاصطناعي والأتمتة وميكانيكا المدارات.",
    heroBtn:"شاهد الأعمال",
    aboutTitle:"حول",
    aboutText:`<p>مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.</p>
<p>بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي.</p>
<p>عملت على مشاريع في تحليل بيانات الأقمار الصناعية، الاستشعار عن بُعد، وتطوير نماذج ذكية، حيث أحوّل البيانات الفضائية المعقدة إلى حلول عملية.</p>
<p><strong>لماذا تختار العمل معي؟</strong></p>
<p>أجمع بين المهارات المتقدمة في علوم البيانات والفهم العميق لتقنيات الفضاء. أمتلك خبرة في تحليل بيانات الأقمار الصناعية، أنظمة الملاحة، والطقس الفضائي، لتقديم حلول دقيقة وموثوقة.</p>
<p>أركز على أهدافك، وأحوّل البيانات إلى رؤى قابلة للتنفيذ لدعم الابتكار.</p>`,
    skillsTitle:"مهاراتي",
    skillAI:"الذكاء الاصطناعي والتعلم الآلي",
    skillAutomation:"الأتمتة",
    skillWeb:"تطوير الويب",
    skillSpace:"تقنيات الفضاء / بيانات الأقمار الصناعية",
    skillRobotics:"الروبوتات",
    projectsTitle:"المشاريع",
    contactTitle:"تواصل"
  }
};

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

// REVEAL ON SCROLL
const reveal = ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight-150) el.classList.add("active");
  });
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// SKILL BAR ANIMATION
const skillBars = document.querySelectorAll(".skill-level");
window.addEventListener("scroll",()=>{
  skillBars.forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight-50){
      bar.style.transform = "scaleX(1)";
    }
  });
});

// PARALLAX
const layers = document.querySelectorAll(".parallax-layer");
window.addEventListener("scroll",()=>{
  const scroll = window.scrollY;
  layers.forEach((layer,i)=>{
    const speed = (i+1)*0.15;
    layer.style.transform = `translateY(${scroll*speed}px)`;
  });
});
