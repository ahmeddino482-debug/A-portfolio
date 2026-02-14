// -----------------------
// Dark / Light Mode Toggle
// -----------------------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light"); // toggle light class
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Apply stored theme on load
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
} else {
  document.body.classList.add("light");
}

// -----------------------
// Language Toggle EN/AR
// -----------------------
const langEn = document.getElementById("langEn");
const langAr = document.getElementById("langAr");
const aboutText = document.getElementById("aboutText");

// About Section Content
const aboutContent = {
  en: `
    <p>Hello, I'm Ahmed Rashdan, a professional data scientist from Egypt, specialized in data analysis and AI in the field of space technologies and satellites.</p>
    <p>My journey in technology began at an early age with a love for video games and curiosity about how digital systems work, which pushed me to learn programming early and build a strong foundation in data science and AI. As my career evolved, I focused on integrating data science with space technology, analyzing orbital systems and remote sensing data.</p>
    <p>I have worked on projects involving data analysis, visualization, and AI models related to satellite data and space environments, with a special ability to handle complex space datasets and convert them into actionable solutions supporting scientific research and technical development.</p>
    <p><strong>Why work with me?</strong></p>
    <p>What sets me apart is the combination of advanced data science skills with a deep understanding of space technologies, allowing me to efficiently handle specialized space projects, not just traditional ones. I have experience analyzing satellite data, GPS systems, and space weather, enabling me to deliver accurate and reliable solutions in high-tech environments.</p>
    <p>I focus on your goals, turning data into actionable insights to support innovation and decision-making. I adapt quickly to modern tools, work professionally under pressure, and commit to quality and deadlines.</p>
    <p>My goal is to build long-term partnerships based on trust, technical excellence, and continuous development.</p>
    <p>If you are looking for a data scientist with real experience in space technologies who turns space data into tangible value, I am ready to work with you.</p>
  `,
  ar: `
    <p>مرحبًا، أنا أحمد رشدان، عالم بيانات محترف من مصر، متخصص في تحليل البيانات والذكاء الاصطناعي في مجال تقنيات الفضاء والأقمار الصناعية.</p>
    <p>بدأت رحلتي في مجال التكنولوجيا في سن مبكرة من خلال حبي لألعاب الفيديو وفضولي لفهم كيفية عمل الأنظمة الرقمية، مما دفعني لتعلّم البرمجة مبكرًا وبناء أساس قوي في علوم البيانات والذكاء الاصطناعي. ومع تطور مسيرتي، ركّزت على دمج علوم البيانات مع تكنولوجيا الفضاء وتحليل بيانات الأنظمة المدارية والاستشعار عن بُعد.</p>
    <p>عملت على مشاريع في تحليل البيانات، تصورها، وتطوير نماذج ذكية مرتبطة ببيانات الأقمار الصناعية والبيئة الفضائية، حيث أمتلك قدرة مميزة على التعامل مع البيانات الفضائية المعقدة وتحويلها إلى حلول عملية تدعم البحث العلمي والتطوير التقني.</p>
    <p><strong>لماذا تختار العمل معي؟</strong></p>
    <p>ما يميزني هو الجمع بين المهارات المتقدمة في علوم البيانات والفهم العميق لتقنيات الفضاء، مما يمكّنني من العمل بكفاءة على المشاريع الفضائية المتخصصة، وليس فقط المشاريع التقليدية. أمتلك خبرة في تحليل بيانات الأقمار الصناعية، أنظمة الملاحة (GPS)، والطقس الفضائي، مما يجعلني قادرًا على تقديم حلول دقيقة وموثوقة في بيئات تقنية عالية التعقيد.</p>
    <p>أركز على أهدافك، وأحوّل البيانات إلى رؤى قابلة للتنفيذ تدعم الابتكار واتخاذ القرار. كما أتميز بسرعة التكيّف مع الأدوات الحديثة، والعمل باحترافية تحت الضغط، والالتزام بالجودة والمواعيد.</p>
    <p>هدفي هو بناء شراكات طويلة الأمد قائمة على الثقة، والتميّز التقني، والتطوير المستمر.</p>
    <p>إذا كنت تبحث عن عالم بيانات يمتلك خبرة حقيقية في تقنيات الفضاء، ويحوّل البيانات الفضائية إلى قيمة ملموسة، فأنا مستعد للعمل.</p>
  `
};

// Set language function
function setLanguage(lang){
  if(lang === 'en'){
    document.documentElement.setAttribute('dir','ltr');
    aboutText.innerHTML = aboutContent.en;
    langEn.classList.add('active');
    langAr.classList.remove('active');
  } else {
    document.documentElement.setAttribute('dir','rtl');
    aboutText.innerHTML = aboutContent.ar;
    langAr.classList.add('active');
    langEn.classList.remove('active');
  }
}

// Event listeners
langEn.addEventListener('click', () => setLanguage('en'));
langAr.addEventListener('click', () => setLanguage('ar'));

// Initialize
setLanguage('en');

// -----------------------
// Scroll Reveal Animation
// -----------------------
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const windowH = window.innerHeight;
    if(top < windowH - 50) el.classList.add("active");
  });
});

// -----------------------
// Hero Parallax Layers
// -----------------------
window.addEventListener("mousemove", e => {
  const layers = document.querySelectorAll(".parallax-layer");
  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.02;
    const x = (window.innerWidth - e.pageX*speed)/100;
    const y = (window.innerHeight - e.pageY*speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
