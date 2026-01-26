import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);


  // Close mobile menu when clicking outside
React.useEffect(() => {
  const handleClickOutside = (event) => {
    const nav = document.querySelector("nav");
    if (menuOpen && nav && !nav.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, [menuOpen]);
 // Close mobile menu when clicking outside







  const navigate = useNavigate();
  const location = useLocation();

  // Nav link labels in different languages
  const navLabels = {
    ru: ["главная", "оглавление", "связаться со мной"],
    en: ["Home", "Chapters", "Contact Me"],
    he: ["דף הבית", "פרקים", "צור קשר"],
  };

  const chapterLabels = {
    ru: [
      ["часть 1", "Почему я уехала"],
      ["часть 2", "Прилетели мы в Израиль"],
      ["часть 3", "Mоя Маша"],
      ["часть 4", "Mоя мама"],
    ],
    en: [
      ["Part 1", "Why I left"],
      ["Part 2", "We arrived in Israel"],
      ["Part 3", "My Masha"],
      ["Part 4", "My mother"],
    ],
    he: [
      ["חלק 1", "למה עזבתי"],
      ["חלק 2", "הגענו לישראל"],
      ["חלק 3", "הבת שלי מאשה"],
      ["חלק 4", "אמא שלי"],
    ],
  };

  const handleChaptersClick = (e) => {
    e.preventDefault();

    // Pages without local chapters
    const noLocalChapters = ["/contact-me", "/thank-you"];

    if (noLocalChapters.includes(location.pathname)) {
      // Navigate to index and scroll to chapters
      navigate("/", { state: { scrollToChapters: true } });
    } else {
      // Scroll to chapters on the current page
      const desktop = document.getElementById("chapters-desktop");
      const mobile = document.getElementById("chapters-mobile");
      const target = window.innerWidth >= 768 ? desktop : mobile;
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    // If already on index, scroll to top
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Otherwise, normal navigation via Link to "/"
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-[#9399F0] to-[#2C192C] h-20 font-[Roboto]">





      
      <div className="flex items-center justify-between h-full px-6 text-white">

        {/* ---------- Desktop Navigation Links ---------- */}
        <div className="hidden lg:flex items-center space-x-5 text-xl md:text-lg lg:text-[22px] navbartop w-full">
          <div className="flex space-x-5">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="px-6 text-white hover:text-gray-400"
            >
              {navLabels[lang][0]}
            </Link>

            <span className="text-white rotate-[35deg]">|</span>

            <Link
              to="#"
              onClick={handleChaptersClick}
              className="px-6 text-white hover:text-gray-400"
            >
              {navLabels[lang][1]}
            </Link>

            <span className="text-white rotate-[35deg]">|</span>

            <Link to="/contact-me" className="px-6 text-white hover:text-gray-400">
              {navLabels[lang][2]}
            </Link>
          </div>

          {/* ---------- Language toggle in desktop nav ---------- */}
          <div className="hidden lg:flex ml-auto gap-3 text-base pr-2">
            <button
              onClick={() => setLang("ru")}
              className={`w-24 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                lang === "ru" ? "bg-white text-black" : "bg-[#302024] text-white hover:bg-[#433034]"
              }`}
            >
              Русский
            </button>
            <button
              onClick={() => setLang("en")}
              className={`w-24 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                lang === "en" ? "bg-white text-black" : "bg-[#302024] text-white hover:bg-[#433034]"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("he")}
              className={`w-24 py-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                lang === "he" ? "bg-white text-black" : "bg-[#302024] text-white hover:bg-[#433034]"
              }`}
            >
              עברית
            </button>
          </div>
        </div>









<div className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 flex gap-3">
  <button
    onClick={() => setLang("ru")}
    className={`w-11 h-11 rounded-full transition-all duration-200 ease-in-out transform ${
      lang === "ru"
        ? "bg-white text-black"
        : "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 active:shadow-inner"
    }`}
    title="Русский"
  >
    RU
  </button>
  <button
    onClick={() => setLang("en")}
    className={`w-11 h-11 rounded-full transition-all duration-200 ease-in-out transform ${
      lang === "en"
        ? "bg-white text-black"
        : "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 active:shadow-inner"
    }`}
    title="English"
  >
    EN
  </button>
  <button
    onClick={() => setLang("he")}
    className={`w-11 h-11 rounded-full transition-all duration-200 ease-in-out transform ${
      lang === "he"
        ? "bg-white text-black"
        : "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 active:shadow-inner"
    }`}
    title="עברית"
  >
    HE
  </button>
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
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`lg:hidden absolute top-24 left-4 w-80
    bg-[#362222]/90 backdrop-blur-md
    shadow-xl shadow-black/30
    font-['Roboto'] text-white
    p-6 rounded-2xl z-40
    transform transition-all duration-150 ease-out
    ${
      menuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-3 pointer-events-none"
    }
  `}
>
  <div className="flex flex-col divide-y divide-white/15 overscroll-contain">

    {/* Home */}
    <Link
      to="/"
      onClick={handleHomeClick}
      className="
        block
        min-h-[48px]
        py-4
        px-4
        text-lg
        font-semibold
        rounded-xl
        transition-colors duration-150
        hover:text-gray-300
        active:bg-white/10
        touch-manipulation
      "
    >
      {navLabels[lang][0]}
    </Link>

    {/* Chapters */}
    {chapterLabels[lang].map(([part, title], index) => {
      const routes = [
        "/why-i-left",
        "/we-arrived",
        "/mashas-first-days",
        "/mothers-story",
      ];

      return (
        <Link
          key={index}
          to={routes[index]}
          className="
            block
            min-h-[48px]
            py-4
            px-4
            text-[15px]
            text-white/95
            rounded-xl
            transition-colors duration-150
            hover:bg-white/10
            active:bg-white/20
            active:scale-[0.98]
            touch-manipulation
          "
        >
          <span className="font-semibold">{part}</span> – {title}
        </Link>
      );
    })}

    {/* Contact */}
    <Link
      to="/contact-me"
      className="
        block
        mt-5
        min-h-[48px]
        py-3
        text-center
        rounded-full
        bg-white/10
        hover:bg-white/20
        font-semibold
        transition-all duration-150
        active:scale-[0.97]
        touch-manipulation
      "
    >
      {navLabels[lang][2]}
    </Link>

  </div>

        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
