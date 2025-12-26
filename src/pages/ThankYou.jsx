import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

// Translation labels
const labels = {
  ru: {
    thankYou: "Спасибо",
    messageSent: "Спасибо за ваше сообщение! Оно успешно отправлено.",
    home: "Главная страница"
  },
  en: {
    thankYou: "Thank you",
    messageSent: "Thank you for your message! It has been sent successfully.",
    home: "Home Page"
  },
  he: {
    thankYou: "תודה",
    messageSent: "תודה על ההודעה שלך! היא נשלחה בהצלחה.",
    home: "דף הבית"
  }
};

export default function ThankYou() {
  const [opacity, setOpacity] = useState(0);
  const [personalName, setPersonalName] = useState("");
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ru");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Fade-in effect
  useEffect(() => {
    setOpacity(1);
  }, []);

  // Get name from query string (from fetch redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name && name.trim() !== "") {
      setPersonalName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, []);

  return (
    <div
      style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
      className="w-full min-h-screen flex items-start sm:items-center justify-center pt-12 sm:pt-0 bg-[#302024] sm:bg-[url('/images/bg-contact-me-desktop.webp')] sm:bg-cover sm:bg-center sm:bg-no-repeat"
    >
      <Navbar lang={lang} setLang={setLang} />

      <div className="w-full max-w-[500px] mx-auto p-8 sm:bg-[#302024] sm:p-6 md:sm:p-8 lg:sm:p-10 sm:shadow-[0_0_25px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-[45px] mb-4 text-white">
          {personalName ? `${labels[lang].thankYou}, ${personalName}!` : labels[lang].thankYou + "!"}
        </h1>

        <p className="text-xl mb-14 leading-relaxed text-white">
          {labels[lang].messageSent}
        </p>

        <div className="flex justify-center">
          <Link
            to="/"
            className="text-base sm:px-8 sm:py-4 px-6 py-3 border border-white rounded-full text-white font-normal font-['Roboto'] transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-white active:bg-[#FADADD] active:text-[#412744] active:scale-[0.97] focus:outline-none"
            aria-label={labels[lang].home}
          >
            {labels[lang].home}
          </Link>
        </div>
      </div>
    </div>
  );
}
