import React, { useState } from "react";
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

const MothersStory = () => {
  const [lang, setLang] = useState("ru"); // default Russian
  const navigate = useNavigate();

  const textForLang = textsMothersStory[lang] || textsMothersStory["ru"];

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

      {/* Desktop-only Hero */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/chapter04-desktop.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[300px]">
          <img
            src="images/desktop-images/entroChapter-thirdStory-Masha.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
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

      {/* Tablet-only Hero */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/mobile-images/chapter04-grandmother-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[120px]">
          <img
            src="images/ipad-images/chapter04-masha-tablet.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            dir={lang === "he" ? "rtl" : "ltr"}
            className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
              w-[85%] px-2 sm:px-4
              ${lang === "he" ? "font-rubik" : ""}
              [&>h1]:text-[6vw] [&>h1]:mt-8 [&>h1]:mb-12
              [&>h2]:text-[4vw] [&>h2]:mt-8 [&>h2]:mb-12
              [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed
            `}
          >
            <TextFifthPage lang={lang} />
          </div>
        </div>
      </div>

      {/* Mobile-only Hero */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/chapter04-grandmother-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[70px]">
          <img
            src="images/mobile-images/entroChapter-myMothersStory-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
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
  <div className="w-screen relative left-1/2 -translate-x-1/2 hidden md:block mb-12">

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
                    ? `mb-12 w-screen relative left-1/2 -translate-x-1/2 text-center`
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












      {/* ---------- Navigation Buttons ---------- */}
      <div className="flex justify-center gap-4 mt-24">
        <BackwardButton onClick={() => navigate("/mashas-first-days")} />
        <ForwardButton onClick={() => navigate("/")} />
      </div>

      {/* ---------- Chapters Section ---------- */}
      <ChapterSectionDesktop />
      <ChapterSectionMobile />

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default MothersStory;
