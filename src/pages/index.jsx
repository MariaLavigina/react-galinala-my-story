import React from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import TextTwoIndexOnly from "../components/TextTwoIndexOnly.jsx";
import TextThreeIndexOnly from "../components/TextThreeIndexOnly.jsx";


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
            src="/images/desktop-images/wave-index-entro.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
<div
  className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
     [&>h1]:text-[4.5vw]
     [&>h2]:text-[10vw]
     [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
     [&>p]:text-[1.25vw] [&>p]:mt-6
     md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
  "
>
  <TextOneOnly />
</div>
</div>


         {/* Second text under SVG */}
    <div className="text-center text-black mt-8 px-4 max-w-[720px] mx-auto [&>h2]:text-[3vw]">
      <TextTwoIndexOnly />
    </div>
      {/* Second text under SVG */}



<div className="relative w-full hidden lg:block mt-8">
  <img
    src="/images/desktop-images/fff.svg"
    alt="Wave Two"
    className="w-full h-auto block"
  />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <div className="    [&>h1]:text-[5vw] [&>h1]:mt-8
                        [&>h2]:text-[2.5vw] [&>h2]:mt-8
                        [&>p]:text-[1.5vw] [&>p]:mt-8">
      <TextThreeIndexOnly />
    </div>
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
                       w-[85%]  px-2 sm:px-4 
                       [&>h1]:text-[5vw] [&>h2]:text-[11vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12 
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
            src="/images/mobile-images/wave-index-entro-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[95%] sm:w-[98%] 
                       [&>h1]:text-[clamp(23px,8vw,80px)]
                       [&>h2]:text-[clamp(65px,14vw,200px)]
                       [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16
                       [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8"
     
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
