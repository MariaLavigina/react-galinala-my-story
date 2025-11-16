import React from "react";
import  ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextForthPage from "../components/TextForthPage.jsx";



const MashasFirstDays = () => {
  return (
    <>
     <Navbar /> 
     <div className="h-20"></div>
      {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/chapter03-Masha.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[240px]">
          <img
            src="images/desktop-images/entroChapter-thirdStory-Masha.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
<div
  className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
     [&>h1]:text-[5vw] [&>h1]:mb-8
     [&>h2]:text-[3vw] 
     [&>p]:text-[1.25vw] [&>p]:mt-12
     md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
  "
>
  <TextForthPage />
</div>
</div>
</div>
      
      {/* -------- end of desktop-only hero -------- */}




      {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/mobile-images/chapter03-masha-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[200px]">
          <img
            src="images/ipad-images/first-wave-tablet.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[85%]  px-2 sm:px-4 
                       [&>h1]:text-[8vw] [&>h1]:mb-6
                       [&>h2]:text-[4vw] [&>h2]:mb-8
                       [&>p]:text-[3vw] [&>p]:mt-6 leading-relaxed"
    
          >
           <TextForthPage />
          </div>
        </div>
      </div>
      {/* -------- end of tablet-only hero -------- */}









      {/* ---------- Mobile-only Hero section ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/chapter03-masha-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[100px]">
          <img
            src="images/mobile-images/Chapter-mashaStory-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[95%] sm:w-[75%] 
                     
            
                       [&>h1]:text-[clamp(25px,12vw,60px)] [&>h1]:mb-6
                       sm:[&>h1]:text-[clamp(25px,15vw,60px)]

                       [&>h2]:text-[clamp(23px,8vw,45px)] [&>h2]:mb-8
                       sm:[&>h2]:text-[clamp(23px,10vw,45px)]

                       [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-6
                       sm:[&>p]:text-[clamp(16px,6.5vw,25px)]

                                                               " 
     
          >
           <TextForthPage />
          </div>
        </div>

      </div>
      {/* -------- end of mobile-only hero -------- */}










      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className=" px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ">
        <div className="max-w-[720px] mx-auto ">
          <h1 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 text-center ">
           мои пальмы
          </h1>
      {/* ---------- desktop ---------- */}
    <img
    src="images/desktop-images/palm-desktop.webp"
    alt="Коллекция пальм, созданная в рамках очных занятий под руководством художника-графика Ильи Богдановского."
    className="w-full h-auto hidden sm:block  mb-6 mt-22 "
  />

       {/* ---------- mobile ---------- */}
     <img
    src="images/mobile-images/palm-mobile.webp"
    alt="Коллекция пальм, созданная в рамках очных занятий под руководством художника-графика Ильи Богдановского."
    className="w-full h-auto block sm:hidden mb-6 mt-8 "
  />

        <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
              <p className="mb-8">
            Коллекция пальм, созданная в рамках очных занятий под руководством художника-графика Ильи Богдановского.
              </p>
          </div> 

      






            <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
            чипс
          </h4>




           <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
        Я помню свои первые годы в Израиле. В первую неделю в Реховоте я купила жвачки, из которых можно было надувать пузыри. Такие я видела только в фильмах. Я так их хотела, а в России таких не было. Я купила жвачку - и у-п-а, мечта сбылась: пузырь получился!Это была целая пачка, а не одна штучка. Я использовала только одну, а остальные сохранила. Думала: когда мы поедем в гости в Россию, я подарю их своим подружкам. Это будет для них как чудесный дар из другого, волшебного мира.Я ждала, ждала, когда же мы вернёмся… и через две недели всё скушала.Много разных вкусностей я попробовала в Израиле. В России я только слышала о них. Однажды, ещё в Москве, кто-то принёс чипсы. Вкус был такой неожиданно прекрасный, что я молилась, как наркоман, чтобы мне дали ещё и ещё.
          </p>

            <p className="mb-8">
         В Израиле в чипсах уже не было ничего необычного. А сейчас, когда мы с моим британским мужем едим чипсы, он смотрит на меня странно — но с пониманием, - когда я выбираю самый большой чипс, облизываю его мечтательно и мысленно возвращаюсь в детство.
          </p>

      
          </div>

                             {/* ---------- Image + Text section ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
                  {/* ---------- desktop ---------- */}
               <img
               src="images/desktop-images/masha-moscow-desktop.jpg"
              alt="Москва, 1990 год, рядом с нашим домом."
              className="w-full h-auto hidden sm:block mb-6 mt-24"
            />
                   {/* ---------- mobile ---------- */}
                 <img
               src="images/mobile-images/masha-moscow-01.jpg"
              alt="Москва, 1990 год, рядом с нашим домом."
              className="w-full h-auto block sm:hidden mb-6 mt-16"
            />
                  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] block sm:hidden ">
              <p className="mb-8">
           Москва, 1990 год, рядом с нашим домом.
              </p>
          </div> 
                    {/* ---------- mobile ---------- */}
                 <img
               src="images/mobile-images/masha-moscow-02.jpg"
              alt="Москва, 1990 год, рядом с нашим домом."
              className="w-full h-auto block sm:hidden mb-6 mt-4"
            />

               <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
              <p className="mb-8">
           Москва, 1990 год, рядом с нашим домом.
              </p>
          </div> 
           </div> 
             {/* ---------- Image + Text section ---------- */}


              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
         супермаркет
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
           Я помню наши первые дни в Реховоте.Помню, как мы в первый раз пошли в супермаркет - это было как в парке аттракционов! Столько видов чипсов, целые полки жвачек всех вкусов - и такие, из которых можно надувать пузыри!
В тот день я шла за мамой по магазину, когда вдруг увидела что-то блестящее. Я подошла ближе и увидела огромную корзину прямо посреди супермаркета. А в ней - сотни маленьких, блестящих, цветных квадратных штучек.
Они были красные, синие, зелёные, фиолетовые - и даже золотые и серебряные! Я просто застыла, заворожённая.
Я позвала маму и начала её умолять купить эти штуки. Я никогда раньше такого не видела. Мне казалось, что это какие-то новогодние украшения - они были мягкие, сверкающие, из блестящей тонкой фольги. Я умоляла и умоляла… пока мама не вздохнула и не сказала: “Ладно, можешь выбрать одну.”
          </p>

            <p className="mb-8">
          Я стояла и не знала, что делать. Такой сложный выбор для семилетней девочки! Как выбрать только одну, когда они все такие волшебные?
В конце концов я выбрала две - золотую и серебряную.
И до сих пор… каждый раз, когда я вижу металлическую губку для мытья посуды - я вспоминаю тот момент.
          </p>

            <p className="mb-8">
            До сих пор я не могу пройти мимо, не взглянув на них
          </p>

          </div>


        {/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/wire-sponge-01.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-4 "
  />
    <img
    src="images/wire-sponge-02.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-4 "
  />
    <img
    src="images/wire-sponge-03.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-4 "
  />

</div>
{/* ---------- Image + Text section ---------- */}


           
              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
         Война в Персидском заливе, 1991 год.
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
             Моя мама, бабушка и я приехали в Израиль летом 1990 года, а зимой, сразу после моего дня рождения, началась Война в Персидском заливе. Кроме обычных уроков, у нас в школе была специальная подготовка - нас учили, что делать в случае атаки. Мы тренировались быстро надевать противогазы и идти в защищённую комнату. Учителя всё время повторяли, как это важно, потому что тогда была большая вероятность химической атаки. Я хорошо помню, как мы с одноклассниками всё это отрабатывали.Дома мы тоже готовились. С мамой и бабушкой мы купили липкую коричневую ленту и заклеили ею окна, чтобы ядовитые химикаты не смогли проникнуть в нашу защищённую комнату. Я совсем не боялась - наоборот, мне даже нравилась вся эта подготовка. У нас в квартире была маленькая безопасная комната, где лежали свечи, еда и радио. Она казалась мне тайным убежищем, куда мы можем прятаться.
          </p>
             <p className="mb-8">
            ... я услышала сирену “Нахаш Цефа”.  - звучит страшно! Это сигнал тревоги, который предупреждает всех, когда летят ракеты. Я очень испугалась и начал бегать по гостиной и кричать: “Война! Война! Война!” До этого я слышал о войне только в рассказах бабушки и никогда не думал, что это случится со мной. Тогда мама, бабушка и я побежали в нашу безопасную комнату. Мы надели противогазы и включили радио, чтобы узнать, что происходит. После всех тренировок это наконец стало настоящим! 
          </p>
          </div>


     

                             {/* ---------- Image + Text section ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
          
               <img
               src="images/gulf-war.jpg"
              alt="Автопортрет. Я в противогазе в нашей безопасной комнате... окна и дверь плотно заклеены малярным скотчем, на полу рядом с маленькой свечой лежит радио.  Rohovot,  январь   1991"
              className="w-full h-auto block mb-6 mt-24"
            />
               <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
              <p className="mb-8">
              Автопортрет. Я в противогазе в нашей безопасной комнате... окна и дверь плотно заклеены малярным скотчем, на полу рядом с маленькой свечой лежит радио.  Rohovot,  январь   1991
              </p>
          </div> 
           </div> 
             {/* ---------- Image + Text section ---------- */}



                 <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
          роскошь 
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
              Однажды мамин босс, Нимрод, и его жена, Ронит, пригласили меня в кино - это был ”Парк Юрского периода”. Шёл 1993 год, мне - 10 лет. Мы сидели вместе перед началом фильма, ели вкусности, смеялись, просто наслаждались моментом. И тогда я подумала: “Наверное, люди вокруг думают, что Нимрод и Ронит - мои родители. Мои израильские родители”.
          </p>
           <p className="mb-8">
            Я почувствовала гордость. Гордость за то, что незнакомцы могли подумать, что я их, Нимрода и Ронит дочь, что я принадлежу этой семье. В этот короткий момент я представила, будто у меня двое молодых, счастливых израильских родителей и мы проводим семейное время вместе.
          </p>
           <p className="mb-8">
            У них была машина. У них были деньги на билеты в кино и на угощения. И самое главное - они были вместе. Как любая другая обычная семья. И в тот момент я чувствовала себя как все израильские дети.
          </p>
           <p className="mb-8">
            А на самом деле у меня была только мама, которая весь день на работе. Мы были олим хадашим, у нас не было денег на кино и простые сладости. Но с Нимродом и Ронит, хотя бы на один день, у меня было что-то особенное.В тот день я постеснялась рассказать маме о своих чувствах. Много позже, уже будучи взрослой, я призналась ей: “Может быть, это трудно понять… но для меня такое чувство — просто чувствовать себя как все — было тогда настоящей роскошью”.
          </p>
          
          </div>

                             {/* ---------- Image + Text section ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
          
               <img
               src="images/notes.jpg"
              alt="------------------"
              className="w-full h-auto block mb-6 mt-24"
            />
           </div> 
             {/* ---------- Image + Text section ---------- */}


     <div className="flex justify-center gap-4 mt-24">
  <BackwardButton />
  <ForwardButton />
</div>



        </div>
      </section>

      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
<div >
  <ChapterSectionDesktop />
</div>


      {/* ---------- Chapters Section (mobile only) ---------- */}
<div>
  <ChapterSectionMobile />
</div>


   {/* ---------- Footer ---------- */}
      <Footer />
    </>
    
  );
};

export default MashasFirstDays;
