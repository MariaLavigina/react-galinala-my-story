import React from "react";
import  ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import TextSecondPage from "../components/TextSecondPage.jsx";



const WeArrived = () => {
  return (
    <>
     <Navbar /> 
     <div className="h-20"></div>
      {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/chapter02-desktop.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[300px]">
          <img
            src="images/desktop-images/entroChapter-arrivedToIsrael-desktop.svg"
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
  <TextSecondPage />
</div>
</div>
</div>
      
      {/* -------- end of desktop-only hero -------- */}




      {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/mobile-images/chapter02-arrived-to-israel-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[120px]">
          <img
            src="images/ipad-images/chapter2-arrived.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[85%]  px-2 sm:px-4 
                       [&>h1]:text-[4vw] [&>h2]:text-[7vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12 
                       [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed"
    
          >
            <TextSecondPage />
          </div>
        </div>
      </div>
      {/* -------- end of tablet-only hero -------- */}









      {/* ---------- Mobile-only Hero section ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/chapter02-arrived-to-israel-mobile.webp"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[70px]">
          <img
            src="images/mobile-images/entro-secondPage-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white 
                       w-[95%] sm:w-[98%] 
                       [&>h1]:text-[clamp(23px,9vw,60px)]
                       [&>h2]:text-[clamp(40px,7vw,45px)]
                       [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16
                       [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8"
     
          >
            <TextSecondPage />
          </div>
        </div>

      </div>
      {/* -------- end of mobile-only hero -------- */}










      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className=" px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ">
        <div className="max-w-[720px] mx-auto ">
         

          <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] ">
          <p className= "mb-8" >
          Израиль встречал нас улыбками, детишек одарили сладостями. Пока оформлялись первые документы, нам предложили сделать бесплатный звонок своим близким в Россию. Мы с мамой позвонили Игорю. Затем наши вещи погрузили  в такси, спросили нас куда вести и мы поехали в Реховот, где, всегда готовые придти на помощь, Магазанники сняли нам квартиру. 
          </p>
      
           </div>




{/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/teudatOle.jpg"
    alt="-------"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
   Свидетельство репатрианта, (תעודת עולה)
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}



           <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
           Водитель, как сейчас я понимаю,  не был знаком с городом и ,по всей видимости, запомнить адрес тоже не мог. Он останавливался у каждого фонаря ( было уже темно) , подносил записку с адресом к свету, сверял её с номером ближайшего дома и названием улицы и ехал до следующего фонаря. 
          </p>

            <p className="mb-8">
           Нас встречала Наташа Магазанник , она помогла нам с вещами. Было уже 2 часа ночи Наташа пожелала нам спокойной ночи и пошла к себе, жила она неподалёку в 15-20 минутах ходьбы. Кстати, заметьте - 2 часа ночи, а женщина одна, абсолютно безбоязненно идёт по улице. 
          </p>

            <p className="mb-8">
            Я до сих пор не могу к этому привыкнуть и мне доставляет особенное удовольствие выйти ночью одной на улицу. Мне как то в голову недавно пришло, что я забыла бояться входить в свой подъезд в позднее время и не оглядываться на шаги у меня за спиной. В Москве после 10 вечера меня всегда кто-нибудь встречал у остановки автобуса.
          </p>
    
     
          </div>


              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-20 mt-20">
       Вот она страна, которая непостижимым образом снилась мне.
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
          Мама с Машей легли спать, а я, перед тем как лечь, решила обойти дом и проверить, всё ли в порядке. И вот тут произошло нечто такое, о чём не могу не рассказать.
          </p>

            <p className="mb-8">
          Ещё в Москве мне одно время снились сны: будто вхожу я в лабораторию, вижу у плинтуса таракана, сыплю на него порошок — и вдруг у таракана со щелчком раскрываются крылья, и он летит. Эти сны повторялись, настойчиво. Я даже начала спрашивать у знакомых — бывают ли летающие тараканы? Никто ничего не знал. Все только смеялись.
          </p>
             <p className="mb-8">
            И вот, в Израиле, в первую же ночь я вижу на верхнем кухонном шкафчике таракана. Влезаю на табуретку, собираюсь аккуратно снять его салфеткой — и вдруг, как в моих снах: щёлк — крылья раскрылись, и таракан полетел. Я чуть не свалилась с табуретки.
          </p>
             <p className="mb-8">
            Вот она — страна, которая непостижимым образом снилась мне.
          </p>

          </div>


        {/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/desktop-images/cockroch01-desktop.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
     Серия машиных рисунков под впечатлением от израильских тараканов. Реховот 1991 год
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}


           
              <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
          “Тагиди бевакаша эйфо купат холим”
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
             На следующий день пришла Наташа Магазанник, рассказала, что надо нам сделать в первую очередь. Почти везде она меня сопровождала и казалось мне, что она уже давно в стране и все ей тут понятно и все она тут знает.  А приехала она всего за три месяца до меня, знала на иврите, по-моему, лишь одно слово “беседер”. Но знала его твёрдо и этим одним словом открывала все двери. Н.А. Магазанник сводил меня в банк, помог открыть счёт. 
          </p>
               <p className="mb-8">
            А в купат холим я пошла сама. Русскоязычные соседи объяснили мне дорогу. Я всю дорогу повторяла фразу, которой они меня научили, если придётся спросить дорогу: “Тагиди бевакаша эйфо купат холим”. В купат холим сразу поняли, что я ола хадаша и сделали все, что нужно.
          </p>
               <p className="mb-8">
            В этих первых шагах в Израиле я удивлялась, как много совсем незнакомых, разных людей были готовы придти на помощь. Было даже модно иметь опекаемую семью олим. Я как то спросила, чем я могу отплатить за помощь. И мне ответили: “Ты поможешь следующим олим хадашим”. Помню и стараюсь, по мере сил. 
          </p>
               <p className="mb-8">
            Вспоминаю, как я поехала в Тель-Авив за документами. Советское государство не позволяло нам взять с собой наши документы, но мы могли их принести в Голландское посольство и дипломатической почтой их отправляли в Израиль.
          </p>
          </div>



                 {/* ---------- Image + Text section ---------- */}
<div className="max-w-[720px] mx-auto mt-[48px]">
  <img
    src="images/desktop-images/first-days-in-israel.webp"
    alt="------------"
    className="w-full h-auto block mb-6 mt-22 "
  />
  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
    <p className="mb-8">
     Наши первые фото в нашем первом городе. Реховот 1991год
    </p>
  </div>
</div>
{/* ---------- Image + Text section ---------- */}





           <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
            первый раз в Тель-Авиве
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
         И вот, я первый раз в Тель-Авиве. По карте ищу здание МВД. Хочу сама найти. Мне интересно самой найти. Но как только разворачиваю карту, сразу же кто-то оказывается рядом: “Вам помочь?” 
          </p>
                <p className="mb-8">
         В этом самом МВД пережила я трагикомическое приключение. Вхожу в лифт, нажимаю на кнопку, лифт доезжает до нужного этажа, останавливается, а двери, о ужас, двери не открываются. Боже, сегодня пятница! Значит сидеть мне здесь и сегодня и завтра. Автобусы пойдут только в воскресенье. А мама и Маша одни в Реховоте, что с ними будет?! Полное отчаяние. И тут, хотя понимаю, что глупость, но все же толкаю дверь. И ... она открывается. Нелепое мое поведение в Тель-Авивском лифте объясняется тем, что я привыкла к университетским лифтам, двери которых открывались автоматически. 
          </p>
          </div>


           <h4 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px]  mb-8 mt-20">
        "В окружении близких, хоть и незнакомых"
          </h4>

                  <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            <p className="mb-8">
            Дочь маминой подруги Женя Финикова написала о нас нескольким своим знакомым живущим в Израиле. Лина была та, что мгновенно пришла к нам. Она не только стала помогать нам во всем, чем только могла, но и стала нам очень близким, дорогим человеком. Она же привела к нам Маю - и это было сплошное счастье. 
          </p>
                <p className="mb-8">
         
            Благодаря им, мы оказались в среде “русских” олим 70-х годов, очень близких нам по духу. Мне даже порой казалось, что я никуда не уезжала, так привычна была для нас с мамой эта среда.  В некоторых я даже видела сходство с людьми из той моей жизни. 
          </p>
          </div>







    {/* ---------- Text ---------- */}
          <div className="max-w-[720px] mx-auto mt-[48px]">
            <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
         Пришёл Яник, сын Маи, и сказал: - Давайте я вас сфотографирую. 
Маша чинно села на скамеечку посередине. И тут прибежала одна
девочка и крикнула - Я тоже хочу! - и села рядом с Машей.А за ней
- другая, потом ещё одна, и ещё… Все по очереди плюхались на
скамеечку. Маша вежливо уступала им место, сдвигалась, пока в
 конце концов не оказалась на самом её краешке.
            </h4>
              <h4 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8 mt-20">
              Наши первые фото в нашем первом городе. Реховот 1991 год
            </h4>
              <img
    src="images/Masha-and-the-kids-Rehovot.jpg"
    alt="------------"
    className="w-full h-auto block mb-6 mt-22 "
  />
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

export default WeArrived;
