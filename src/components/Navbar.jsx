import React from "react";

const Navbar = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-[#9399F0] to-[#2C192C] h-20 font-[Roboto] ">
      <div className="flex items-center justify-between h-full px-6 text-white">

        {/* ---------- Desktop Navigation Links ---------- */}
        <div className="hidden space-x-5 text-xl lg:flex md:text-lg lg:text-[22px] navbartop">
          <a href="/index.html" className="px-6 text-white hover:text-gray-400">
            главная страница
          </a>
          <span className="text-white rotate-[35deg]">|</span>
          <a
            href="/index.html#link-to-four-chapters-desktop"
            className="px-6 text-white hover:text-gray-400"
          >
            списки глав
          </a>
          <span className="text-white rotate-[35deg]">|</span>
          <a
            href="/contact-me.html"
            className="px-6 text-white hover:text-gray-400"
          >
            свяжитесь со мной
          </a>

          {/* ---------- Language toggle in desktop nav ---------- */}
          <div className="inline-flex ml-6 gap-2">
            <button
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded ${lang === "ru" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
            >
              Русский
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
            >
              English
            </button>
          </div>
        </div>

        {/* ---------- Hamburger Icon ---------- */}
        <div
          onClick={toggleMenu}
          className="z-40 flex flex-col items-center justify-center w-8 h-8 space-y-1 cursor-pointer lg:hidden group"
        >
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          ></div>
        </div>

        {/* ---------- Mobile Dropdown Menu ---------- */}
        <div
          className={`lg:hidden absolute top-16 left-4 w-80 bg-[#362222] shadow-2xl shadow-black/40 font-['Roboto'] text-white p-6 rounded-lg transition-transform duration-300 ease-in-out origin-top ${
            menuOpen ? "scale-y-100" : "hidden scale-y-0"
          }`}
        >
          <div className="flex flex-col divide-y divide-white divide-opacity-20">
            <a href="/index.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              Главная Страница
            </a>
            <a href="#link-to-four-chapters-mobile" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              списки глав
            </a>
            <a href="/contact-me.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              cвяжитесь со мной
            </a>
            <a href="/1-why-i-left.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              <span className="font-bold">часть 1</span> – Почему я уехала
            </a>
            <a href="/4-we-arrived-in-israel.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              <span className="font-bold">часть 2</span> – Прилетели мы в Израиль
            </a>
            <a href="/8-mashas-first-days-in-israel.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              <span className="font-bold">часть 3</span> – Mоя Маша
            </a>
            <a href="/9-my-mothers-story-through-her-letters.html" className="py-[15px] active:scale-95 active:bg-white/10 transition-transform duration-150 ease-in-out">
              <span className="font-bold">часть 4</span> – Mоя мама
            </a>
          </div>

          {/* Language toggle for mobile */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setLang("ru")}
              className={`px-3 py-1 rounded ${lang === "ru" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
            >
              Русский
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${lang === "en" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
