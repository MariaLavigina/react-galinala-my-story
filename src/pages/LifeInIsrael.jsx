import React, { useState } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import { useNavigate } from "react-router-dom";
import textsLifeInIsrael from "../text/textsLifeInIsrael.js";

const LifeInIsrael = () => {
  const [lang, setLang] = useState("ru");
  const navigate = useNavigate();

  const textForLang = textsLifeInIsrael[lang] || textsLifeInIsrael["ru"];

  return (
    <>
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

          <div className="flex justify-center gap-4 mt-24">
            <BackwardButton onClick={() => navigate("/first-steps")} />
            <ForwardButton onClick={() => navigate("/galina-grew")} />
        
          </div>
        </div>
      </section>

      <ChapterSectionDesktop />
      <ChapterSectionMobile />
      <Footer />
    </>
  );
};

export default LifeInIsrael;