import React, { useState } from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer.jsx';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import { useNavigate } from "react-router-dom";
import texts from "../text/index.js";


const Index = () => {
  const [lang, setLang] = useState("ru"); // default Russian
    const navigate = useNavigate(); // for navigation 

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

  {/* ---------- Desktop-only Hero section ---------- */}
<div className="w-full hidden lg:block">


    {/* logic for hero desktop */}
  <img
    src={
      lang === "ru"
        ? "images/desktop-images/hero-ru-desktop.webp"
        : lang === "en"
        ? "images/desktop-images/hero-en-desktop.webp"
        : "images/desktop-images/hero-he-desktop.webp"
    }
    alt="Hero"
    className="w-full h-auto block"
  />


  

  <div className="relative w-full -mt-[380px]">
    <img
      src="images/desktop-images/wave-index-entro.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

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


  {/* logic for hero tablet */}
  <img
    src={
      lang === "ru"
        ? "images/ipad-images/hero-ru-ipad.webp"
        : lang === "en"
        ? "images/ipad-images/hero-en-ipad.jpg"
        : "images/ipad-images/hero-he-ipad.jpg"
    }
    alt="Hero"
    className="w-full h-auto block"
  />



  
  <div className="relative w-full -mt-[200px]">
    <img
      src="images/ipad-images/first-wave-tablet.svg"
      alt="Wave"
      className="w-full h-auto block"
    />
   <div
  dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[85%] px-2 sm:px-4
    ${lang === "he" ? "font-rubik" : ""}
    [&>h1]:text-[5vw]
    [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
    [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed
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
  <img
    src="images/mobile-images/hero-mobile.jpg"
    alt="Hero"
    className="w-full h-auto block"
  />

  <div className="relative w-full -mt-[115px]">
    <img
      src="images/mobile-images/wave-index-mobile.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

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
      alt="------------"
      className="w-full h-auto hidden sm:block mb-16"
    />
    <img
      src={texts[lang].photoMobile}
      alt="--------------"
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







          

        <div className="flex justify-center mt-24">
            <ForwardButton onClick={() => navigate("/why-i-left")} />
        </div>

        </div>
      </section>

      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
      <ChapterSectionDesktop />

      {/* ---------- Chapters Section (mobile only) ---------- */}
      <ChapterSectionMobile />

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default Index;

