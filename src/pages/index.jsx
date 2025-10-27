import React from 'react';

const Index = () => {
  return (
    <>
      {/* ---------- Desktop-only Hero section ----------  */}
      <div className="w-full hidden lg:block">
        <img
          src="/images/desktop-images/GL_HeroPhoto_Desktop_withText.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />

        {/* SVG wave container */}
        <div className="relative w-full -mt-[300px]">
          <img
            src="/images/desktop-images/first-wave-desktop.svg"
            alt="Wave"
            className="w-full h-auto block"
          />





          {/* Text on top of the wave */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[1.25vw] md:text-[1.38vw] lg:text-[1.55vw]">
          <div   style={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 100,
    fontStyle: 'italic',
  }}
  >
            <h1 className="text-[6.5vw] md:text-[5.5vw] lg:text-[4.5vw]"
             
               >
              каждый выбирает
            </h1>
            <h2 className="text-[13vw] md:text-[12vw] lg:text-[11vw]"
            
               >
              для себя
            </h2>
            
            <h3 className="text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw] mt-8">
              Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем.
            </h3>
            </div>



            <div  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400,  }}>
            <p className="mt-22">
              Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история — не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
            </p>
            <p className="mt-8">
              Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
            </p>
            <p className="mt-8">
              Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом, между выживанием и подлинной жизнью.
            </p>
            <p className="mt-8">
              Это история о том, как свой выбор сделала я.
            </p>
            </div> 


          </div>
        </div>
      </div> 
      {/* -------- end of desktop-only hero -------- */}











{/* ---------- Tablet-only Hero section ---------- */}
<div className="hidden md:block lg:hidden w-full">
  {/* Hero photo for iPad */}
  <img
    src="/images/ipad-images/GL-HeroPhoto-ipad.jpg"
    alt="Hero"
    className="w-full h-auto block"
  />

  {/* SVG wave container */}
  <div className="relative w-full -mt-[200px]"> {/* Adjust mt for tablet spacing */}
    <img
      src="/images/ipad-images/first-wave-tablet.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

    {/* Text on top of the wave */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%] sm:w-[95%] px-2 sm:px-4">
     


     <div style={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 100,
    fontStyle: 'italic',
     }}
     >
      <h1 className="text-[6.5vw] md:text-[5.5vw] lg:text-[4.5vw]">
        каждый выбирает
      </h1>
      <h2 className="text-[14vw] md:text-[13vw] lg:text-[12vw] ">
        для себя
      </h2>
      <h3 className="text-[4.5vw] md:text-[3.5vw] lg:text-[2.5vw] mt-8">
        Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем.
      </h3>
      </div>
 


<div
  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
  className="text-[1vw] md:text-[2vw] lg:text-[3vw]
 leading-relaxed"
>
  <p className="mt-16">
    Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история — не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
  </p>
  <p className="mt-8">
    Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
  </p>
  <p className="mt-8">
    Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом, между выживанием и подлинной жизнью.
  </p>
  <p className="mt-8">
    Это история о том, как свой выбор сделала я.
  </p>
</div>



    </div>
  </div>
</div>
{/* -------- end of tablet-only hero -------- */}











{/* ---------- Mobile-only Hero section ---------- */}
<div className="block md:hidden w-full">
  {/* Hero photo for mobile */}
  <img
    src="/images/mobile-images/GL-HeroPhoto-Mobile.jpg"
    alt="Hero"
    className="w-full h-auto block"
  />

  {/* SVG wave container */}
  <div className="relative w-full -mt-[100px]"> {/* Adjust mt for mobile spacing */}
    <img
      src="/images/mobile-images/firstPage-wave-mobile.svg"
      alt="Wave"
      className="w-full h-auto block"
    />




    {/* Text on top of the wave */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[95%] sm:w-[98%]">
    <div    style={{
    fontFamily: '"Playfair Display", serif',
    fontWeight: 100,
    fontStyle: 'italic',
     }}
  className="text-[18px] leading-relaxed">
    
    
      <h1 className="text-[30px]">
        каждый выбирает
      </h1>
      <h2 className="text-[65px] ">
        для себя
      </h2>
      <h3 className="text-[22px]  mt-12">
        Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем.
      </h3>
   </div>





   <div
  style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
  className="text-[5vw] md:text-[4vw] lg:text-[3vw] leading-relaxed"
>
  <p className="mt-16">
    Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история — не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
  </p>
  <p className="mt-8">
    Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
  </p>
  <p className="mt-8">
    Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом, между выживанием и подлинной жизнью.
  </p>
  <p className="mt-8">
    Это история о том, как свой выбор сделала я.
  </p>
</div>







    </div>
  </div>
</div>
{/* -------- end of mobile-only hero -------- */}






      {/* Responsive text below SVG - visible on all devices */}
      <section className="bg-white px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-gray-800
                        text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]
                        leading-relaxed mb-[16px]">
            Это дополнительный текст под волной. Он полностью адаптивен: на мобильных устройствах он читается легко, на планшете размер подстраивается, а на десктопе текст ограничен по ширине, чтобы линии не были слишком длинными.
          </p>
          <p className="text-gray-700
                        text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                        leading-relaxed">
            Еще один абзац, который поддерживает идеальный UX: читаемость сохраняется на всех устройствах, а линии текста не растягиваются на полную ширину экрана на больших мониторах.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
