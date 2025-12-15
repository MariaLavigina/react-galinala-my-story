import React, { useState, useEffect } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import Footer from "../components/Footer.jsx";
import textsDecisionToLeave from "../text/textsDecisionToLeave";
import { useNavigate } from "react-router-dom";

const DecisionToLeave = () => {


const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "ru"; 
});

  const navigate = useNavigate(); 

React.useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);


  const content = textsDecisionToLeave[lang];
  const isRTL = lang === "he"; 


  // ⭐ Fade-in effect
  const [opacity, setOpacity] = useState(0); 
  useEffect(() => {
    setOpacity(1); 
  }, []);


  return (



        <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>
  
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

      {/* Main content section */}
<section
  dir={isRTL ? "rtl" : "ltr"}
  className={`px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ${isRTL ? "font-rubik" : ""}`}
>
  <div className="max-w-[720px] mx-auto">
    <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
      {content.h1}
    </h1>

          {/* First paragraphs */}
          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            {content.paragraphs1.map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>

          {/* Loop through each section of content */}
{content.sections.map((section, idx) => {
  if (section.type === "paragraphs") {
    return (
      <div key={idx} className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-[16px]">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="mb-8">{p}</p>
        ))}

        {/* Render explanation only for English and Hebrew, italic with top margin */}
        {section.explanation && (lang === "en" || lang === "he") && (
          <p
            className="text-white mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
            style={{ fontStyle: "italic" }} 
          >
            {section.explanation[lang]}
          </p>
        )}
      </div>
    );
  }

            // Section type: image
            if (section.type === "image") {
              // Decide wrapper class based on fullWidth flag and RTL
              const wrapperClass = section.fullWidth
                ? `${isRTL ? "relative right-1/2 translate-x-1/2" : "relative left-1/2 -translate-x-1/2"} w-screen mt-[48px] text-center`
                : "max-w-[720px] mx-auto mt-[48px] text-center";

              return (
                <div key={idx} className={wrapperClass}>
                  {/* Desktop image */}
                  {section.desktopSrc && (
                    <img
                      src={section.desktopSrc}
                      alt={section.alt}
                      className={`w-full h-auto mt-[6px]  ${section.mobileSrc ? "hidden sm:block" : "block"}`}
                    />
                  )}
                  {/* Mobile image */}
                  {section.mobileSrc && (
                    <img src={section.mobileSrc} alt={section.alt} className="w-full h-auto mb-4 block sm:hidden" />
                  )}
                  {/* Optional caption */}
                  {section.text && (
                    <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8">{section.text}</p>
                  )}
                </div>
              );
            }

            // Section type: h4 heading
            if (section.type === "h4") {
              return (
                <h4 key={idx} className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">{section.text}</h4>
              );
            }

            // Section type: centered h4 heading
            if (section.type === "h4-center") {
              return (
                <div key={idx} className="max-w-[720px] mx-auto mt-[48px] text-center">
                  <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">{section.text}</h4>
                </div>
              );
            }

            return null; // Fallback for unknown section types
          })}

  






                 {/* Navigation */}
             
             <div className="flex justify-center gap-4 mt-24">
               {lang === "he" ? (
                 <>
                   {/* Hebrew: Forward on left, Backward on right */}
                   <ForwardButton
                     onClick={() => navigate("/our-journey")}
                     label="המשך"
                     isRtl={true}
                   />
                   <BackwardButton
                     onClick={() => navigate("/why-i-left")}
                     label="חזרה"
                     isRtl={true}
                   />
                 </>
               ) : (
                 <>
                   {/* LTR: Back on left, Forward on right */}
                   <BackwardButton
                     onClick={() => navigate("/why-i-left")}
                     label={lang === "ru" ? "Назад" : "Back"}
                     isRtl={false}
                   />
                   <ForwardButton
                     onClick={() => navigate("/our-journey")}
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

      {/* Footer */}
     <Footer lang={lang} />
      </div>
  
  );
};

export default DecisionToLeave;
