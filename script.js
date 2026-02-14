// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// APPLY SAVED THEME
if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light");
  document.body.classList.remove("dark");
} else {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
}

// LANGUAGE SWITCH
const langEn = document.getElementById("langEn");
const langAr = document.getElementById("langAr");
const aboutText = document.getElementById("aboutText");

const aboutContent = {
  en: `<p>Hello, I'm Ahmed Rashdan, a professional data scientist from Egypt, specializing in data analysis and AI for space tech and satellites.</p>
       <p>My journey began at an early age with video games and curiosity about digital systems, leading me to start programming early and build a strong foundation in AI and data science.</p>
       <p>I have worked on projects involving satellite data analysis, visualization, and AI model development for orbital systems and remote sensing, transforming complex space data into actionable insights.</p>
       <p>My USP: I combine advanced data science skills with deep knowledge of space technologies, making me capable of delivering precise and reliable solutions in highly technical environments.</p>`,
  ar: `<p>مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.</p>
       <p>بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي.</p>
       <p>عملت على مشاريع في تحليل بيانات الأقمار الصناعية، تصورها، وتطوير نماذج ذكية مرتبطة بالأنظمة المدارية والاستشعار عن بُعد، حيث أستطيع تحويل البيانات الفضائية المعقدة إلى رؤى قابلة للتنفيذ.</p>
       <p>ما يميزني هو الجمع بين المهارات المتقدمة في علوم البيانات والفهم العميق لتقنيات الفضاء، مما يمكنني من تقديم حلول دقيقة وموثوقة في بيئات تقنية عالية التعقيد.</p>`
};

function setLanguage(lang){
  document.body.dir = lang==="ar"?"rtl":"ltr";
  aboutText.innerHTML = aboutContent[lang];
  langEn.classList.toggle("active", lang==="en");
  langAr.classList.toggle("active", lang==="ar");
}
langEn.onclick = () => setLanguage("en");
langAr.onclick = () => setLanguage("ar");
setLanguage("en");

// SCROLL REVEAL
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add("active");
  });
});

// HERO PARALLAX
window.addEventListener("mousemove", e => {
  document.querySelectorAll(".parallax-layer").forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
