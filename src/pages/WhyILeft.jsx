import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import TextFirstPage from "../components/TextFirstPage.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import BackwardButton from "../components/BackwardButton.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";
import Footer from "../components/Footer.jsx";

const textsWhyILeft = {
  ru: {
    h1: "И я промолчала...",
    paragraphs1: [
      "В конце 70-годов мы с мужем хотели поехать к морю с выздоравливающим ребёнком не «дикарем», а по путевке - с гарантированным жильем и питанием. Такие путевки можно было купить («получить») только в профсоюзах на работе. У мужа на работе сказали, что у них нет. Я пошла в свой факультетский профком. Там мне сказали, что и у них таких путёвок нет и посоветовали пойти в объединённый профком университета.",
      "Там ко мне отнеслись сочувственно и предложили 2 путевки на выбор. Честно говоря, обе они были не очень и я спросила могу ли подумать. И тут профсоюзный деятель произнёс фразу, которую я до сих пор не могу забыть. Он сказал: “думайте, только не очень долго. Вы же понимаете, что это не для вас предназначено.” Он так и сказал: “вы же понимаете”. Я к тому времени проработала в университете 10 лет, ни разу не пользовалась профкомовскими путевками. По формальным критериям они да были предназначены для меня. А профкомовский деятель, посмел сказать, не опасаясь, не стесняясь, прямым текстом , что путевки для блатных, для «нужных», для «своих» людей и что я должна это понимать.",
      "Профком и деятель были последняя и единственная возможность свозить ребёнка к морю в более сносных условиях. И я промолчала..."
    ],
    imageTextSections: [
      {
        desktopSrc: "images/desktop-images/Moscow-State-University-01-desktop.jpg",
        mobileSrc: "images/mobile-images/Moscow-State-University-01-mobile.jpg",
        alt: "Moscow State University",
        text: "Московский государственный университет (МГУ), официально — Московский государственный университет имени М. В. Ломоносова — где я училась и работала"
      },
      {
        desktopSrc: "images/desktop-images/Moscow-State-University-02-desktop.jpg",
        mobileSrc: "images/mobile-images/MoscowUniversity02-mobile.jpg",
        alt: "Moscow State University",
        text: "Вот я посередине, спускаюсь по ступеням моего московского университета — во время одной из наших поездок в Москву, в Москве 2000-х. …и мои университетские ордена МГУ."
      },
      {
        desktopSrc: null,
        mobileSrc: "images/mobile-images/MoscowUniversity03-mobile.jpg",
        alt: "Moscow State University",
        text: "…и мои университетские ордена МГУ."
      },
      {
        desktopSrc: null,
        mobileSrc: "images/matveevskaya-street.jpg",
        alt: "------------",
        text: "Наш подъезд в Москве"
      }
    ]
  },
  en: {
    h1: "And I remained silent...",
    paragraphs1: [
      "At the end of the 1970s, my husband and I wanted to go to the sea with our recovering child not as 'wild tourists,' but through a voucher — with guaranteed accommodation and meals. Such vouchers could only be obtained through workplace trade unions. At my husband's workplace, they said they didn’t have any. I went to my faculty trade union. They told me they didn’t have any either and advised me to go to the university’s central trade union.",
      "There, they treated me sympathetically and offered 2 vouchers to choose from. Honestly, neither was very good, and I asked if I could think about it. Then the union official said a phrase I still cannot forget. He said: 'Think, but not too long. You understand, this is not intended for you.' He literally said: 'You understand.' By that time, I had worked at the university for 10 years and never used any union vouchers. By formal criteria, they were indeed meant for me. But the union official dared to say openly, without fear or shame, that the vouchers were for the well-connected, for the 'important' people, and that I should understand this.",
      "The union and the official were the last and only chance to take the child to the sea in better conditions. And I remained silent..."
    ],
    imageTextSections: [
      {
        desktopSrc: "images/desktop-images/Moscow-State-University-01-desktop.jpg",
        mobileSrc: "images/mobile-images/Moscow-State-University-01-mobile.jpg",
        alt: "Moscow State University",
        text: "Moscow State University (MSU), officially Moscow State University named after M.V. Lomonosov — where I studied and worked"
      },
      {
        desktopSrc: "images/desktop-images/Moscow-State-University-02-desktop.jpg",
        mobileSrc: "images/mobile-images/MoscowUniversity02-mobile.jpg",
        alt: "Moscow State University",
        text: "Here I am in the middle, descending the steps of my Moscow university — during one of our trips to Moscow in the 2000s. …and my university awards from MSU."
      },
      {
        desktopSrc: null,
        mobileSrc: "images/mobile-images/MoscowUniversity03-mobile.jpg",
        alt: "Moscow State University",
        text: "…and my university awards from MSU."
      },
      {
        desktopSrc: null,
        mobileSrc: "images/matveevskaya-street.jpg",
        alt: "------------",
        text: "Our entrance in Moscow"
      }
    ]
  }
};

const WhyILeft = () => {
  const [lang, setLang] = useState("ru");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

      {/* Desktop Hero */}
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white [&>h1]:text-[4vw] [&>h2]:text-[6vw] [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16 [&>p]:text-[1.25vw] [&>p]:mt-6 md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]">
            <TextFirstPage lang={lang} />
          </div>
        </div>
      </div>

      {/* Tablet Hero */}
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[85%] px-2 sm:px-4 [&>h1]:text-[4vw] [&>h2]:text-[7vw] [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12 [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed">
            <TextFirstPage lang={lang} />
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[95%] sm:w-[98%] [&>h1]:text-[clamp(20px,8vw,60px)] [&>h2]:text-[clamp(40px,7vw,45px)] [&>h3]:text-[clamp(23px,6vw,35px)] [&>h3]:mt-16 [&>h3]:mb-16 [&>p]:text-[clamp(16px,5vw,25px)] [&>p]:mt-8">
            <TextFirstPage lang={lang} />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <section className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] mb-8">
            {textsWhyILeft[lang].h1}
          </h1>
          <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
            {textsWhyILeft[lang].paragraphs1.map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>

          {/* Image + Text Sections */}
          {textsWhyILeft[lang].imageTextSections.map((section, i) => (
            <div key={i} className="max-w-[720px] mx-auto mt-[48px]">
              {section.desktopSrc && (
                <img
                  src={section.desktopSrc}
                  alt={section.alt}
                  className="w-full h-auto block mb-6 mt-22 hidden sm:block"
                />
              )}
              {section.mobileSrc && (
                <img
                  src={section.mobileSrc}
                  alt={section.alt}
                  className="w-full h-auto block mb-4 sm:hidden"
                />
              )}
              <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                <p className="mb-8">{section.text}</p>
              </div>
            </div>
          ))}

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-24">
            <BackwardButton />
            <ForwardButton />
          </div>
        </div>
      </section>

      {/* Chapters */}
      <ChapterSectionDesktop />
      <ChapterSectionMobile />

      <Footer />
    </>
  );
};

export default WhyILeft;
