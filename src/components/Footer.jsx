import React from "react";

const footerText = {
  ru: {
    button: "свяжитесь со мной",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
      "© 2025 Галина Лавигина — все права защищены.",
    info1:
      "Мы будем рады, если эта история затронет вас и вы захотите поделиться ею, перепостить или опубликовать. Пожалуйста, делайте это только с точным сохранением текста и с явным указанием автора — Галины Лавигиной. Если у вас есть вопросы, мысли или добрые слова — пишите:",
    privacy:
      "Конфиденциальность и GDPR: При обращении через форму или Gmail мы видим только имя, email и сообщение для личного ответа. Данные не передаются третьим лицам и используются только для переписки.",
  },
  en: {
    button: "Contact Me",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
      "© 2025 Galina Lavigina — all rights reserved.",
    info1:
      "We would be happy if this story touches you and you want to share it or republish it. Please do so only with the exact text and clear credit to the author — Galina Lavigina. If you have any questions, thoughts, or kind words, write to us:",
    privacy:
      "Privacy & GDPR: When contacting via the form or Gmail we only see name, email, and message for personal response. Data is not shared with third parties and used only for correspondence.",
  },
  he: {
    button: "צור קשר",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
      "© 2025 גלינה לביגינה — כל הזכויות שמורות.",
    info1:
      "נשמח אם הסיפור הזה ייגע בכם ותרצו לשתף אותו או לפרסם אותו. אנא עשו זאת רק עם שמירה מדויקת של הטקסט וציון ברור של המחברת — גלינה לביגינה. אם יש לכם שאלות, מחשבות או מילים טובות, כתבו אלינו:",
    privacy:
      "פרטיות ו-GDPR: בעת פנייה דרך הטופס או Gmail אנו רואים רק שם, אימייל והודעה למענה אישי. הנתונים אינם מועברים לצדדים שלישיים ומשמשים רק למ Correspondence.",
  },
};

export default function Footer({ lang = "ru" }) {
  const text = footerText[lang];

  return (
    <footer className="w-full bg-transparent text-white py-12 text-center">
      {/* Contact button + socials */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <a
          href="contact-me.html"
          className="
            group relative flex items-center justify-center
            px-10 py-5 mt-8 mb-12
            rounded-full
            text-xl font-medium text-white
            bg-gradient-to-r from-[#9399F0]/90 to-[#2C192C]/80
            border border-white/40
            shadow-inner shadow-[#2C192C]/50
            backdrop-blur-sm
            tracking-wide
            transition-all duration-300
            hover:from-[#9399F0]/100 hover:to-[#2C192C]/90
            hover:border-white/60
            hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:scale-[1.05]
            active:bg-[#FADADD] active:text-[#412744]
          "
        >
          {text.button}
        </a>

        <div className="flex items-center justify-center space-x-8">
          <a href={`mailto:${text.contactEmail}`} aria-label={text.emailLabel}>
            <img
              src="images/social-sharing-buttons/envelope-solid-full.svg"
              alt={text.emailLabel}
              className="w-10 h-10"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?text=https%3A%2F%2Fgalina-lavigina-my-story.netlify.app%2F"
            aria-label="WhatsApp"
          >
            <img
              src="images/social-sharing-buttons/whatsapp-brands-solid.svg"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgalina-lavigina-my-story.netlify.app%2F"
            aria-label="Facebook"
          >
            <img
              src="images/social-sharing-buttons/facebook-brands-solid-full.svg"
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
        <div className="max-w-[720px] mx-auto text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center">
          <p className="mb-8">{text.copyright}</p>
          <p className="mb-8">{text.info1}</p>
          <p className="mb-16">
            <a href={`mailto:${text.contactEmail}`} className="underline hover:text-gray-300">
              {text.contactEmail}
            </a>
          </p>
          <p className="mb-8 text-sm">{text.privacy}</p>
        </div>
      </div>
    </footer>
  );
}
