import React from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextFifthPage from "../components/TextFifthPage.jsx";
import DesktopFromLetters from "../components/DesktopFromLetters.jsx";
import MobileFromLetters from "../components/mobileFromLetters.jsx";

const MothersStory = () => {
  return (
    <>
      <Navbar />
      <div className="h-20"></div>

      {/* ---------- Desktop Hero ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/chapter04-desktop.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[240px]">
          <img
            src="images/desktop-images/entroChapter-thirdStory-Masha.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            [&>h1]:text-[5vw] [&>h1]:mb-8
            [&>h2]:text-[3vw]
            [&>p]:text-[1.25vw] [&>p]:mt-12
            md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]"
          >
            <TextFifthPage />
          </div>
        </div>
      </div>

      {/* ---------- Tablet Hero ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/mobile-images/chapter04-grandmother-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[200px]">
          <img
            src="images/ipad-images/first-wave-tablet.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            w-[85%] px-2 sm:px-4
            [&>h1]:text-[8vw] [&>h1]:mb-6
            [&>h2]:text-[4vw] [&>h2]:mb-8
            [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed"
          >
            <TextFifthPage />
          </div>
        </div>
      </div>

      {/* ---------- Mobile Hero ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/chapter04-grandmother-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[100px]">
          <img
            src="images/mobile-images/Chapter-mashaStory-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
            w-[95%] sm:w-[75%]
            [&>h1]:text-[clamp(25px,12vw,60px)] [&>h1]:mb-6
            sm:[&>h1]:text-[clamp(25px,15vw,60px)]
            [&>h2]:text-[clamp(23px,8vw,45px)] [&>h2]:mb-8
            sm:[&>h2]:text-[clamp(23px,10vw,45px)]
            [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-6
            sm:[&>p]:text-[clamp(16px,6.5vw,25px)]"
          >
            <TextFifthPage />
          </div>
        </div>
      </div>

      {/* ---------- Text Section ---------- */}
      <section className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto text-white">
          <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-16 text-center">
           Моя мама не оставила мне богатства, но пример жизни я получила редкостный.
          </h1>

          <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
           Мама была полезна, не то слово. Я целыми днями на работе, а Маша ещё мала, ей всего восемь лет. В таком возрасте ребёнок не должен проводить весь день в одиночестве. Мама встречала её из школы, кормила, выслушивала рассказы о школьных делах. Иногда они вместе играли в настольные игры или в карты.
          </p>
           <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
           Меня мама тоже встречала с работы — спрашивала, как прошёл день, делилась своими новостями, кормила ужином. Около десяти вечера Маша ложилась спать, и мама садилась рядом, держала её за ручку и рассказывала сказки-расказки собственного сочинения.
          </p>
           <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
           Все финансовые вопросы я передала маме. Так —  она всегда в курсе наших дел, а мне спокойнее — свой личный, высококвалифицированный "бухгалтер"! Мама c ее неизменной активной жизненной позицией все, что делала,  делала вдумчиво, ответственно.  И что вы думаете — мама обнаружила ошибку в банковских операциях! А ведь все документы были на иврите, которого мама не знала. Банк признал ошибку и вернул нам 500 шекелей. 
          </p>

                            {/* ---------- Image + Text section ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
          
               <img
               src="images/desktop-images/documentations-desktop.webp"
              alt="------------------"
              className="w-full h-auto block mb-6 mt-24"
            />
               <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
              <p className="mb-8">
          Мама как-то попросила купить ей блокнот —  С тех пор она вела его с нашими расходами, как бухгалтер на миссии. Даже мороженое за 3 шекеля туда попадало.
              </p>
          </div> 
      
             {/* ---------- Image + Text section ---------- */}


           <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-16">
           Однажды в Бейт-Шемеше мама участвовала в выборах в городской совет. Завидев пожилую избирательницу,  агитаторы, почуяв лёгкую добычу,  наперебой бросились к ней, стараясь всучить бюллетени своих кандидатов. Но эта пожилая, "ола хадаша" оказалась не так беспомощна, несмотря на то, что прочитать имя кандидата написанное, естественно,  на иврите не могла. Накануне мы обсудили за кого будем голосовать. Имя его теперь не припомню, пусть будет Давид. Мама показывает бюллетень и спрашивает: "Это Давид?" Ей с готовностью отвечают - Да, Давид! Но и на другой и третий - тот же ответ. Мама понимает, что дело не чисто. Тогда меняет тактику и спрашивает: Это кто?" и быстро определяет нужный бюллетень.
          </p>
           <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
          Мама скрупулезно записывала наши расходы/доходы. Возможно это в какой-то степени помогло нам скопить небольшую сумму, которая, когда мы покупали квартиру, очень нам помогла.Только из маминых писем я узнала, как нелегко давалась ей наша олимовская неустроенность. Мне она не пожаловалась ни разу. Ее стойкость, оптимизм, живость ума и доброжелательность притягивала людей. 
          </p>
             <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            Одна из наших знакомых говорила: "В доме чувствовалась какая-то особая атмосфера и было понятно,  что она исходит от мамы." Другая удивлялась: "Ваш дом совсем не похож на олимовский. Как-будто вы здесь давно."
          </p>
             <p className="mb-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
             Моя мама не оставила мне богатства, но пример жизни я получила редкостный.
          </p>
          </div>

               <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-24 mt-32 text-center">
         Из писем моей мамы 
          </h4>
        </div>
      </section>

         <DesktopFromLetters /> 
         <MobileFromLetters />

            {/* ---------- Text ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px] text-center">
            <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
               “Понемногу обживаемся, купили платяной шкаф, шкаф для книг и шкафчик для обуви. А вот стулья еще не можем купить. Зато вид из окна потрясающий. окно, как большая рама чудесной картины. Не можем налюбоваться.”
            </h4>
          </div>
  

      {/* ---------- FULL-WIDTH IMAGE ONLY ---------- */}
      <div className="w-full overflow-hidden">
        <img
          src="images/desktop-images/window-view-desktop.webp"
          alt="----------------------"
          className="w-full h-auto block"
        />
      </div>
      {/* ---------- Image + Text section ---------- */}



      {/* ---------- Navigation Buttons ---------- */}
      <div className="flex justify-center gap-4 mt-24">
        <BackwardButton />
        <ForwardButton />
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
