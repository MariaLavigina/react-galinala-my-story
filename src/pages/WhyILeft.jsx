import React from "react";
import  ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextFirstPage from "../components/TextFirstPage.jsx";



const WhyILeft = () => {
  return (
    <>
     <Navbar /> 
     <div className="h-20"></div>
      {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/chapter01-desktop.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[300px]">
          <img
            src="images/desktop-images/entroPage-firstPage-desktop.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
<div
  className="
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white
     [&>h1]:text-[4vw]
     [&>h2]:text-[6vw]
     [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
     [&>p]:text-[1.25vw] [&>p]:mt-6
     md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
  "
>
  <TextFirstPage />
</div>
</div>
</div>
      
      {/* -------- end of desktop-only hero -------- */}




      {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/mobile-images/chapter01-why-i-left-mobile.webp"
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
                       [&>h1]:text-[4vw] [&>h2]:text-[7vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12 
                       [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed"
    
          >
            <TextFirstPage />
          </div>
        </div>
      </div>
      {/* -------- end of tablet-only hero -------- */}









      {/* ---------- Mobile-only Hero section ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/chapter01-why-i-left-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[100px]">
          <img
            src="images/mobile-images/wave-whyILeft-entro-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[95%] sm:w-[98%] 
                       [&>h1]:text-[clamp(20px,8vw,60px)]
                       [&>h2]:text-[clamp(40px,7vw,45px)]
                       [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16
                       [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8"
     
          >
            <TextFirstPage />
          </div>
        </div>

      </div>
      {/* -------- end of mobile-only hero -------- */}










      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className=" px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ">
        <div className="max-w-[720px] mx-auto ">
          <h1 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8">
           И я промолчала...
          </h1>

          <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] ">
          <p className= "mb-8" >
           В конце 70-годов мы с мужем хотели поехать к морю с выздоравливающим ребёнком не «дикарем», а по путевке - с гарантированным жильем и питанием. Такие путевки можно было купить («получить») только в профсоюзах на работе. У мужа на работе сказали, что у них нет. Я пошла в свой факультетский профком. Там мне сказали, что и у них таких путёвок нет и посоветовали пойти в объединённый профком университета.  
          </p>
            <p className= "mb-8">
           Там ко мне отнеслись сочувственно и предложили 2 путевки на выбор. Честно говоря, обе они были не очень и я спросила могу ли подумать. И тут профсоюзный деятель произнёс фразу, которую я до сих пор не могу забыть. Он сказал: “думайте, только не очень долго. Вы же понимаете, что это не для вас предназначено.” Он так и сказал: “вы же понимаете”. 
           Я к тому времени проработала в университете 10 лет, ни разу не пользовалась профкомовскими путевками. По формальным критериям они да были предназначены для меня. А профкомовский деятель, посмел сказать, не опасаясь, не стесняясь, прямым текстом , что путевки для блатных, для «нужных», для «своих» людей и что я должна это понимать. 
          </p>
               <p className= "mb-8">
           Профком и деятель были последняя и единственная возможность свозить ребёнка к морю в более сносных условиях. И я промолчала...
          </p>
           </div>




{/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/desktop-images/Moscow-State-University-01-desktop.jpg"
    alt="Moscow State University"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
     Московский государственный университет (МГУ), официально — Московский государственный университет имени М. В. Ломоносова — где я училась и работала
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}



{/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/desktop-images/Moscow-State-University-02-desktop.jpg"
    alt="Moscow State University"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
    Вот я посередине, спускаюсь по ступеням моего московского университета — во время одной из наших поездок в Москву, в Москве 2000-х. …и мои университетские ордена МГУ.
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}


            <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
           Бесконечное бытовое унижение
          </h4>




           <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
          Ну, конечно, не из-за профсоюзного деятеля я уехала, хотя ситуация эта не забывается. Как-то вдруг сложилась общая картина жизни в стране. Бесконечное бытовое унижение, а самое главное, в стране совершенно исчезло понятие “человеческое достоинство”. 
          </p>

            <p className="mb-8">
          Воровство стало нормой. Вполне порядочные люди “тащили” с работы, кто, что мог и нисколько не смущались, а даже и бравировали этим. Продавцы воровали, обманывали покупателей и это было закономерно. Их зарплата была как будто специально так мала, чтобы побудить их к воровству, к продаже с “чёрного входа”. 
          </p>

            <p className="mb-8">
           Мой двоюродный брат как то похвалялся, что он с “чёрного входа” покупает мясо без костей. Вот написала и думаю, современный читатель скажет: “Ну и что тут такое? Какое хочу, такое покупаю.” Дело в том, что тогда в магазинах мясо было одного вида, с костями и по одной цене. И если мой брат, приплатив сверх магазинной цены продавцу в карман, получал без костей, то продавец оставшиеся кости подкладывал кому-нибудь другому. И этот несчастный мог сколько угодно протестовать против дополнительных костей к его кусочку мяса.
           Продавец был непреклонен. Я тогда и сказала брату: “А как ты думаешь, кто покупает твои кости? Я покупаю!” Он совсем неплохой человек, мой двоюродный брат, а вот бахвалился жульничеством. 
          </p>
    
            <p className="mb-8">
           Такое впечатление, что все специально было построено так, чтобы люди ловчили, жульничали. Приходилось нарушать и тем, кто с этого ничего не имел. Моя мама работала экономистом-финансистом. Она должна была обеспечивать (финансово) геолого-разведывательные партии оборудованием, жильём и прочим. Она говорила, что если бы она не нарушала инструкции, обеспечить партии было бы невозможно. Получалось, что сама система подталкивала ко всякого рода правонарушениям, часто вынужденным и абсолютно бескорыстным и таким образом, каждый оказывался под “колпаком”. Если человек становился неугоден, с ним легко можно было расправиться. Каждому было чего предьявить.
          </p>

               <p className="mb-8">
           На тему воровства с работы смешно шутил про меня мой муж:  “А что Галина может украсть? Интеграл, да и тот несобственный!”
          </p>
          </div>


              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
          Гуляю с маленькой Машей около нашего дома
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
          Гуляю с маленькой Машей около нашего дома в Матвеевском. Пенсионерка на скамеечке рассказывает: “Я 30 лет проработала на заводе у станка.” А затем с гордостью: “и вот мне дали квартиру со всеми удобствами.” Я не выдерживаю и говорю : “Да вы за эти 30 лет несколько таких квартир заработали. А вам гроши платили, а потом дали малость. Не Вы выбирали, где жить, в каком районе, в каком доме, как-будто не вы 30 лет у станка работали. Вас грабили все эти 30 лет.” 
          </p>

            <p className="mb-8">
          Не помню ни ее лица, ни ее имени, но хорошо помню лютую ненависть в ее глазах, когда она молча смотрела на меня. 
          </p>

          </div>


        {/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/matveevskaya-street.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
     Наш подъезд в Москве
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}


           
              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
          Cкажут сажать мы будем сажать.
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
              Было это в конце 70-х. У Олега (моего сына) украли велосипед: он гулял на школьном дворе, на минуту отвернулся — и велосипеда не стало. Мы понимали , что обращаться в милицию (полицию) совершенно бесполезно, но все-таки пошли. Милиционер оказался очень симпатичным молодым парнем. Мы с ним славно побеседовали ‘за жизнь’. Запомнилось мне, как он сказал: ‘Вот, если нам скажут сажать за это (некое абстрактное ‘это’) - мы будем сажать, а если скажут не сажать - мы не будем сажать.’ И произнёс он это обыденным тоном - не осуждая, без горечи и не бравируя, наверняка не осознавая чудовищности сказанного. Вот так - правовая системы вполне привычно руководствуется не законом, а тем что ‘скажут’.
          </p>
          </div>


           <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
          Да она, всего лишь жена референта!
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
              Моя школьная подруга Тима (школьное прозвище, но я и моя семья только так и звали ее)  одно время работала врачем невропатологом в 4 управлении Минздрава СССР, обслуживавшее высших партийных советских чиновников. 
          </p>
                <p className="mb-8">
             Она рассказывала мне, как однажды вызывает ее начальство и спрашивает, почему она такую- то больную направила на лечение в такое-то место. Тима отвечает, что у этой больной показания на лечение именно в том месте, куда она ее и направила. На что начальник возмущается: ‘Да она, то есть больная, всего лишь жена референта!’
          </p>
                <p className="mb-8">
             Вот так, направлять надо было не в соответствии с болезнью, а в соответствии с занимаемой должностью. Тима вскорости ушла оттуда.
          </p>
          </div>




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

export default WhyILeft;
