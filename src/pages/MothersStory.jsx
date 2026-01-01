import React, { useState, useEffect } from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import Footer from "../components/Footer";
import TextFifthPage from "../components/TextFifthPage.jsx";
import { useNavigate } from "react-router-dom";
import textsMothersStory from "../text/textxMothersStory.js";
import Divider from "../components/Divider.jsx";
import ScrollDownButton from "../components/ScrollDownButton.jsx";

const MothersStory = () => {


const [lang, setLang] = useState(() => {
  return localStorage.getItem("lang") || "ru"; // default Russian
});

  const navigate = useNavigate();





  // ✅ Preload images properly inside useEffect
useEffect(() => {
  const imagesToPreload = [
    "/images/desktop-images/chapter-04-desktop.webp",
    "/images/mobile-images/chapter04-grandmother-mobile.webp",
  ];

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src; 
  });
}, []);

  // ✅ Preload images properly inside useEffect






React.useEffect(() => {
  localStorage.setItem("lang", lang);
}, [lang]);



    // Set page title and meta description based on language
    useEffect(() => {
      const titles = {
      ru: `Глава 4 - История моей мамы через письма`,
      en: `Chapter 4 – My mother’s story through her letters`,
      he: `פרק 4 – הסיפור של אמי דרך המכתבים שלה`

      };
  
      const descriptions = {
      ru: `Моя мама не оставила мне богатства, но пример жизни я получила редкостный.`,
      en: `My mother didn’t leave me material wealth, but she left me an extraordinary example of life`,
      he: `אמא שלי לא השאירה לי עושר חומרי, אבל היא השאירה לי דוגמא לחיים יוצאת דופן`
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




  const textForLang = textsMothersStory[lang] || textsMothersStory["ru"];

  return (
    <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

         {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
         <div className="relative w-full aspect-[6235/3188]">
      <img
      src="/images/desktop-images/chapter-04-desktop.webp"
      alt={textsMothersStory[lang][0].alt.hero}
      className="w-full h-full object-cover block"
      loading="eager"
      />




{/* Text overlay – only chapter number */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[25%] left-1/2 -translate-x-1/2 text-white text-center w-[40%] px-6"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">
    <span className="text-[clamp(40px,8vw,100px)] block">
      {lang === "ru" ? "Глава 4" : lang === "en" ? "Chapter 4" : "פרק 4"}
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
            <TextFifthPage lang={lang} />
          </div>
        </div>
      </div>








          {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
          <div className="relative w-full aspect-[2571/2032]">
      <img
        src="/images/mobile-images/chapter04-grandmother-mobile.webp"
             alt={textsMothersStory[lang][0].alt.hero}
             className="w-full h-full object-cover block"
             loading="eager"
        />



{/* Text overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[30%] left-1/2 -translate-x-1/2 text-center text-white"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">

    {/* Chapter number */}
    <span className="block text-[clamp(28px,6vw,60px)]">
      {lang === "ru" ? "Глава 4" : lang === "en" ? "Chapter 4" : "פרק 4"}
    </span>

    {/* Chapter name, single line – bigger */}
    <span className="block mt-2 whitespace-nowrap text-[clamp(48px,10vw,100px)]">
      {lang === "ru" ? "Моя мама" : lang === "en" ? "My mother" : "אמא שלי"}
    </span>

  </h1>
</div>




    </div>


        <div className="relative w-full -mt-[160px]">
           <div className="w-full aspect-[764/1495]">
          <img
            src="/images/ipad-images/entroChapter-myMother-ipad.svg"
            alt="Wave"
            className="w-full h-auto block"
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
              [&>h2]:text-[6vw] [&>h2]:mt-8 [&>h2]:mb-12
              [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed
            `}
          >
            <TextFifthPage lang={lang} />
          </div>
        </div>
      </div>





      {/* Mobile-only Hero */}
      <div className="block md:hidden w-full">
           <div className="relative w-full aspect-[2571/2032]">
           <img
        src="/images/mobile-images/chapter04-grandmother-mobile.webp"
             alt={textsMothersStory[lang][0].alt.hero}
            className="w-full h-full object-cover block"
            loading="eager"
           />




{/* Text overlay */}
<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className="absolute top-[25%] left-1/2 -translate-x-1/2 text-center text-white px-4"
>
  <h1 className="text-white drop-shadow-[2px_2px_4px_black] font-semibold leading-snug">

    {/* Chapter number – slightly bigger */}
    <span className="block text-[clamp(28px,6vw,60px)]">
      {lang === "ru" ? "Глава 4" : lang === "en" ? "Chapter 4" : "פרק 4"}
    </span>

    {/* Chapter name – slightly bigger */}
    <span className="block mt-2 whitespace-nowrap text-[clamp(42px,9vw,90px)]">
      {lang === "ru" ? "Моя мама" : lang === "en" ? "My Mother" : "אמא שלי"}
    </span>

  </h1>
</div>




      </div>


        <div className="relative w-full -mt-[100px]">
          <div className="w-full aspect-[380/1361]">
          <img
            src="/images/mobile-images/my-mothers-story.svg"
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
            <TextFifthPage lang={lang} />
          </div>
        </div>
      </div>




{/* ---------- Scroll Down Button ---------- */}
<ScrollDownButton
  targetId={window.innerWidth >= 768 ? "chapters-desktop" : "chapters-mobile"}
/>




{/* ---------- Text Section ---------- */}
<section
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ${
    lang === "he" ? "font-rubik" : ""
  }`}
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
  Array.isArray(block.h4)
    ? block.h4.map((line, idx) => {
        if (idx === block.h4.length - 1) {
          return (
            <h4
              key={idx}
              className="text-[50px] sm:text-[60px] md:text-[70px] font-semibold text-center py-8"
            >
              {line}
            </h4>
          );
        }
        return (
          <h4
            key={idx}
            className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8 font-semibold text-center"
          >
            {line}
          </h4>
        );
      })
    : (
      <h4 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-8 font-semibold text-center">
        {block.h4}
      </h4>
    )
)}







{/* DESKTOP LETTERS SECTION — existing */}
{block.type === "lettersSection" && (
 <div
  className={`
    w-screen relative hidden md:block mb-12
    ${lang === "he"
      ? "right-1/2 translate-x-1/2"
      : "left-1/2 -translate-x-1/2"
    }
  `}
>


    {/* Background image */}
    <img
      src={block.lettersDesktopImage}
      alt="Letters background"
      className="w-full h-auto"
    />

    {/* MULTILINE Overlay text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 pointer-events-none px-4">

{block.letters?.map((line, idx) => (
  <h4
    key={idx}
    className={`
      text-white
      font-semibold
      bg-[#302024]/85
      mx-auto
      px-6 py-4
      text-center
      w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]
      ${idx === 0 ? "text-[clamp(40px,8vw,70px)]" : "text-[clamp(12px,2vw,32px)]"}
    `}
  >
    {line}
  </h4>
))}

    </div>

  </div>
)}





{/* MOBILE LETTERS SECTION */}
{block.type === "lettersSectionMobile" && (
  <div className="w-full relative md:hidden mb-12">

    {/* Background image for mobile */}
    <div className="relative w-full">
      <img
        src={block.lettersMobileImage}
        alt="Letters Mobile Background"
        className="w-full h-auto block"
      />

      {/* Overlay title on top of image */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-white font-bold italic bg-[#302024]/85 px-6 py-4 text-center text-[clamp(36px,10vw,60px)] max-w-full sm:max-w-[90%]">
          {block.title}
        </h1>
      </div>
    </div>

    {/* H4 text underneath the image */}
    <div className="mt-12 px-4 text-center">
      {block.subtitleLettersMobile?.map((line, idx) => (
        <h4
          key={idx}
          className="text-white font-normal italic text-[clamp(16px,4vw,24px)] max-w-full sm:max-w-[90%] mx-auto mb-12"
        >
          {line}
        </h4>
      ))}
    </div>

  </div>
)}






          {/* Paragraphs */}
          {block.text?.map((p, idx) => (
             p === "DIVIDER" ? <Divider key={idx} /> : (
            <p
              key={idx}
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-6 leading-relaxed"
            >
              {p}
             </p>
  )
))}










          

          {/* Images */}
          {block.image &&
            (Array.isArray(block.image)
              ? block.image.map((img, idx) => {
                  if (img.mobileOnly) {
                    return (
                      <div
                        key={idx}
                        className="relative w-full mb-12 block md:hidden"
                      >
                        <img
                          src={img.mobileSrc}
                          alt={img.alt}
                          className="w-full h-auto"
                        />
                        <h4 className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-[clamp(28px,13vw,77px)] bg-[#302024]/85 w-[96%] mx-auto px-6 py-3 text-center">
                            {img.textOverlay}
                          </span>
                        </h4>
                      </div>
                    );
                  }

                    const wrapperClass = img.fullWidth
                    ? `mb-12 w-screen relative ${
                     lang === "he"
                      ? "right-1/2 translate-x-1/2"
                   : "left-1/2 -translate-x-1/2"
                 } text-center`
                 : `mb-12 ${lang === "he" ? "text-right" : "text-left"}`;

                  return (
                    <div key={idx} className={wrapperClass}>
                      {img.desktopSrc && (
                        <img
                          src={img.desktopSrc}
                          alt={img.alt}
                          className="w-full h-auto hidden md:block"
                        />
                      )}

                      
                      {img.textDesktop && (
                        <p className="hidden md:block text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                          {img.textDesktop}
                        </p>
                      )}

                      {img.mobileSrc && (
                        <img
                          src={img.mobileSrc}
                          alt={img.alt}
                          className="w-full h-auto mb-4 block md:hidden"
                        />
                      )}



                      {img.textMobile && (
                        <p className="block md:hidden text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4">
                          {img.textMobile}
                        </p>
                      )}
                    </div>
                  );
                })
              : null)}
        </div>
      );
    })}
  </div>
</section>







{/* Navigation */}
<div className="flex justify-center gap-4 mt-24">
  {lang === "he" ? (
    <>
      {/* Hebrew: Backward on left, Forward on right */}
      <BackwardButton
        onClick={() => navigate("/mashas-first-days")}
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
        onClick={() => navigate("/mashas-first-days")}
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
  );
};

export default MothersStory;
