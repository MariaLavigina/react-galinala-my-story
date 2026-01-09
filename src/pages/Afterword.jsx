import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import textsAfterword from "../text/textsAfterword.js";
import TextSixthPage from "../components/TextSixthPage.jsx";
import ScrollDownButton from "../components/ScrollDownButton.jsx";



const Afterword = () => {

const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "ru"; 
});


const navigate = useNavigate();







  // ✅ Preload images properly inside useEffect
useEffect(() => {
  const imagesToPreload = [
    "/images/desktop-images/afterword-desktop.webp",
    "/images/mobile-images/afterword-mobile.webp",
  ];

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src; 
  });
}, []);

  // ✅ Preload images properly inside useEffect









  // Set page title and meta description based on language
  useEffect(() => {
    const titles = {
    ru: `Глава 1- почему я уехала`,
    en: `Chapter 1 – Why I Left`,
    he: `פרק 1 – למה עזבתי`
    };

    const descriptions = {
    ru: `Что заставило меня в почти 50 лет с 7-летней дочкой и 83-летней больной мамой оставить всё и уехать в незнакомую страну.`,
    en: `What made me, almost 50, leave everything behind and move to a foreign country with my 7-year-old daughter and my 83-year-old sick mother.`,
    he: `מה גרם לי, כמעט בגיל 50, לעזוב הכל ולעבור למדינה זרה עם בתי בת ה-7 ואמי החולה בת ה-83.`
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


  

  return (

    <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}> 




      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>







  {/* ---------- Desktop-only Hero section ---------- */}
<div className="w-full hidden lg:block">   

 <div className="relative w-full aspect-[2560/1440]">
  <img
     src="/images/desktop-images/afterword-desktop.webp"
    alt={textsAfterword[lang].alt.hero}
     className="w-full h-full object-cover block"
      loading="eager"
  />


  

{/* Text overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[16%] left-1/2 transform -translate-x-1/2 text-white whitespace-pre-line text-center"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] leading-tight font-semibold">

    {/* Year 2026 - smaller */}
    <span
      className={`block mt-4 ${
        lang === "he"
          ? "text-[clamp(50px,5vw,100px)]" // smaller for Hebrew
          : "text-[clamp(60px,6vw,120px)]" // slightly smaller for others
      }`}
    >
      2026
    </span>

    {/* Afterword / Posleslovie / אחרית דבר - bigger */}
    <span
      className={`block ${
        lang === "he"
          ? "text-[clamp(70px,7vw,140px)]" // bigger for Hebrew
          : "text-[clamp(80px,8vw,180px)]" // bigger for others
      }`}
    >
      {lang === "ru" ? "Послесловие" : lang === "en" ? "Afterword" : "אחרית דבר"}
    </span>

  </h1>
</div>


</div>




<div className="relative w-full -mt-[100px] sm:-mt-[150px] md:-mt-[200px] lg:-mt-[200px] xl:-mt-[280px]">

 <div className="w-full aspect-[1919/3117]">
    <img
      src="/images/desktop-images/entroPage-chapterOne-desktop.svg"
      alt="Wave"
       className="w-full h-full block"
        loading="eager"
    />
</div>


<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white
    [&>h1]:text-[3vw]
    [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
    [&>p]:text-[1.25vw] [&>p]:mt-6
    md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
    ${lang === "ru" ? "[&>h2]:text-[5vw] [&>h2]:mt-[25px] [&>h2]:mb-[45px]  " : "[&>h2]:text-[7vw] [&>h2]:mb-[45px] "}
  `}
>
  <TextSixthPage lang={lang} />
</div>


  </div>
</div>
{/* -------- end of desktop-only hero -------- */}








{/* ---------- Tablet-only Hero section ---------- */}

<div className="hidden md:block lg:hidden w-full">

  <div className="relative w-full aspect-[2560/1440]">
    <img
      src="/images/desktop-images/afterword-desktop.webp"
      alt={textsAfterword[lang].alt.hero}
      className="w-full h-full object-cover block"
      loading="eager"
    />
  

{/* iPad / Tablet Text Overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[12%] left-1/2 transform -translate-x-1/2 text-white whitespace-pre-line text-center max-w-[90%]"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] leading-tight font-semibold">

    {/* Year 2026 - slightly smaller for iPad */}
    <span
      className={`block mt-4 ${
        lang === "he"
          ? "text-[clamp(60px,6vw,120px)]" // Hebrew smaller
          : "text-[clamp(70px,7vw,140px)]" // Other languages
      }`}
    >
      2026
    </span>

    {/* Afterword / Posleslovie / אחרית דבר - bigger for iPad */}
    <span
      className={`block ${
        lang === "he"
          ? "text-[clamp(80px,8vw,160px)]" // bigger for Hebrew
          : "text-[clamp(90px,9vw,180px)]" // bigger for others
      }`}
    >
      {lang === "ru" ? "Послесловие" : lang === "en" ? "Afterword" : "אחרית דבר"}
    </span>

  </h1>
</div>

  </div>




  
  <div className="relative w-full -mt-[170px]">
        <div className="w-full aspect-[764/2209]">
    <img
      src="/images/ipad-images/way-i-left-ipad.svg"
      alt="Wave"
      className="w-full h-auto block"
      loading="eager"
    />
    </div>



   <div
  dir={lang === "he" ? "rtl" : "ltr"} 
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[85%] px-2 sm:px-4
    ${lang === "he" ? "font-rubik" : ""}
    [&>h1]:text-[4.5vw]
    [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
    [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed
    ${lang === "ru" 
      ? "[&>h2]:text-[7vw]  [&>h2]:mt-[25px]  [&>h2]:mb-[35px]" 
      : "[&>h2]:text-[7vw] [&>h2]:mt-[25px]  [&>h2]:mb-[35px]"}
  `}
>
  <TextSixthPage lang={lang} />
</div>
  </div>
</div>
{/* -------- end of tablet-only hero -------- */}


  





{/* ---------- Mobile-only Hero section ---------- */}
<div className="block md:hidden w-full ">
  <div className="relative w-full aspect-[560/801]">
    <img
      src="/images/mobile-images/afterword-mobile.webp"
      alt={textsAfterword[lang].alt.hero}
      className="w-full h-full object-cover block"
      loading="eager"
    />

    {/* Centered overlay */}
    <div
      dir={lang === "he" ? "rtl" : "ltr"}
      className="absolute top-[12%] left-1/2 transform -translate-x-1/2 text-center text-white max-w-[90%] px-4"
    >
      <h1 className="drop-shadow-[2px_2px_4px_black] leading-tight font-semibold">

        {/* Year 2026 */}
        <span
          className={`block mt-1 ${
            lang === "he"
              ? "text-[clamp(36px,9vw,60px)]" // smaller for Hebrew
              : "text-[clamp(40px,10vw,70px)]" // other languages
          }`}
        >
          2026
        </span>

        {/* Afterword text */}
        <span
          className={`block mt-1 ${
            lang === "he"
              ? "text-[clamp(40px,10vw,70px)]" // bigger than year
              : "text-[clamp(44px,11vw,75px)]" // bigger than year
          }`}
        >
          {lang === "ru" ? "Послесловие" : lang === "en" ? "Afterword" : "אחרית דבר"}
        </span>

      </h1>
    </div>
  </div>



  <div className="relative w-full -mt-[150px]">
     <div className="w-full aspect-[390/2439]">
    <img
      src="/images/mobile-images/whyILeft-entro-mobile.svg"
      alt="Wave"
       className="w-full h-full block"
       loading="eager"
    />
</div>



<div
  dir={lang === "he" ? "rtl" : "ltr"} 
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[95%] sm:w-[70%]

    [&>h1]:text-[clamp(23px,8vw,80px)]
    [&>h3]:text-[clamp(23px,6vw,35px)] 
    [&>h3]:mt-16 [&>h3]:mb-16

    [&>p]:text-[clamp(16px,5vw,25px)] 
    [&>p]:mt-8

    ${lang === "ru" 
      ? "[&>h2]:text-[clamp(50px,12vw,140px)] [&>h2]:mt-[25px]" 
      : "[&>h2]:text-[clamp(50px,12vw,140px)] [&>h2]:mt-[25px]"}
  `}
>
  <TextSixthPage lang={lang} />
</div>

  </div>
</div>
{/* -------- end of mobile-only hero -------- */}









{/* ---------- Scroll Down Button ---------- */}
<ScrollDownButton
  targetId={window.innerWidth >= 768 ? "chapters-desktop" : "chapters-mobile"}
/>







{/* Text Section */}
<section
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ${lang === "he" ? "font-rubik" : ""}`}
>
  <div className="max-w-[720px] mx-auto text-white">

    {/* First H1 + Paragraphs */}
    <div className="mb-12">
      {textsAfterword[lang].h1 && (
        <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
          {textsAfterword[lang].h1}
        </h1>
      )}

      {textsAfterword[lang].paragraphs1.map((p, i) => (
        <p key={i} className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-6 leading-relaxed">
          {p}
        </p>
      ))}
    </div>

    {/* Image + text sections */}
    {textsAfterword[lang].imageTextSections.map((section, i) => (
      <div key={i} className="mb-12 ">
        {/* Desktop */}
        {section.desktopSrc && (
          <>
            <img src={section.desktopSrc} alt={section.alt} className="w-full h-auto mt-[6px] hidden md:block" />
            {section.text && (
              <p className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                {section.text}
              </p>
            )}
          </>
        )}

        {/* Mobile */}
        {section.mobileSrc && (
          <>
            <img src={section.mobileSrc} alt={section.alt} className="w-full h-auto mb-4 block md:hidden" />
            {section.text && (
              <p className="block md:hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                {section.text}
              </p>
            )}
          </>
        )}

        {/* Optional H4 + Paragraphs */}
        {section.textBlock && (
          <div className="mb-8 text-white">
            <h4 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8 font-semibold">
              {section.textBlock.h4}
            </h4>
            {section.textBlock.paragraphs.map((p, idx) => (
              <p key={idx} className="mb-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    ))}





{/* Navigation */}
<div className="flex justify-center gap-4 mt-24">
  {lang === "he" ? (
    <>
      {/* Hebrew: Backward on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/mothers-story")}
        label="חזרה"
        isRtl={true}
      />
      <ForwardButton
        onClick={() => navigate("/")}
        label="דף הבית"
        isRtl={true}
      />
    </>
  ) : (
    <>
      {/* LTR: Back on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/mothers-story")}
        label={lang === "ru" ? "Назад" : "Back"}
        isRtl={false}
      />
      <ForwardButton
        onClick={() => navigate("/")}
        label={lang === "ru" ? "Главная" : "home"}
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

    <Footer lang={lang} />
      </div>

  );
};

export default Afterword;






