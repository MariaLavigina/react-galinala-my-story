import React, { useState, useEffect } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import { useNavigate } from "react-router-dom";
import textsLifeInIsrael from "../text/textsLifeInIsrael.js";
import ScrollDownButton from "../components/ScrollDownButton.jsx";

const LifeInIsrael = () => {


const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "ru"; // default Russian
});

  const navigate = useNavigate();

React.useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);



    // Set page title and meta description based on language
    useEffect(() => {
      const titles = {
      ru: `Глава 2 – Новая жизнь и хорошие люди на пути`,
      en: `Chapter 2 – A New Life and Good People Along the Way`,
      he: `פרק 2 – חיים חדשים ואנשים טובים בהמצע הדרך`
      };
  
      const descriptions = {
      ru: `новый дом и растущая уверенность, что уехать было правильным решением.`,
      en: `A new home, and the growing certainty that leaving was the right choice.`,
      he: `בית חדש והביטחון ההולך וגדל שעזיבה הייתה הבחירה הנכונה.`
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



  const textForLang = textsLifeInIsrael[lang] || textsLifeInIsrael["ru"];

  return (


  <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>

      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

      <section
        dir={lang === "he" ? "rtl" : "ltr"}
        className={`px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ${lang === "he" ? "font-rubik" : ""}`}
      >
        <div className="max-w-[720px] mx-auto text-white">
          {textForLang.map((block, i) => (
            <div key={i} className="mb-12">
              {block.h1 && (
                <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
                  {block.h1}
                </h1>
              )}
          {block.h4 && (
  <h4 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8">
    {block.h4}
  </h4>
)}

{/* Sidenote goes here, only for he or en */}
{block.sidenote && (lang === "he" || lang === "en") && (
  <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed mt-12 mb-12">
    {block.sidenote}
  </p>
)}

{block.text?.map((p, idx) => (
  <p
    key={idx}
    className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-6 leading-relaxed"
  >
    {p}
  </p>
))}
              
              {block.image && (
                Array.isArray(block.image)
                  ? block.image.map((img, idx) => (
                      <div key={idx} className={`mb-12 ${lang === "he" ? "text-right" : "text-left"}`}>
                        {img.desktopSrc && (
                          <>
                            <img src={img.desktopSrc} alt={img.alt} className="w-full h-auto mt-[6px] hidden md:block" />
                            {img.textDesktop && (
                              <p className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                                {img.textDesktop}
                              </p>
                            )}
                          </>
                        )}
                        {img.mobileSrc && (
                          <>
                            <img src={img.mobileSrc} alt={img.alt} className="w-full h-auto mb-4 block md:hidden" />
                            {img.textMobile && (
                              <p className="block md:hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                                {img.textMobile}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    ))
                  : null
              )}
            </div>
          ))}

    



         {/* Navigation */}
<div className="flex justify-center gap-4 mt-24">
  {lang === "he" ? (
    <>
      {/* Hebrew: Forward on left, Backward on right */}
      <ForwardButton
        onClick={() => navigate("/galina-grew")}
        label="המשך"
        isRtl={true}
      />
      <BackwardButton
        onClick={() => navigate("/first-steps")}
        label="חזרה"
        isRtl={true}
      />
    </>
  ) : (
    <>
      {/* LTR: Back on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/first-steps")}
        label={lang === "ru" ? "Назад" : "Back"}
        isRtl={false}
      />
      <ForwardButton
        onClick={() => navigate("/galina-grew")}
        label={lang === "ru" ? "Вперёд" : "Next"}
        isRtl={false}
      />
    </>
  )}
</div>
{/* Navigation */}




{/* ---------- Scroll Down Button ---------- */}
<ScrollDownButton
  targetId={window.innerWidth >= 768 ? "chapters-desktop" : "chapters-mobile"}
/>





        </div>
      </section>

      <div id="chapters-desktop">
  <ChapterSectionDesktop lang={lang} />
</div>

<div id="chapters-mobile">
  <ChapterSectionMobile lang={lang} />
</div>

     <Footer lang={lang} />
   </div>
  );
};

export default LifeInIsrael;