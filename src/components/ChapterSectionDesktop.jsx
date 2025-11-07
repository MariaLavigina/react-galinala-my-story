import React from "react";

const chapters = [
  { number: "01", title: "Почему я уехала", img: "images/heading-chapter01.webp", link: "#" },
  { number: "02", title: "Прилетели мы в Израиль", img: "images/heading-chapter02.webp", link: "#" },
  { number: "03", title: "Mоя Маша", img: "images/heading-chapter03.webp", link: "#" },
  { number: "04", title: "Mоя мама", img: "images/heading-chapter04.webp", link: "#" },
];

const ChapterSectionDesktop = () => {
  return (
    <div className="relative w-full hidden md:block overflow-hidden">
      {/* SVG Background */}
      <img
        src="images/desktop-images/all-chapters-wave.svg"
        alt="All Chapters Wave"
        className="w-full h-auto block"
      />

      {/* Content centered over SVG */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16 py-12">
        
       
        

        {/* Chapters Grid */}
        <div className="flex justify-center gap-6 flex-wrap w-full max-w-[95vw]">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="flex flex-col items-center text-center w-[21%]">
              
              {/* Chapter Number */}
              <h1 className="text-[clamp(36px,5vw,60px)] font-bold mb-1 text-white">
                {chapter.number}
              </h1>

              {/* Chapter Title */}
            <h2 className="text-sm md:text-[0.7rem] lg:text-[1.2rem] xl:text-[1.7rem] mb-2 text-white break-words min-h-[50px]">
            {chapter.title}
            </h2>



              {/* Button */}
<a href={chapter.link} className="mb-2 mt-10 w-full flex justify-center">
  <div
    className="
      group relative rounded-full text-white font-['Roboto'] bg-white/10 backdrop-blur-md border border-white/30 
      tracking-wide transition-all duration-300 ease-in-out 
      hover:bg-white/20 hover:scale-[1.03] active:bg-white/30 
      px-6 py-3 text-sm lg:px-5 lg:py-2.5 lg:text-sm xl:px-6 xl:py-3 xl:text-base 2xl:px-7 2xl:py-3.5 2xl:text-lg text-center
    "
  >
    Читать далее
  </div>
</a>


              {/* Chapter Image */}
              <a href={chapter.link} className="block w-full mt-2">
                <img
                  src={chapter.img}
                  alt={chapter.title}
                  className="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterSectionDesktop;
