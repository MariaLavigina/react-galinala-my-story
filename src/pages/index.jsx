import React, { useState, useEffect } from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer.jsx';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import { useNavigate } from "react-router-dom";
import texts from "../text/index.js";
import { useLocation } from "react-router-dom";
import ScrollDownButton from "../components/ScrollDownButton.jsx";




const Index = () => {
const [lang, setLang] = useState(() => {

  return localStorage.getItem("lang") || "ru"; 
});



    const navigate = useNavigate();
    const location = useLocation();





// Keep lang in localStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);





  // Set page title and meta description based on language
  useEffect(() => {
    const titles = {
    ru: `Галина Лавигина, моя история Алия из СССР в Израиль, 1990`,
    en: `Galina Lavigina: My Story – Immigration from the USSR to Israel, 1990`,
    he: `גלינה לביגינה, הסיפור שלי: עליה מברית המועצות לישראל, 1990`
    };

    const descriptions = {
    ru: `Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем.`,
    en: `This is the story of how a difficult choice turned into unexpected, incredible happiness.`,
    he: `זה סיפור על איך בחירה קשה הפכה לאושר בלתי צפוי ובלתי יאמן.`
    };

          document.title = titles[lang] || titles.en;

  // Update meta description
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", descriptions[lang] || descriptions.en);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = descriptions[lang] || descriptions.en;
    document.head.appendChild(newMeta);
  }
   }, [lang]);
  // Set page title and meta description based on language





  // ⭐ Fade-in effect
  const [opacity, setOpacity] = useState(0); 
  useEffect(() => {
    setOpacity(1); 
  }, []);



  // 🌟 Scroll to chapters if navigated from ContactMe or ThankYou
  useEffect(() => {
    if (location.state?.scrollToChapters) {
      const desktop = document.getElementById("chapters-desktop");
      const mobile = document.getElementById("chapters-mobile");
      const target = window.innerWidth >= 768 ? desktop : mobile;
      if (target) target.scrollIntoView({ behavior: "smooth" });
      // Clear state to prevent repeated scroll on refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);


  return (
    <>
    

      {/* ⭐ Wrap the entire page in a div for fade-in */}
    <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>




      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

  {/* ---------- Desktop-only Hero section ---------- */}

<div className="w-full hidden lg:block">  



     <div className="w-full aspect-[5083/2825]"> 
  <img
     src="/images/desktop-images/hero-index-desktop.webp"
    alt={texts[lang].alt.hero}
   className="w-full h-full object-cover block"
    loading="eager"
  />




<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`absolute top-[20%] right-[5%] px-6 ${lang === "he" ? "text-right" : "text-left"}`}
>
<h1 
  style={{ color: "#F6EDED" }}
  className="drop-shadow-[2px_2px_4px_black] font-semibold leading-snug"
>
  {lang === "ru" ? (
    <>
      <span className="block text-[clamp(40px,6vw,90px)]">Каждый выбирает</span>
      <span className="block text-[clamp(60px,8vw,120px)] mt-2 ml-[80px]">для себя</span>
    </>
  ) : lang === "en" ? (
    <>
      <span className="block text-[clamp(40px,6vw,90px)]">Everybody chooses</span>
      <span className="block text-[clamp(60px,8vw,120px)] mt-2 ml-[80px]">for themselves</span>
    </>
  ) : (
    <>
      <span className="block text-[clamp(40px,6vw,90px)]">כל אחד בוחר</span>
      <span className="block text-[clamp(60px,8vw,120px)] mt-2">את דרכו</span>
    </>
  )}
</h1>
</div>

</div>

  

  <div className="relative w-full -mt-[360px]">
    <div className="w-full aspect-[1918/2910]">
    <img
      src="/images/desktop-images/wave-index-entro.svg"
      alt="Lavender-colored wave background image"
      className="w-full h-full block"
       loading="eager"
    />
 </div>



<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white
    [&>h1]:text-[4.5vw]
    [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
    [&>p]:text-[1.25vw] [&>p]:mt-6
    md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
    ${lang === "ru" ? "[&>h2]:text-[10vw]" : "[&>h2]:text-[7vw]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>


  </div>
</div>
{/* -------- end of desktop-only hero -------- */}


{/* ---------- Tablet-only Hero section ---------- */}
<div className="hidden md:block lg:hidden w-full">  

 <div className="relative w-full aspect-[3467/2355]">
 <img
       src="/images/ipad-images/hero-index-ipad.webp"
       alt={texts[lang].alt.hero}
       className="w-full h-full object-cover block"
       loading="eager"
  />




{/* Text overlay – iPad / medium screens, right-side like desktop */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`absolute top-[14%] right-[5%] px-6 ${
    lang === "he" ? "text-right" : "text-left"
  }`}
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">
    {lang === "ru" ? (
      <>
        <span className="block text-[clamp(32px,5vw,70px)]">Каждый выбирает</span>
        <span className="block text-[clamp(32px,5vw,70px)] mt-2">для себя</span>
      </>
    ) : lang === "en" ? (
      <>
        <span className="block text-[clamp(32px,5vw,70px)]">Everybody chooses</span>
        <span className="block text-[clamp(32px,5vw,70px)] mt-2">for themselves</span>
      </>
    ) : (
      <>
        <span className="block text-[clamp(32px,5vw,70px)]">כל אחד בוחר</span>
        <span className="block text-[clamp(32px,5vw,70px)] mt-2">את דרכו</span>
      </>
    )}
  </h1>
</div>





</div>
  
  <div className="relative w-full -mt-[200px]">
      <div className="w-full aspect-[906/1928]">
    <img
      src="/images/ipad-images/first-wave-tablet.svg"
      alt="Lavender-colored wave background image"
       className="w-full h-full object-cover block"
       loading="eager"
    />
   </div>


   <div
  dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[85%] px-2 sm:px-4
    ${lang === "he" ? "font-rubik" : ""}
    [&>h1]:text-[5vw]
    [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
    [&>p]:text-[2.4vw] [&>p]:mt-6 leading-relaxed
    ${lang === "ru" 
      ? "[&>h2]:text-[11vw]" 
      : "[&>h2]:text-[7vw]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>
  </div>
</div>
{/* -------- end of tablet-only hero -------- */}


  





{/* ---------- Mobile-only Hero section ---------- */}
<div className="block md:hidden w-full">  
  <div className="w-full aspect-[2997/3942]">
 <img
        src="/images/mobile-images/hero-index-mobile.webp"
  alt={texts[lang].alt.hero}
  className="w-full h-full object-cover block"
   loading="eager" 
/>





{/* Text overlay – all languages, first line smaller, second line bigger, centered */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center px-6 w-[80%] sm:w-[60%] md:w-[50%]"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">

    {/* First line – slightly bigger */}
    <span className="block text-[clamp(22px,4vw,48px)] whitespace-nowrap">
      {lang === "ru" ? "Каждый выбирает" : lang === "en" ? "Everybody chooses" : "כל אחד בוחר"}
    </span>

    {/* Second line – bigger */}
    <span className="block text-[clamp(32px,6vw,72px)] mt-2 whitespace-nowrap">
      {lang === "ru" ? "для себя" : lang === "en" ? "for themselves" : "את דרכו"}
    </span>

  </h1>
</div>





</div>



  <div className="relative w-full -mt-[115px]">
    <div className="w-full aspect-[380/1699]">
    <img
      src="/images/mobile-images/wave-index-mobile.svg"
      alt="Lavender-colored wave background image"
      className="w-full h-full block"
      loading="eager" 
    />
    </div>

<div
  dir={lang === "he" ? "rtl" : "ltr"} // keep RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[95%] sm:w-[70%]

    [&>h1]:text-[clamp(23px,8vw,80px)]
    [&>h3]:text-[clamp(23px,6vw,35px)] 
    [&>h3]:mt-16 [&>h3]:mb-16

    [&>p]:text-[clamp(16px,5vw,25px)] 
    [&>p]:mt-8

    ${lang === "ru" 
      ? "[&>h2]:text-[clamp(65px,14vw,200px)]" 
      : "[&>h2]:text-[clamp(50px,12vw,140px)]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>

  </div>
</div>
{/* -------- end of mobile-only hero -------- */}





{/* ---------- Scroll Down Button ---------- */}
<ScrollDownButton
  targetId={window.innerWidth >= 768 ? "chapters-desktop" : "chapters-mobile"}
/>




{/* ---------- styles for text json: TextOneOnly ---------- */}
<section className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
  <div
    className={`max-w-[720px] mx-auto text-center ${lang === "he" ? "font-rubik" : ""}`}
    dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  >

    {/* H1 - quote */}
    <h1 className="text-white text-[22px] sm:text-[30px] md:text-[35px] lg:text-[45px] mb-8 italic">
      {texts[lang].h1}
    </h1>

    {/* 🌟 NEW: Conditional paragraph between H1 and H2 */}
  {texts[lang].pBetween && (
  <div className="mb-32 mt-32">
    {texts[lang].pBetween.map((paragraph, i) => (
      <p
        key={i}
        className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-6 leading-relaxed"
      >
        {paragraph}
      </p>
    ))}
  </div>
  )}

    {/* H2 */}
    <h2 className="text-white text-[50px] sm:text-[55px] md:text-[60px] lg:text-[65px] mb-8 mt-24">
      {texts[lang].h2}
    </h2>

    {/* Paragraphs before H3 (English only) */}
    {texts[lang].paragraphsBeforeH3 && (
      <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
        {texts[lang].paragraphsBeforeH3.map((p, i) => (
          <p key={i} className="mb-6">{p}</p>
        ))}
      </div>
    )}

    {/* H3 - intro */}
    <h3 className="text-white text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] mb-8">
      {texts[lang].h3}
    </h3>

    {/* Paragraphs - intro text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
      {texts[lang].paragraphs1.map((p, i) => (
        <p key={i} className="mb-8">{p}</p>
      ))}
    </div>

    {/* H3 - second heading */}
    <h3 className="text-white text-[28px] sm:text-[3px] md:text-[35px] lg:text-[40px] mb-8 mt-20">
      {texts[lang].h3_2}
    </h3>

    {/* Responsive photo */}
    <img
      src={texts[lang].photoDesktop}
       alt={texts[lang].alt.threeWomen}
      className="w-full h-auto hidden sm:block mb-16"
    />
    <img
      src={texts[lang].photoMobile}
       alt={texts[lang].alt.threeWomen}
      className="w-full h-auto block mb-16 sm:hidden"
    />

    {/* H4 - subheading */}
    <h4 className="text-white text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] mt-32 mb-6">
      {texts[lang].h4}
    </h4>

    {/* Paragraphs - story text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 mt-16 leading-relaxed">
      {texts[lang].paragraphs2.map((p, i) => (
        <p key={i} className="mb-6">{p}</p>
      ))}
    </div>

    {/* H4 - next section heading */}
    <h4 className="text-white text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] mt-24 mb-6">
      {texts[lang].h4_2}
    </h4>

    {/* Paragraphs - final chapter text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
      {texts[lang].paragraphs3.map((p, i) => (
        <p key={i} className="mb-6">{p}</p>
      ))}
    </div>

{/* -------- end of styles for text json ---------- */}







          

 


     {/* Navigation */}

<div className="flex justify-center gap-4 mt-24">
  {lang === "he" ? (
    <>
      {/* Hebrew: Forward on left, Backward on right */}
      <ForwardButton
        onClick={() => navigate("/why-i-left")}
        label="המשך"
        isRtl={true}
      />
   
    </>
  ) : (
    <>
      {/* LTR: Back on left, Forward on right */}
  
      <ForwardButton
        onClick={() => navigate("/why-i-left")}
        label={lang === "ru" ? "Вперёд" : "Next"}
        isRtl={false}
      />
    </>
  )}
</div>

    {/* Navigation */}


        </div>
      </section>


    




      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
<div id="chapters-desktop" >
  <ChapterSectionDesktop lang={lang} />
</div>

{/* ---------- Chapters Section (mobile only) ---------- */}
<div id="chapters-mobile" >
  <ChapterSectionMobile lang={lang} />
</div>





      

      {/* ---------- Footer ---------- */}
      <Footer lang={lang} />
      </div>
    </>
  );
};

export default Index;

