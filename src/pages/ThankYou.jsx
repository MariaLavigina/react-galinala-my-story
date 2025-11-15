// src/pages/ThankYou.jsx
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [opacity, setOpacity] = useState(0);
  const [personalName, setPersonalName] = useState("");

  // Smooth fade-in effect
  useEffect(() => {
    const handleLoad = () => setOpacity(1);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Get name from query string
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
      {/* Dark transparent overlay */}
      <div className="w-full max-w-[500px] mx-auto p-8 sm:bg-[#302024] sm:p-6 md:sm:p-8 lg:sm:p-10 sm:shadow-[0_0_25px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-[45px] mb-4 text-white">
          {personalName ? `Спасибо, ${personalName}!` : "Спасибо!"}
        </h1>

        <p className="text-xl mb-14 leading-relaxed text-white">
          Спасибо за ваше сообщение! Оно успешно отправлено.
        </p>

        <div className="flex justify-center">
          <a
            href="/"
            className="text-base sm:px-8 sm:py-4 px-6 py-3 border border-white rounded-full text-white font-normal font-['Roboto'] transition-all duration-200 ease-in-out hover:bg-white/10 hover:text-white active:bg-[#FADADD] active:text-[#412744] active:scale-[0.97] focus:outline-none"
            aria-label="Return to Home"
          >
            Главная страница
          </a>
        </div>
      </div>
    </div>
  );
}
