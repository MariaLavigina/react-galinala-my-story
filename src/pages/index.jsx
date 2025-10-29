import React from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";

const Index = () => {
  return (
    <>
      {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="/images/desktop-images/GL_HeroPhoto_Desktop_withText.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[300px]">
          <img
            src="/images/desktop-images/first-wave-desktop.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
<div
  className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
    [&>h1]:font-rubik [&>h1]:italic [&>h1]:font-normal [&>h1]:text-[5vw]
    [&>h2]:font-playfair [&>h2]:italic [&>h2]:font-normal [&>h2]:text-[8vw]
    [&>h3]:font-playfair [&>h3]:italic [&>h3]:font-normal [&>h3]:text-[2vw] [&>h3]:mt-8
    [&>p]:font-roboto [&>p]:font-normal [&>p]:not-italic [&>p]:normal-case [&>p]:text-[1.25vw] [&>p]:mt-6
    md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
  "
>
  <TextOneOnly />
</div>
        </div>
      </div>
      {/* -------- end of desktop-only hero -------- */}

      {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="/images/ipad-images/GL-HeroPhoto-ipad.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[200px]">
          <img
            src="/images/ipad-images/first-wave-tablet.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[90%] sm:w-[95%] px-2 sm:px-4 
                       [&>h1]:text-[6.5vw] [&>h2]:text-[14vw] [&>h3]:text-[4.5vw] [&>h3]:mt-8 
                       [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed"
    
          >
            <TextOneOnly />
          </div>
        </div>
      </div>
      {/* -------- end of tablet-only hero -------- */}

      {/* ---------- Mobile-only Hero section ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="/images/mobile-images/GL-HeroPhoto-Mobile.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[100px]">
          <img
            src="/images/mobile-images/firstPage-wave-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[95%] sm:w-[98%] 
                       [&>h1]:text-[30px] [&>h2]:text-[65px] [&>h3]:text-[22px] [&>h3]:mt-12 
                       [&>p]:text-[5vw] [&>p]:mt-6 leading-relaxed"
     
          >
            <TextOneOnly />
          </div>
        </div>
      </div>
      {/* -------- end of mobile-only hero -------- */}

      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className="bg-white px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-relaxed mb-[16px]">
            Это дополнительный текст под волной. Он полностью адаптивен: на мобильных устройствах
            он читается легко, на планшете размер подстраивается, а на десктопе текст ограничен по
            ширине, чтобы линии не были слишком длинными.
          </p>
          <p className="text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
            Еще один абзац, который поддерживает идеальный UX: читаемость сохраняется на всех
            устройствах, а линии текста не растягиваются на полную ширину экрана на больших
            мониторов.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
