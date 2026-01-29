import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Translation labels
const labels = {
  ru: {
    contactTitle: "Свяжитесь со мной",
    name: "Ваше имя",
    email: "Ваш email",
    message: "Ваше сообщение",
    submit: "Отправить сообщение",
  },
  en: {
    contactTitle: "Contact Me",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message",
  },
  he: {
    contactTitle: "צור קשר",
    name: "שמך",
    email: "האימייל שלך",
    message: "הודעה שלך",
    submit: "שלח הודעה",
  },
};

export default function ContactMe() {
  const [opacity, setOpacity] = useState(0);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ru");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // Preload desktop background
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "/images/bg-contact-me-desktop.webp";
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    setOpacity(1);
  }, []);

  // ✅ NETLIFY + REACT SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      // ✅ Redirect to YOUR Thank You page
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{ opacity, transition: "opacity 0.3s ease-in-out" }}
      className="m-0 p-0"
    >
      <Navbar lang={lang} setLang={setLang} />

      <main lang={lang}>
        <div className="w-full min-h-screen flex items-start sm:items-center justify-center pt-12 sm:pt-0 bg-[#302024] sm:bg-[url('/images/bg-contact-me-desktop.webp')] sm:bg-cover sm:bg-center sm:bg-no-repeat">
          <div className="w-full max-w-[500px] mx-auto p-8 sm:bg-[#302024] sm:p-6 md:sm:p-8 lg:sm:p-10 sm:shadow-[0_0_25px_rgba(0,0,0,0.6)]">

            {/* ✅ Netlify Form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <h1 className="text-3xl text-white">
                {labels[lang].contactTitle}
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="block text-base font-medium text-white mb-1">
                    {labels[lang].name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#4a3d5c] text-white rounded-md px-3 py-2"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-base font-medium text-white mb-1">
                    {labels[lang].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#4a3d5c] text-white rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-base font-medium text-white mb-1">
                  {labels[lang].message}
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-[#4a3d5c] text-white rounded-md px-3 py-2"
                />
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="px-6 py-3 border border-white rounded-full text-white hover:bg-white/10"
                >
                  {labels[lang].submit}
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
