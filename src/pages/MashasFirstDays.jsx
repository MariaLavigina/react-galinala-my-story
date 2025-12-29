import React, { useState, useEffect } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextForthPage from "../components/TextForthPage.jsx";
import textsMashasFirstDays from "../text/textsMashasFirstDays.js";
import { useNavigate } from "react-router-dom";
import ScrollDownButton from "../components/ScrollDownButton.jsx";


const MashasFirstDays = () => {



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
      ru: `Глава 3 -  История Маши: первые дни в Израиле`,
      en: `Chapter 3 – Masha’s Story: The First Days in Israel`,
      he: `פרק 3 – הסיפור של מַאֲשֶׁה: הימים הראשונים בישראל`
      };
  
      const descriptions = {
      ru: `Жевательная резинка, чипсы, мочалки, война и походы в кино`,
      en: `Chewing gum, chips, sponges, the war, and trips to the cinema`,
      he: `מסטיקים, צ'יפס, ספוגים, המלחמה והביקורים בקולנוע`
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



  const textForLang = textsMashasFirstDays[lang] || textsMashasFirstDays["ru"];
return (
  <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>
    <Navbar lang={lang} setLang={setLang} />
    <div className="h-20"></div>

     {/* ---------- Desktop-only Hero section ---------- */}
    <div className="w-full hidden lg:block">
        <div className="relative w-full aspect-[5952/2679]">
  <img
     src="/images/desktop-images/chapter-03-desktop.webp"
     alt={textsMashasFirstDays[lang][0].alt.hero}
     className="w-full h-full object-cover block"
     loading="eager"
    />



{/* Text overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[10%] left-1/2 -translate-x-1/2 text-white text-center w-[40%] px-6"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">

    {/* Chapter number */}
    <span className="text-[clamp(28px,4vw,60px)] block">
      {lang === "ru" ? "Глава 3" : lang === "en" ? "Chapter 3" : "פרק 3"}
    </span>

    {/* Chapter heading / name */}
    <span className="text-[clamp(32px,4vw,80px)] block mt-3">
      {lang === "ru" ? "Моя дочь, Маша" : lang === "en" ? "My daughter, Masha" : "הבת שלי, מָאשָׁה"}
    </span>

    {/* Subtitle / description */}
    <span className="text-[clamp(16px,2vw,30px)] block mt-2">
      {lang === "ru"
        ? "История первых дней в Израиле, рассказанная моей дочерью, Машей."
        : lang === "en"
        ? "A story about our first days in Israel, told by my daughter, Masha."
        : "הסיפור של הימים הראשונים שלנו בישראל - כפי שסיפרה בתי, מָאשָׁה"}
    </span>

  </h1>
</div>
    </div>




      <div className="relative w-full -mt-[230px]">
        <div className="w-full aspect-[1919/2351]">

        <img
          src="/images/desktop-images/entroChapter-thirdStory-Masha.svg"
          alt="Wave"
            className="w-full h-full block"
           loading="eager"
        />
    </div>



        
        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[6vw]  [&>h2]:mt-10 [&>h2]:mb-16
            [&>h2]:text-[3vw]  [&>h2]:mt-10 [&>h2]:mb-16
            [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
            [&>p]:text-[1.25vw] [&>p]:mt-6
            md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
          `}
        >
          <TextForthPage lang={lang} />
        </div>
      </div>
    </div>






    {/* ---------- Tablet-only Hero section ---------- */}
    <div className="hidden md:block lg:hidden w-full">
           <div className="relative w-full aspect-[6936/6506]">
 <img
        src="/images/mobile-images/chapter-03-mobile.webp"
         alt={textsMashasFirstDays[lang][0].alt.hero}
         className="w-full h-full object-cover block"
        loading="eager"
      />


{/* Text overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[50%] left-1/2 -translate-x-1/2 text-center text-white"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">

    {/* Chapter number */}
    <span className="block text-[clamp(28px,6vw,60px)]">
      {lang === "ru" ? "Глава 3" : lang === "en" ? "Chapter 3" : "פרק 3"}
    </span>

    {/* Chapter name, single line */}
    <span className="block mt-2 whitespace-nowrap text-[clamp(32px,7vw,80px)]">
      {lang === "ru" ? "Моя дочь, Маша" : lang === "en" ? "My daughter, Masha" : "הבת שלי, מָאשָׁה"}
    </span>

  </h1>
</div>
    </div>


      <div className="relative w-full -mt-[170px]">
          <div className="w-full aspect-[803/1698]">
        <img
          src="/images/ipad-images/chapter-masha.svg"
          className="w-full h-full object-cover block"
          loading="eager"
        />
      </div>


        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
            w-[85%] px-2 sm:px-4
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[11vw] [&>h1]:mt-8 [&>h1]:mb-12
            [&>h2]:text-[5.5vw] [&>h2]:mt-8 [&>h2]:mb-12
            [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed
          `}
        >
          <TextForthPage lang={lang} />
        </div>
      </div>
    </div>





    {/* Mobile-only Hero */}
    <div className="block md:hidden w-full">
       <div className="relative w-full aspect-[6936/6506]">
        <img
        src="/images/mobile-images/chapter-03-mobile.webp"
         alt={textsMashasFirstDays[lang][0].alt.hero}
        className="w-full h-full object-cover block"
         loading="eager"
      />


{/* Text overlay – only chapter number */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[50%] left-1/2 -translate-x-1/2 text-white text-center w-full px-6"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] leading-tight font-semibold">
    <span className="text-[clamp(48px,8vw,100px)] block">
      {lang === "ru" ? "Глава 3" : lang === "en" ? "Chapter 3" : "פרק 3"}
    </span>
  </h1>
</div>

      </div>


      <div className="relative w-full -mt-[110px]">
         <div className="w-full aspect-[380/1711]">
        <img
          src="/images/mobile-images/chapter-03-mobile.svg"
          alt="Wave"
          className="w-full h-full block"
          loading="eager"
        />
        </div>




        <div
          dir={lang === "he" ? "rtl" : "ltr"}
          className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            w-[95%] sm:w-[98%]
            ${lang === "he" ? "font-rubik" : ""}
            [&>h1]:text-[clamp(45px,9vw,60px)]  [&>h1]:mt-12 [&>h1]:mb-12
            [&>h2]:text-[clamp(30px,5vw,30px)]  [&>h2]:mt-12 [&>h2]:mb-12
            [&>h3]:text-[clamp(23px,6vw,35px)] 
            [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8
          `}
        >
          <TextForthPage lang={lang} />
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
        onClick={() => navigate("/mothers-story")}
        label="המשך"
        isRtl={true}
      />
      <BackwardButton
        onClick={() => navigate("/galina-grew")}
        label="חזרה"
        isRtl={true}
      />
    </>
  ) : (
    <>
      {/* LTR: Back on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/galina-grew")}
        label={lang === "ru" ? "Назад" : "Back"}
        isRtl={false}
      />
      <ForwardButton
        onClick={() => navigate("/mothers-story")}
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

export default MashasFirstDays;
