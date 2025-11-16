import React from "react";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";


const DecisionToLeave = () => {
  return (
    <>
      <Navbar /> 
      <div className="h-20"></div>

      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
            Итак решено - уезжаем!  Куда?
          </h1>

          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            <p className="mb-8">
              Конечно в Америку. Решить то я решила, а страшно до жути. Снятся леденящие сны, будто падаю я в холодную, глубокую пропасть. Мама говорит, что если она там может быть мне в помощь, то она, конечно, со мной. Начинаем процесс, едем в американское посольство, стоим в какой-то очереди, заполняем какие-то бумаги. 
            </p>
          </div>

          {/* ---------- Image + Text section ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
            <img
              src="images/globe.jpg"
              alt="----------"
              className="w-full h-auto block mb-6 mt-22"
            />
          </div>
          {/* ---------- Image + Text section ---------- */}

          <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
            “давайте Галя я Вам погадаю...”
          </h4>

          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-[16px]">
            <p className="mb-8">
              Наступает лето. На даче очень симпатичная соседка Екатерина Ивановна, в прошлом врач психиатор зовёт меня к себе и говорит: “давайте Галя я Вам погадаю”. Ее сестра Вера Ивановна, говорит: “Екатерина Ивановна гадает только тем, кому особенно симпатизирует”. Раскидала Екатерина Ивановна карты, подумала, помолчала и потом грустно так сказала: “Знаете Галя, я Вам ничего не скажу”. 
            </p>
          </div>

          {/* ---------- Image + Text section ---------- */}


            {/* ---------- desktop ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
            <img
              src="images/desktop-images/sammer-house-desktop.jpg"
              alt="------------"
                className="w-full h-auto block mb-6 mt-22 hidden sm:block"
            />
              {/* ---------- mobile ---------- */}
              <img
              src="images/mobile-images/summer-house-mobile.jpg"
              alt="------------"
             
              className="w-full h-auto block mb-4 sm:hidden"
            />
            <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
              <p className="mb-8">
                ---------------------------
              </p>
            </div>
          </div>
          {/* ---------- Image + Text section ---------- */}

          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-[16px]">
            <p className="mb-8">
            Лето кончилось. Возвращаемся в Москву. Узнаем, что политика изменилась и Америка не принимает еврейских эмигрантов.
            </p>

            <p className="mb-8">
            Таким образом возникает Израиль. 
            Начинаю интересоваться страной, о которой кроме как “израильская военщина”, преступные действия сионистов” и тому подобное ничего другого не слышала. 
            </p>

            <p className="mb-8">
            Хожу на различные мероприятия, где можно услышать об Израиле, знакомлюсь с отказниками, они приглашают на встречи с израильтянами. Запомнилось, что у любого, кого я спрашивала об Израиле первым делом появлялась улыбка, улыбка как при взгляде на что-то очень приятное и милое.  
            </p>

            <p className="mb-8">
           Почему-то меня не интересовали “полезные” советы, 
           я только спрашивала : “А я там не пропаду?”
            </p>
          </div>

          <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
           журнале “Огонёк” 
          </h4>

          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-[16px]">
            <p className="mb-8">
            И тут происходит знаменательное событие. В конце 1989 года в Израиле приземляется угнанный из СССР самолёт. 
            В журнале “Огонёк” появляется репортаж с фотографиями.
            </p>
            <p className="mb-8">
            Меня поразили израильские военные охраняющие аэропорт и встречающие угнанный самолёт. Спокойные, уверенные профессионалы. И все было сделано исключительно аккуратно и с достоинством. Угонщиков передали советским властям на условии, что к ним не будет применена исключительная мера наказания - расстрел которая применялась в Советском Союзе. 
            </p>
            <p className="mb-8">
           Причина такого требования состояла в том, что в законодательстве Израиля нет смертной казни. 
            </p>
            <p className="mb-8">
            Помню этот журнал у нас на кафедре в комнате для совещаний. Все подходили, смотрели и уважительное выражение появлялось на лицах. 
            </p>
          </div>

          {/* ---------- Text ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px] text-center">
            <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
             Вот наверное в этот момент и произошёл во мне перелом. 
             Я в Израиль не от безвыходности, а с благодарностью и радостью, что есть такая страна и она готова принять меня и мою семью.
            </h4>
          </div>
        </div>
      </section>

      {/* ---------- FULL-WIDTH IMAGE ONLY ---------- */}
      <div className="w-full overflow-hidden">

         {/* ---------- desktop ---------- */}
        <img
          src="images/desktop-images/bet-shemesh-hills-desktop.webp"
          alt="Живописная гора возле Бейт-Шемеша"
          className="w-full h-auto hidden sm:block"
        />
           {/* ---------- mobile ---------- */}
           <img
          src="images/mobile-images/bet-shemesh-hills-mobile.webp"
          alt="Живописная гора возле Бейт-Шемеша"
          className="w-full h-auto mb-4 block sm:hidden"
        />
      </div>
      {/* ---------- Image + Text section ---------- */}

      <div className="flex justify-center gap-4 mt-24">
        <BackwardButton />
        <ForwardButton />
      </div>

      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
      <ChapterSectionDesktop />

      {/* ---------- Chapters Section (mobile only) ---------- */}
      <ChapterSectionMobile />

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default DecisionToLeave;
