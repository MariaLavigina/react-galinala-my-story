import React, { useState, useEffect } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextSecondPage from "../components/TextSecondPage.jsx";
import textsWeArrived from "../text/textsWeArrived.js";
import { useNavigate } from "react-router-dom";
import ScrollDownButton from "../components/ScrollDownButton.jsx";

const WeArrived = () => {

  

const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "ru"; 
});

  const navigate = useNavigate();

React.useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);




    // Set page title and meta description based on language
    useEffect(() => {
      const titles = {
      ru: `Глава 2 - Прилет в Израиль`,
      en: `Chapter 2 – Our Arrival in Israel`,
      he: `פרק 2 – ההגעה שלנו לישראל`


      };
  
      const descriptions = {
      ru: `Прилетели мы в Израиль поздним вечером 17 июня 1990 года. Израиль встречал нас улыбками, детишек одарили сладостями.`,
      en: `We arrived in Israel late in the evening on June 17, 1990. Israel welcomed us with smiles, and the children were given sweets.`,
      he: `נחתנו בישראל מאוחר בערב, ב-17 ביוני 1990. ישראל קיבלה אותנו בחיוכים, והילדים קיבלו ממתקים.`
      };
  
        document.title = titles[lang] || titles.en;
  

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




  // ⚡ FIX: fallback to Russian if lang key doesn't exist
  const textForLang = textsWeArrived[lang] || textsWeArrived["ru"];
return (


      <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>

    <Navbar lang={lang} setLang={setLang} />
    <div className="h-20"></div>



    {/* Desktop-only Hero */}
    <div className="w-full hidden lg:block">



      
    <img
  src={
    lang === "ru"
      ? "/images/desktop-images/ru-chapter-02-desktop.webp"
      : lang === "en"
      ? "/images/desktop-images/en-chapter-02-desktop.webp"
      : "/images/desktop-images/he-chapter-02-desktop.webp"
  }
  alt={textForLang?.alt?.hero || "Hero"}
  className="w-full h-auto block"
/>


      
      <div className="relative w-full -mt-[260px]">
        <img
          src="/images/desktop-images/entroChapter-arrivedToIsrael-desktop.svg"
          alt="Wave"
          className="w-full h-auto block"
        />














        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[4vw]
            [&>h2]:text-[6vw]
            [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
            [&>p]:text-[1.25vw] [&>p]:mt-6
            md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
          `}
        >
          <TextSecondPage lang={lang} />
        </div>
      </div>
    </div>

    {/* Tablet-only Hero */}
    <div className="hidden md:block lg:hidden w-full">
      <img
        src="/images/mobile-images/chapter02-arrived-to-israel-mobile.webp"
        alt="Hero"
        className="w-full h-auto block"
      />
      <div className="relative w-full -mt-[120px]">
        <img
          src="/images/ipad-images/we-arrived.svg"
          alt="Wave"
          className="w-full h-auto block"
        />
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
            w-[85%] px-2 sm:px-4
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[5vw] [&>h2]:text-[7vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
            [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed
          `}
        >
          <TextSecondPage lang={lang} />
        </div>
      </div>
    </div>

    {/* Mobile-only Hero */}
    <div className="block md:hidden w-full">
      <img
        src="/images/mobile-images/chapter02-arrived-to-israel-mobile.webp"
        alt="Hero"
        className="w-full h-auto block"
      />
      <div className="relative w-full -mt-[70px]">
        <img
          src="/images/mobile-images/we-arrived.svg"
          alt="Wave"
          className="w-full h-auto block"
        />
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            w-[95%] sm:w-[98%]
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[clamp(23px,9vw,60px)]
            [&>h2]:text-[clamp(40px,7vw,45px)]
            [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16
            [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8
          `}
        >
          <TextSecondPage lang={lang} />
        </div>
      </div>
    </div>






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

    {textForLang.map((block, i) => {
      return (
        <div key={i} className="mb-12">

          {/* H1 */}
          {block.h1 && (
            <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
              {block.h1}
            </h1>
          )}

          {/* H4 */}
          {block.h4 && (
            <h4 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8 font-semibold">
              {block.h4}
            </h4>
          )}

          {/* Paragraphs */}
          {block.text?.map((p, idx) => (
            <p key={idx} className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-6 leading-relaxed">
              {p}
            </p>
          ))}

          {/* Images */}
          {block.image && (
            Array.isArray(block.image)
              ? block.image.map((img, idx) => (
                  <div key={idx} className={`mb-12 ${lang === "he" ? "text-right" : "text-left"}`}>
                    {/* Desktop */}
                    {img.desktopSrc && (
                      <>
                        <img 
                          src={img.desktopSrc} 
                          alt={img.alt} 
                          className="w-full h-auto mt-[6px] hidden md:block" 
                        />
                        {img.textDesktop && (
                          <p className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                            {img.textDesktop}
                          </p>
                        )}
                      </>
                    )}

                    {/* Mobile */}
                    {img.mobileSrc && (
                      <>
                        <img 
                          src={img.mobileSrc} 
                          alt={img.alt} 
                          className="w-full h-auto mb-4 block md:hidden" 
                        />
                        {img.textMobile && (
                          <p className="block md:hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                            {img.textMobile}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))
              : (
                <div className={`mb-12 ${lang === "he" ? "text-right" : "text-left"}`}>
                  {/* Desktop */}
                  {block.image.desktopSrc && (
                    <>
                      <img 
                        src={block.image.desktopSrc} 
                        alt={block.image.alt} 
                        className="w-full h-auto mt-[6px] hidden md:block" 
                      />
                      {block.image.textDesktop && (
                        <p className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                          {block.image.textDesktop}
                        </p>
                      )}
                    </>
                  )}

                  {/* Mobile */}
                  {block.image.mobileSrc && (
                    <>
                      <img 
                        src={block.image.mobileSrc} 
                        alt={block.image.alt} 
                        className="w-full h-auto mb-4 block md:hidden" 
                      />
                      {block.image.textMobile && (
                        <p className="block md:hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                          {block.image.textMobile}
                        </p>
                      )}
                    </>
                  )}
                </div>
              )
          )}

        </div>
      );
    })}

 





{/* Navigation */}

<div className="flex justify-center gap-4 mt-24">
  {lang === "he" ? (
    <>
      {/* Hebrew: Forward on left, Backward on right */}
      <ForwardButton
        onClick={() => navigate("/first-steps")}
        label="המשך"
        isRtl={true}
      />
      <BackwardButton
        onClick={() => navigate("/our-journey")}
        label="חזרה"
        isRtl={true}
      />
    </>
  ) : (
    <>
      {/* LTR: Back on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/our-journey")}
        label={lang === "ru" ? "Назад" : "Back"}
        isRtl={false}
      />
      <ForwardButton
        onClick={() => navigate("/first-steps")}
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
<Footer lang={lang} />


  </div>
  );
};

export default WeArrived;
