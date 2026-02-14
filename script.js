// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light")?"light":"dark");
});
if(localStorage.getItem("theme")==="light") document.body.classList.add("light");

// LANGUAGE BUTTONS
const btnEn = document.getElementById("langEn");
const btnAr = document.getElementById("langAr");

const translations = {
  en: {
    navAbout:"About",navProjects:"Projects",navContact:"Contact",
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
  ar: {
    navAbout:"من أنا",navProjects:"المشاريع",navContact:"تواصل معي",
    heroTitle:"عالم بيانات تقنيات الفضاء",
    heroSubtitle:"أقوم ببناء أنظمة ذكية عند تقاطع الذكاء الاصطناعي، الأتمتة، وميكانيكا المدار.",
    heroBtn:"عرض الأعمال",
    aboutTitle:"من أنا",
    aboutText:`مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.

بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي. ومع تطور مسيرتي، ركّزت على دمج علوم البيانات مع تكنولوجيا الفضاء وتحليل بيانات الأنظمة المدارية والاستشعار عن بُعد.

عملت على مشاريع في تحليل البيانات، تصورها، وتطوير نماذج ذكية مرتبطة ببيانات الأقمار الصناعية والبيئة الفضائية، حيث أمتلك قدرة مميزة على التعامل مع البيانات الفضائية المعقدة وتحويلها إلى حلول عملية تدعم البحث العلمي والتطوير التقني.

لماذا تختار العمل معي؟

ما يميزني هو الجمع بين المهارات المتقدمة في علوم البيانات والفهم العميق لتقنيات الفضاء، مما يمكّنني من العمل بكفاءة على المشاريع الفضائية المتخصصة، وليس فقط المشاريع التقليدية. أمتلك خبرة في تحليل بيانات الأقمار الصناعية، أنظمة الملاحة (GPS)، والطقس الفضائي، مما يجعلني قادرًا على تقديم حلول دقيقة وموثوقة في بيئات تقنية عالية التعقيد.

أركز على أهدافك، وأحوّل البيانات إلى رؤى قابلة للتنفيذ تدعم الابتكار واتخاذ القرار. كما أتميز بسرعة التكيّف مع الأدوات الحديثة، والعمل باحترافية تحت الضغط، والالتزام بالجودة والمواعيد.

هدفي هو بناء شراكات طويلة الأمد قائمة على الثقة، والتميّز التقني، والتطوير المستمر.

إذا كنت تبحث عن عالم بيانات يمتلك خبرة حقيقية في تقنيات الفضاء، ويحوّل البيانات الفضائية إلى قيمة ملموسة، فأنا مستعد للعمل.`,
    projectsTitle:"المشاريع",
    contactTitle:"تواصل معي"
  }
};

function setLanguage(lang){
  document.documentElement.lang=lang;
  document.documentElement.dir=(lang==="ar")?"rtl":"ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key];
  });

  // Update active button
  if(lang==="en"){
    btnEn.classList.add("active");
    btnAr.classList.remove("active");
  } else {
    btnAr.classList.add("active");
    btnEn.classList.remove("active");
  }

  localStorage.setItem("lang", lang);
}

// Load saved language
let savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

// Button events
btnEn.addEventListener("click", ()=> setLanguage("en"));
btnAr.addEventListener("click", ()=> setLanguage("ar"));

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
