import React from "react";
import { Link } from "react-router-dom";

const chapters = {
  ru: [
    { number: "01", title: <>Почему я <br />уехала</>, img: "images/heading-chapter01.webp", link: "/why-i-left" },
    { number: "02", title: <>Прилетели мы <br />в Израиль</>, img: "images/heading-chapter02.webp", link: "/we-arrived" },
    { number: "03", title: <>Mоя <br />Маша</>, img: "images/heading-chapter03.webp", link: "/mashas-first-days" },
    { number: "04", title: <>Mоя <br />мама</>, img: "images/heading-chapter04.webp", link: "/mothers-story" },
  ],
  en: [
    { number: "01", title: <>Why I <br />left</>, img: "images/heading-chapter01.webp", link: "/why-i-left" },
    { number: "02", title: <>We arrived <br />in Israel</>, img: "images/heading-chapter02.webp", link: "/we-arrived" },
    { number: "03", title: <>My <br />Masha</>, img: "images/heading-chapter03.webp", link: "/mashas-first-days" },
    { number: "04", title: <>My <br />mother</>, img: "images/heading-chapter04.webp", link: "/mothers-story" },
  ],
  he: [
    { number: "01", title: <>למה <br />עזבתי</>, img: "images/heading-chapter01.webp", link: "/why-i-left" },
    { number: "02", title: <>הגענו <br />לישראל</>, img: "images/heading-chapter02.webp", link: "/we-arrived" },
    { number: "03", title: <>הבת שלי <br />מאשה</>, img: "images/heading-chapter03.webp", link: "/mashas-first-days" },
    { number: "04", title: <>אמא <br />שלי</>, img: "images/heading-chapter04.webp", link: "/mothers-story" },
  ],
};

const buttonText = {
  ru: "читать далее",
  en: "Read more",
  he: "לקרוא עוד",
};

const ChapterSectionMobile = ({ lang = "ru" }) => {
  const currentChapters = chapters[lang];

  return (
    <div className="relative w-full block md:hidden overflow-hidden mt-4">
      {/* SVG Background */}
      <img
        src="images/mobile-images/index-chapters-mobile.svg"
        alt="All Chapters Wave"
        className="w-full h-auto block"
      />

      {/* Content vertically centered over the SVG */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-12">
        {currentChapters.map((chapter) => (
          <div key={chapter.number} className="flex flex-col items-center text-center w-full">
            {/* Text container limited to 95% */}
            <div className="w-[95%] mx-auto flex flex-col items-center">
              {/* Chapter Number */}
              <h1 className="text-[5rem] sm:text-[7rem] font-bold mb-2 text-white">
                {chapter.number}
              </h1>

              {/* Chapter Title */}
              <h2 className="text-[2rem] sm:text-[4rem] mb-4 text-white">
                {chapter.title}
              </h2>

              {/* Button */}
   <Link to={chapter.link} className="mb-4 w-full flex justify-center">
  <div
    className="
      group relative rounded-full text-white font-['Roboto'] bg-white/10 backdrop-blur-md border border-white/30 
      tracking-wide transition-all duration-300 ease-in-out 
      hover:bg-white/20 hover:scale-[1.03] active:bg-white/30 
      px-[clamp(24px,6vw,40px)] py-[clamp(10px,3.5vw,20px)] text-[clamp(1.5rem,5vw,2.5rem)] text-center
    "
  >
    {buttonText[lang]}
  </div>
</Link>
            </div>

            {/* Chapter Image */}
      <Link to={chapter.link} className="block w-full">
  <img
    src={chapter.img}
    alt=""
    className="w-full h-auto block transform transition-transform duration-300 hover:scale-105"
  />
</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterSectionMobile;

