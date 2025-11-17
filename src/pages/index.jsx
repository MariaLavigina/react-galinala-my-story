import React, { useState } from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import TextTwoIndexOnly from "../components/TextTwoIndexOnly.jsx";
import TextThreeIndexOnly from "../components/TextThreeIndexOnly.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer.jsx';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";

const texts = {
  ru: {
    h1: "Вот они эти три женщины",
    h2: "Для кого это написанно?",
    paragraphs1: [
      "Для Маши. Она не уехала, ее увезли. Для ее семьи. Они, британцы, не имеют представления ни о Советском Союзе, ни об Израиле, ни о том, что значит быть олим ходашим ми Русия в Израиле. На сколько Европа и мы имеем разную историю одних и тех же событий мне пришло в голову, когда я сказала новым своим родственникам: мое свидетельство о рождении выдано в первый день Второй Мировой войны и меня спросили : сентябрь1939-ого. Вот так, для нас это июнь 1941-ого, а их уже 2 года бомбят. И немного для тех, кто в России.",
      "Маша давно и упорно просила: \"Пиши, как всё это было\". Даже тетрадку для этого купила - очень красивую. Я начала писать и время от времени читала Маше. И однажды она сказала: \"Я хочу сделать из этого фильм.\" Мы начали снимать, но, увы, вскоре пришли к выводу: Маша - не Стивен Спилберг, а я - не Морган Фриман. Так родился этот сайт \"Каждый выбирает для себя\". Я ходила и бормотала эти стихи  (\"Каждый выбирает для себя\" стихи Юрия Левитанского)  то так, то сяк. И вдруг осознала - ну так я последние зо лет и живу в стране где у человека действительно есть выбор. Он - и только он - решает: \"Дьяволу cлужить или пророку...\" Я не хочу сказать что в Израиле нет жуликов, ловкачей и прочих. Но в Израиле есть возможность жить без всего этого, и при этом не нужно быть ни героем, ни борцом, а просто - в лучшем смысле этого слова - обывателем.",
      "У нас есть возможность. Именно возможность. И уже наше дело - воспользоваться ею или нет."
    ],
    h3: "Моя история состоит из четырёх частей.",
    paragraphs2: [
      "Первая глава рассказывает о том, как ко мне пришло ощущение невозможности продолжать жить в России - стране с её законами, а точнее, с беззаконием, где несчастное, унижаемое на каждом шагу общество забыло о чувстве собственного достоинства.",
      "Вторая глава посвящена нашему новому началу в другой стране - жизни, полной испытаний, но также чудес, красоты и открытий. Это была земля, где нам пришлось строить всё с нуля, но каждый маленький шаг вперёд ощущался как настоящая победа.",
      "Третья глава принадлежит моей маме. Через её письма вы увидите наш путь её глазами. Эти письма совсем не похожи на послания старой, очень больной женщины, оказавшейся на склоне лет в совершенно ином мире: другой климат, еда, одежда, праздники - да и вообще всё, всё другое. Она нисколько не растеряна, с радостью подмечает всё хорошее, не жалуется и не сетует на вполне естественные трудности.",
      "И, наконец, последняя глава - это сборник маленьких историй, рассказанных моей дочерью, - порой забавных, порой трогательных."
    ]
  },
  en: {
    h1: "Here are these three women",
    h2: "Who is this for?",
    paragraphs1: [
      "For Masha. She didn’t leave, she was taken. For her family. They, British, have no idea about the Soviet Union, Israel, or what it means to be Olim Chodashim from Russia in Israel. I realized how Europe and we have different histories of the same events when I told my new relatives: my birth certificate was issued on the first day of World War II and they asked me: September 1939. For us, it’s June 1941, and for them, they have already been bombed for 2 years. And a bit for those in Russia.",
      "Masha long insisted: \"Write how it all happened.\" She even bought a notebook for it - very beautiful. I started writing and sometimes read it to Masha. One day she said: \"I want to make a film from this.\" We started filming, but soon realized: Masha is not Steven Spielberg, and I am not Morgan Freeman. Thus this website 'Everyone chooses for themselves' was born. I muttered these poems ('Everyone chooses for themselves' by Yuri Levitansky) here and there. And then I realized - well, I’ve been living in a country for the last 30 years where a person really has a choice. He alone decides: \"Serve the devil or the prophet...\" I don’t mean there are no cheats in Israel, but in Israel there is a possibility to live without all that, and you don’t need to be a hero or a fighter, just an ordinary citizen in the best sense.",
      "We have an opportunity. Really an opportunity. And now it’s up to us whether to use it or not."
    ],
    h3: "My story has four parts.",
    paragraphs2: [
      "The first chapter describes how I felt it impossible to continue living in Russia - a country with its laws, or rather lawlessness, where a miserable, humiliated society forgot its own dignity.",
      "The second chapter is about our new beginning in another country - a life full of trials but also wonders, beauty, and discoveries. It was a land where we had to build everything from scratch, but every small step forward felt like a true victory.",
      "The third chapter belongs to my mother. Through her letters, you will see our path through her eyes. These letters are nothing like the messages of an old, very sick woman in a completely different world: different climate, food, clothes, holidays - in fact, everything is different. She is not confused, noticing all the good with joy, without complaints or laments over ordinary difficulties.",
      "Finally, the last chapter is a collection of small stories told by my daughter - sometimes funny, sometimes touching."
    ]
  }
};

const Index = () => {
  const [lang, setLang] = useState("ru"); // default Russian

  return (
    <>
     <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

      {/* ---------- Desktop-only Hero section ---------- */}
      <div className="w-full hidden lg:block">
        <img
          src="images/desktop-images/GL_HeroPhoto_Desktop_withText.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[380px]">
          <img
            src="images/desktop-images/wave-index-entro.svg"
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
            <TextOneOnly lang={lang} />
          </div>
        </div>

        <div className="text-center text-white mt-8 px-4 max-w-[920px] mx-auto [&>h2]:text-[3vw]">
          <TextTwoIndexOnly lang={lang} />
        </div>

        <div className="relative w-full hidden lg:block mt-8 text-white">
          <img
            src="images/desktop-images/second-wave-index-desktop.svg"
            alt="Wave Two"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className=" [&>h1]:text-[5vw] [&>h1]:mt-8 [&>h2]:text-[2.5vw] [&>h2]:mt-8 [&>p]:text-[1.5vw] [&>p]:mt-8">
              <TextThreeIndexOnly lang={lang} />
            </div>
          </div>
        </div>
      </div>
      {/* -------- end of desktop-only hero -------- */}

      {/* ---------- Tablet-only Hero section ---------- */}
      <div className="hidden md:block lg:hidden w-full">
        <img
          src="images/ipad-images/GL-HeroPhoto-ipad.jpg"
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[85%] px-2 sm:px-4 [&>h1]:text-[5vw] [&>h2]:text-[11vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12 [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed"
          >
            <TextOneOnly lang={lang} />
          </div>
        </div>

        <div className="text-center text-white mt-8 px-4 max-w-[720px] mx-auto [&>h2]:text-[3.4vw]">
          <TextTwoIndexOnly lang={lang} />
        </div>

        <div className="relative hidden md:block lg:hidden w-full mt-8 text-white">
          <img
            src="images/desktop-images/second-wave-index-desktop.svg"
            alt="Wave Two"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className=" [&>h1]:text-[5vw] [&>h1]:mt-16 [&>h2]:text-[2.5vw] [&>h2]:mt-8 [&>p]:text-[2vw] [&>p]:mt-8">
              <TextThreeIndexOnly lang={lang} />
            </div>
          </div>
        </div>
      </div>
      {/* -------- end of tablet-only hero -------- */}

      {/* ---------- Mobile-only Hero section ---------- */}
      <div className="block md:hidden w-full">
        <img
          src="images/mobile-images/GL-HeroPhoto-Mobile.jpg"
          alt="Hero"
          className="w-full h-auto block"
        />
        <div className="relative w-full -mt-[100px]">
          <img
            src="images/mobile-images/wave-index-entro-mobile.svg"
            alt="Wave"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[95%] sm:w-[70%] [&>h1]:text-[clamp(23px,8vw,80px)] [&>h2]:text-[clamp(65px,14vw,200px)] [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16 [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8">
             <TextOneOnly lang={lang} />
          </div>
        </div>

        <div className="text-center text-white mt-8 px-4 max-w-[720px] mx-auto [&>h2]:text-[6vw]">
          <TextTwoIndexOnly lang={lang} />
        </div>

        <div className="mt-8 relative">
          <img
            src="images/mobile-images/secondWave-index-mobile.svg"
            alt="Additional Image"
            className="w-full h-auto block"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[93%] sm:w-[75%] [&>h1]:text-[clamp(28px,9vw,85px)] sm:[&>h1]:text-[clamp(40px,12vw,110px)] [&>h2]:text-[clamp(20px,7vw,70px)] [&>h2]:mt-4 [&>h2]:mb-16 sm:[&>h2]:text-[clamp(30px,10vw,90px)] [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16 sm:[&>h3]:text-[clamp(28px,8vw,50px)] [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8 sm:[&>p]:text-[clamp(25px,8vw,40px)] sm:[&>p]:mt-8">
            <TextThreeIndexOnly lang={lang} />
          </div>
        </div>
      </div>
      {/* -------- end of mobile-only hero -------- */}

      {/* ---------- Text section below SVG (same for all) ---------- */}
      <section className=" px-[16px] sm:px-[24px] md:px-[32px] mt-[48px] ">
        <div className="max-w-[720px] mx-auto text-center">
          <h1 className=" text-white text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px]  mb-8">
            {texts[lang].h1}
          </h1>

          <img
            src="images/desktop-images/threeWomen-desktop.jpg"
            alt="------------"
            className="w-full h-auto hidden sm:block mb-16"
          />
          <img
            src="images/mobile-images/threeWomen-mobile.webp"
            alt="--------------"
            className="w-full h-auto block mb-16 sm:hidden"
          />

          <h2 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px]  mb-8">
            {texts[lang].h2}
          </h2>

          <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] ">
            {texts[lang].paragraphs1.map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>

          <h3 className=" text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px]  mb-8 mt-20">
            {texts[lang].h3}
          </h3>

          <div className=" text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  mb-[16px]">
            {texts[lang].paragraphs2.map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>

          <div className="flex justify-center mt-24">
            <ForwardButton />
          </div>
        </div>
      </section>

      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
      <div className="">
        <ChapterSectionDesktop />
      </div>

      {/* ---------- Chapters Section (mobile only) ---------- */}
      <div className="">
        <ChapterSectionMobile />
      </div>

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default Index;

