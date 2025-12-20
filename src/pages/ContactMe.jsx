import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';

// Translation labels
const labels = {
  ru: {
    contactTitle: "Свяжитесь со мной",
    name: "Ваше имя",
    email: "Ваш email",
    message: "Ваше сообщение",
    submit: "Отправить сообщение"
  },
  en: {
    contactTitle: "Contact Me",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message"
  },
  he: {
    contactTitle: "צור קשר",
    name: "שמך",
    email: "האימייל שלך",
    message: "הודעה שלך",
    submit: "שלח הודעה"
  }
};

export default function ContactMe() {
  const [opacity, setOpacity] = useState(0);
  const [name, setName] = useState("");

  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ru");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // FIX: fade-in triggers on component mount, not window load
  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    let actionUrl = form.action;
    if (!actionUrl.includes("name=")) {
      actionUrl += "?name=" + encodeURIComponent(name);
    }

    fetch(actionUrl, {
      method: "POST",
      body: formData,
    }).then(() => {
      window.location.href = "/thank-you.html";
    });
  };

  return (
    <div style={{ opacity, transition: "opacity 0.3s ease-in-out" }} className="m-0 p-0">
      {/* Navbar with lang prop */}
      <Navbar lang={lang} setLang={setLang} />

      <main lang={lang}>
        <div className="w-full min-h-screen flex items-start sm:items-center justify-center pt-12 sm:pt-0 bg-[#302024] sm:bg-[url('/images/bg-contact-me-desktop.webp')] sm:bg-cover sm:bg-center sm:bg-no-repeat">
          <div className="w-full max-w-[500px] mx-auto p-8 sm:bg-[#302024] sm:p-6 md:sm:p-8 lg:sm:p-10 sm:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you.html"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <h1 className="text-3xl text-white">{labels[lang].contactTitle}</h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="name" className="block text-base font-medium text-white mb-1">
                    {labels[lang].name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 w-full bg-[#4a3d5c] border border-transparent text-white placeholder-white/90 rounded-md text-lg px-3 py-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition duration-300 ease-in-out focus:outline-none focus:border-[#FADADD] focus:ring-2 focus:ring-[#FADADD] focus:ring-offset-0 caret-white"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="block text-base font-medium text-white mb-1">
                    {labels[lang].email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="flex-1 w-full bg-[#4a3d5c] border border-transparent text-white placeholder-white/90 rounded-md text-lg px-3 py-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition duration-300 ease-in-out focus:outline-none focus:border-[#FADADD] focus:ring-2 focus:ring-[#FADADD] focus:ring-offset-0 caret-white"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="block text-base font-medium text-white mb-1">
                  {labels[lang].message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="flex-1 w-full bg-[#4a3d5c] border border-transparent text-white placeholder-white/90 rounded-md text-lg px-3 py-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition duration-300 ease-in-out focus:outline-none focus:border-[#FADADD] focus:ring-2 focus:ring-[#FADADD] focus:ring-offset-0 caret-white"
                ></textarea>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="group relative overflow-hidden px-4 md:px-5 py-3 border border-white rounded-full text-white font-normal font-['Roboto'] bg-transparent text-sm md:text-base tracking-wide transition-all duration-300 ease-in-out hover:bg-white/10 hover:text-white hover:pl-8 hover:pr-8 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:bg-[#FADADD] active:text-[#412744] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label={labels[lang].submit}
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
