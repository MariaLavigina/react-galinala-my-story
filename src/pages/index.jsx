import React from 'react';

const Index = () => {
  return (
    <div className="w-full hidden lg:block">
      {/* Hero photo at the top */}
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[16px] md:text-[18px] lg:text-[20px]">
          <h1 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold">
            каждый выбирает
          </h1>
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold mt-2">
            для себя
          </h2>
          <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold mt-4">
            Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем.
          </h3>
          <p className="mt-4">
            Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история — не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
          </p>
          <p className="mt-2">
            Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
          </p>
          <p className="mt-2">
            Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом, между выживанием и подлинной жизнью.
          </p>
          <p className="mt-2">
            Это история о том, как свой выбор сделала я.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
