import React from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import TextTwoIndexOnly from "../components/TextTwoIndexOnly.jsx";
import TextThreeIndexOnly from "../components/TextThreeIndexOnly.jsx";
import  ForwardButton from "../components/ForwardButton.jsx";


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


 {/* 3rd text + SVG */}
<div className="relative w-full hidden lg:block mt-8">
  <img
    src="/images/desktop-images/second-wave-index-desktop.svg"
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
{/* 3rd text + SVG */}



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
          <h1 className="text-gray-700 text-[25px] sm:text-[30px] md:text-[33px] lg:text-[35px]  mb-8">
            Вот они эти три женщины
          </h1>

               <img
            src="/images/desktop-images/threeWomen-desktop.jpg"
            alt="Wave"
            className="w-full h-auto block mb-16"
          />

             <h2 className="text-gray-700 text-[25px] sm:text-[30px] md:text-[33px] lg:text-[35px]  mb-8">
            Для кого это написанно?
          </h2>


          <div className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] ">
          <p className= "mb-8" >
           Для Маши. Она не уехала, ее увезли.
           Для ее семьи. Они, британцы, не имеют представления ни о Советском Союзе, ни об Израиле, ни о том, что значит быть олим ходашим ми Русия в Израиле.
           На сколько Европа и мы имеем разную историю одних и тех же событий мне пришло в голову, когда я сказала новым своим родственникам: мое свидетельство о рождении выдано в первый день Второй Мировой войны и меня спросили : сентябрь1939-ого. Вот так, для нас это июнь 1941-ого, а их уже 2 года бомбят. И немного для тех, кто в России.
          </p>
            <p className= "mb-8">
              Маша давно и упорно просила: "Пиши, как всё это было". Даже тетрадку для этого купила - очень красивую. Я начала писать и время от времени читала Маше. И однажды она сказала: "Я хочу сделать из этого фильм." Мы начали снимать, но, увы, вскоре пришли к выводу: Маша - не Стивен Спилберг, а я - не Морган Фриман. Так родился этот сайт "Каждый выбирает для себя". Я ходила и бормотала эти стихи  ("Каждый выбирает для себя" стихи Юрия Левитанского)  то так, то сяк. И вдруг осознала - ну так я последние зо лет и живу в стране где у человека действительно есть выбор. Он - и только он - решает: "Дьяволу cлужить или пророку..." Я не хочу сказать что в Израиле нет жуликов, ловкачей и прочих . Но в Израиле есть возможность жить без всего этого, и при этом не нужно быть ни героем, ни борцом, а просто - в лучшем смысле этого слова - обывателем.
              У нас есть возможность. Именно возможность. И уже наше дело - воспользоваться ею или нет.
          </p>
           </div>


            <h3 className="text-gray-700 text-[25px] sm:text-[30px] md:text-[33px] lg:text-[35px]  mb-8 mt-16">
            Моя история состоит из четырёх частей.
          </h3>




           <div className="text-gray-800 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
          <p className="mb-8">
           Первая глава рассказывает о том, как ко мне пришло ощущение невозможности продолжать жить в России - стране с её законами, а точнее, с беззаконием, где несчастное, унижаемое на каждом шагу общество забыло о чувстве собственного достоинства.   
          </p>
            <p className="mb-8">
             Вторая глава посвящена нашему новому началу в другой стране - жизни, полной испытаний, но также чудес, красоты и открытий. Это была земля, где нам пришлось строить всё с нуля, но каждый маленький шаг вперёд ощущался как настоящая победа.
          </p>
            <p className="mb-8">
             Третья глава принадлежит моей маме. Через её письма вы увидите наш путь её глазами. Эти письма совсем не похожи на послания старой, очень больной женщины, оказавшейся на склоне лет в совершенно ином мире: другой климат, еда, одежда, праздники - да и вообще всё, всё другое. Она нисколько не растеряна, с радостью подмечает всё хорошее, не жалуется и не сетует на вполне естественные трудности.
          </p>
    
            <p className="mb-8">
             И, наконец, последняя глава - это сборник маленьких историй, рассказанных моей дочерью, - порой забавных, порой трогательных.
          </p>
          </div>

         <div className="flex justify-center mt-12">
  <ForwardButton />
</div>

        </div>
      </section>
    </>
  );
};

export default Index;
