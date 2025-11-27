import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import TextFirstPage from "../components/TextFirstPage.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import textsWhyILeft from "../text/textsWhyILeft.js";



const WhyILeft = () => {
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
        ? "images/desktop-images/chapter01-desktop.webp"
        : lang === "en"
        ? "images/desktop-images/chapter01-desktop.webp"
        : "images/desktop-images/chapter01-desktop.webp"
    }
    alt="Hero"
    className="w-full h-auto block"
  />


  

<div className="relative w-full -mt-[100px] sm:-mt-[150px] md:-mt-[200px] lg:-mt-[200px] xl:-mt-[280px]">


    <img
      src="images/desktop-images/entroPage-chapterOne-desktop.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

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
  <TextFirstPage lang={lang} />
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
        ? "images/mobile-images/chapter01-why-i-left-mobile.webp"
        : lang === "en"
        ? "images/mobile-images/chapter01-why-i-left-mobile.webp"
        : "images/mobile-images/chapter01-why-i-left-mobile.webp"
    }
    alt="Hero"
    className="w-full h-auto block"
  />



  
  <div className="relative w-full -mt-[200px]">
    <img
      src="images/ipad-images/entroChapters-firstPage-ipad.svg"
      alt="Wave"
      className="w-full h-auto block"
    />
   <div
  dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[85%] px-2 sm:px-4
    ${lang === "he" ? "font-rubik" : ""}
    [&>h1]:text-[3.5vw]
    [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
    [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed
    ${lang === "ru" 
      ? "[&>h2]:text-[7vw]  [&>h2]:mt-[25px]  [&>h2]:mb-[35px]" 
      : "[&>h2]:text-[7vw] [&>h2]:mt-[25px]  [&>h2]:mb-[35px]"}
  `}
>
  <TextFirstPage lang={lang} />
</div>
  </div>
</div>
{/* -------- end of tablet-only hero -------- */}


  





{/* ---------- Mobile-only Hero section ---------- */}
<div className="block md:hidden w-full">
  <img
    src="images/mobile-images/chapter01-why-i-left-mobile.webp"
    alt="Hero"
    className="w-full h-auto block"
  />

  <div className="relative w-full -mt-[115px]">
    <img
      src="images/mobile-images/wave-whyILeft-entro-mobile.svg"
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
      ? "[&>h2]:text-[clamp(50px,12vw,140px)] [&>h2]:mt-[25px]" 
      : "[&>h2]:text-[clamp(50px,12vw,140px)] [&>h2]:mt-[25px]"}
  `}
>
  <TextFirstPage lang={lang} />
</div>

  </div>
</div>
{/* -------- end of mobile-only hero -------- */}









      {/* Text Section */}

      
  <section
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`
    px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]
    ${lang === "he" ? "font-rubik text-right" : ""}
  `}
>
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
            {textsWhyILeft[lang].h1}
          </h1>
          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            {textsWhyILeft[lang].paragraphs1.map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>




{textsWhyILeft[lang].imageTextSections.map((section, i) => (
  <div key={i} className="max-w-[720px] mx-auto mt-[48px] px-4">

    {/* Desktop Section */}
    {section.desktopSrc && (
      <div className="hidden sm:block">
        <img
          src={section.desktopSrc}
          alt={section.alt}
          className="w-full h-auto mb-4"
        />
        {section.text && (
          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8">
            {section.text}
          </p>
        )}
      </div>
    )}

    {/* Mobile Section */}
    {section.mobileSrc && (
      <div className="sm:hidden">
        <img
          src={section.mobileSrc}
          alt={section.alt}
          className="w-full h-auto mb-4"
        />
        {section.text && (
          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8">
            {section.text}
          </p>
        )}
      </div>
    )}

    {/* Optional H4 + 5 Paragraphs block */}
    {section.textBlock && (
      <div className="mb-8 text-white">
        <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8 font-semibold">
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






          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-24">
            <BackwardButton onClick={() => navigate("/")}/>
            <ForwardButton onClick={() => navigate("/decision-to-leave")}/>
          </div>











        </div>
      </section>

      {/* Chapters */}
      <ChapterSectionDesktop />
      <ChapterSectionMobile />

      <Footer />
    </>
  );
};

export default WhyILeft;
