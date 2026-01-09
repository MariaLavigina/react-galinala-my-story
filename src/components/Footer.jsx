import React from "react";

const footerText = {
  ru: {
    button: "свяжитесь со мной",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
      "© 2026г Галина Лавыгина - все права защищены.",
    designedBy: "Дизайн и разработка сайта: Мария Лавыгина", // new line
    info1:
      "Мы будем рады, если эта история затронет вас и вы захотите поделиться ею, перепостить или опубликовать. Пожалуйста, делайте это только с точным сохранением текста и с явным указанием автора - Галины Лавыгиной. Если у вас есть вопросы, мысли или добрые слова - пишите:",
    privacy:
      "Конфиденциальность и GDPR: При обращении через форму или Gmail мы видим только имя, email и сообщение для личного ответа. Данные не передаются третьим лицам и используются только для переписки.",
  },
  en: {
    button: "Contact Me",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
      "© 2026 Galina Lavigina - All rights reserved.",
       designedBy: "Website Designed & Developed by Maria Lavigina", // new line
    info1:
     `We would be delighted if this story touches you and you feel inspired to share it, repost it, or publish it. Please do so only with the text kept exactly as it is and with clear credit to the author - Galina Lavigina.
If you have any questions, thoughts, or kind words, please write to me at:`,
    privacy:
      "Privacy and GDPR: When you contact us via the form or Gmail, we only see your name, email, and message in order to reply personally. Your data is not shared with third parties and is used solely for correspondence.",
  },
  he: {
    button: "צור קשר",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    copyright:
     `© 2026 גלינה לביגינה - כל הזכויות שמורות`,
        designedBy: "עיצוב ופיתוח אתר: מריה לביגינה", // new line
    info1:
       `נשמח אם הסיפור הזה ייגע בכם ותרצו לשתף אותו. בבקשה עשו זאת רק עם שמירה מדויקת על הטקסט וציון ברור של המחברת - גלינה לביגינה. אם יש לכם שאלות, מחשבות או מילים טובות - כתבו:`,
    privacy:
      `Privacy and GDPR: When you contact us via the form or Gmail, we only see your name, email, and message in order to reply personally. Your data is not shared with third parties and is used solely for correspondence.`,
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
              src="/images/social-sharing-buttons/envelope-solid-full.svg"
              alt={text.emailLabel}
              className="w-10 h-10"
            />
          </a>
         <a
                 href="https://api.whatsapp.com/send?text=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F"
                  aria-label="WhatsApp"
                  >

            <img
              src="/images/social-sharing-buttons/whatsapp-brands-solid.svg"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </a>
             <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F"
           aria-label="Facebook"
            >

            <img
              src="/images/social-sharing-buttons/facebook-brands-solid-full.svg"
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
          <p className="mb-8 text-sm">{text.designedBy}</p> {/* new line */}
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
