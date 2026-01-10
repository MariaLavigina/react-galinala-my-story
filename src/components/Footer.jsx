import React from "react";

const footerText = {
  ru: {
    button: "связаться со мной",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    pdfShort: "Скачать PDF сайта",
    pdfInfo:
      "Этот PDF содержит полный текст сайта с изображениями и всеми главами. Доступен только на русском языке. Рекомендуется просмотр на компьютере.",
    copyright:
      "© 2026г. Галина Лавыгина - все права защищены.",
    info1:
      "Мы будем рады, если эта история затронет вас и вы захотите поделиться ею, перепостить или опубликовать. Пожалуйста, делайте это только с точным сохранением текста и с явным указанием автора - Галины Лавыгиной. Если у вас есть вопросы, мысли или добрые слова - пишите:",
    designedBy: "Дизайн и разработка сайта: Мария Лавыгина",
    privacy:
      "Конфиденциальность и GDPR: при обращении через форму или Gmail мы видим только имя, email и сообщение для личного ответа. Данные не передаются третьим лицам и используются только для переписки.",
  },
  en: {
    button: "Contact me",
    emailLabel: "Email",
    contactEmail: "galinala-mystory@gmail.com",
    pdfShort: "Download site PDF",
    pdfInfo:
      "This PDF contains the full story with images and all chapters. Currently available only in Russian. Best viewed on desktop.",
    copyright:
      "© 2026 Galina Lavigina - All rights reserved.",
    info1:
      "We would be delighted if this story touches you and you feel inspired to share it, repost it, or publish it. Please do so only with the text kept exactly as it is and with clear credit to the author - Galina Lavigina. If you have any questions, thoughts, or kind words, please write:",
    designedBy: "Website designed & developed by Maria Lavigina",
    privacy:
      "Privacy and GDPR: when you contact us via the form or Gmail, we only see your name, email, and message in order to reply personally. Your data is not shared with third parties and is used solely for correspondence.",
  },
  he: {
   button: "פנה/י אליי",
   emailLabel: "Email",
   contactEmail: "galinala-mystory@gmail.com",
   pdfShort: "הורד/הורידי לקריאה לא מקוונת",

    pdfInfo:
      "קובץ ה-PDF כולל את הסיפור המלא עם תמונות וכל הפרקים. זמין כעת ברוסית בלבד. מומלץ לצפייה במחשב.",
    copyright:
      "© 2026 גלינה לביגינה — כל הזכויות שמורות",
    info1:
      "נשמח אם הסיפור הזה ייגע בכם ותרצו לשתף אותו. אנא עשו זאת רק תוך שמירה מדויקת על הטקסט וציון ברור של המחברת — גלינה לביגינה. אם יש לכם שאלות, מחשבות או מילים טובות — כתבו:",
    designedBy: "עיצוב ופיתוח אתר: מריה לביגינה",
    privacy:
      "Privacy and GDPR: when you contact us via the form or Gmail we only see your name, email, and message for personal reply. Data is not shared with third parties and used only for correspondence.",
  },
};

export default function Footer({ lang = "ru" }) {
  const text = footerText[lang];

  const glowHoverStyle = `
    transition-all duration-300
    hover:scale-105 hover:-translate-y-1
    hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]
  `;

  return (
    <footer className="w-full bg-transparent text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* LEFT — Emotional / Action */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          {/* Subtle contact button */}
          <a
            href="contact-me.html"
            className={`
              inline-flex items-center justify-center
              px-8 py-3 rounded-full text-base font-medium text-white/90
              bg-white/10 border border-white/25 backdrop-blur-sm
              ${glowHoverStyle}
            `}
          >
            {text.button}
          </a>

          {/* Social icons */}
          <div className="flex items-center space-x-6">
            {[
              {
                href: `mailto:${text.contactEmail}`,
                label: text.emailLabel,
                src: "/images/social-sharing-buttons/envelope-solid-full.svg",
              },
              {
                href: "https://api.whatsapp.com/send?text=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F",
                label: "WhatsApp",
                src: "/images/social-sharing-buttons/whatsapp-brands-solid.svg",
              },
              {
                href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F",
                label: "Facebook",
                src: "/images/social-sharing-buttons/facebook-brands-solid-full.svg",
              },
            ].map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                aria-label={icon.label}
                className={`
                  inline-flex items-center justify-center
                  w-16 h-16 rounded-full
                  ${glowHoverStyle}
                `}
              >
                <img src={icon.src} alt={icon.label} className="w-8 h-8" />
              </a>
            ))}
          </div>

          {/* PDF */}
          <div className="max-w-sm space-y-2 text-center lg:text-left">
            <a
              href="/pdf/everybody-chooses-for-themselves-2026.pdf"
              download
              className={`
                inline-flex items-center justify-center
                px-6 py-2 rounded-full text-sm font-medium text-white/85
                bg-white/5 border border-white/20
                ${glowHoverStyle}
              `}
            >
              {text.pdfShort}
            </a>

            <p className="text-xs leading-relaxed text-white/60">
              {text.pdfInfo}
            </p>
          </div>
        </div>

        {/* RIGHT — Informational / Quiet */}
        <div className="max-w-xl text-left text-white/85">
          <p className="mb-6">{text.copyright}</p>

          <p className="mb-6 leading-relaxed">{text.info1}</p>

          <p className="mb-10">
            <a
              href={`mailto:${text.contactEmail}`}
              className={`
                underline text-white/80
                ${glowHoverStyle}
              `}
            >
              {text.contactEmail}
            </a>
          </p>

          <p className="mb-3 text-sm text-white/60">{text.designedBy}</p>
          <p className="text-sm text-white/60">{text.privacy}</p>
        </div>
      </div>
    </footer>
  );
}


// import React from "react";

// const footerText = {
//   ru: {
//     button: "свяжитесь со мной",
//     emailLabel: "Email",
//     contactEmail: "galinala-mystory@gmail.com",
//     pdf: "Скачать полное содержание сайта в PDF (только на русском)",
//     copyright:
//       "© 2026г Галина Лавыгина - все права защищены.",
   
//     info1:
//       "Мы будем рады, если эта история затронет вас и вы захотите поделиться ею, перепостить или опубликовать. Пожалуйста, делайте это только с точным сохранением текста и с явным указанием автора - Галины Лавыгиной. Если у вас есть вопросы, мысли или добрые слова - пишите:",
//        designedBy: "Дизайн и разработка сайта: Мария Лавыгина",
//     privacy:
//       "Конфиденциальность и GDPR: При обращении через форму или Gmail мы видим только имя, email и сообщение для личного ответа. Данные не передаются третьим лицам и используются только для переписки.",
//   },
//   en: {
//     button: "Contact Me",
//     emailLabel: "Email",
//     contactEmail: "galinala-mystory@gmail.com",
//     pdf: "Download full website content PDF (Russian only)",
//     copyright:
//       "© 2026 Galina Lavigina - All rights reserved.",
  
//     info1:
//       `We would be delighted if this story touches you and you feel inspired to share it, repost it, or publish it. Please do so only with the text kept exactly as it is and with clear credit to the author - Galina Lavigina.
// If you have any questions, thoughts, or kind words, please write to me at:`,
//   designedBy: "Website Designed & Developed by Maria Lavigina",
//     privacy:
//       "Privacy and GDPR: When you contact us via the form or Gmail, we only see your name, email, and message in order to reply personally. Your data is not shared with third parties and is used solely for correspondence.",
//   },
//   he: {
//     button: "צור קשר",
//     emailLabel: "Email",
//     contactEmail: "galinala-mystory@gmail.com",
//     pdf: "הורד את תוכן האתר המלא ב-PDF (רוסית בלבד)",
//     copyright:
//       "© 2026 גלינה לביגינה - כל הזכויות שמורות",
   
//     info1:
//       `נשמח אם הסיפור הזה ייגע בכם ותרצו לשתף אותו. בבקשה עשו זאת רק עם שמירה מדויקת על הטקסט וציון ברור של המחברת - גלינה לביגינה. אם יש לכם שאלות, מחשבות או מילים טובות - כתבו:`,
//        designedBy: "עיצוב ופיתוח אתר: מריה לביגינה",
//     privacy:
//       `Privacy and GDPR: When you contact us via the form or Gmail, we only see your name, email, and message in order to reply personally. Your data is not shared with third parties and is used solely for correspondence.`,
//   },
// };

// export default function Footer({ lang = "ru" }) {
//   const text = footerText[lang];

//   return (
//     <footer className="w-full bg-transparent text-white py-12 text-center">
//       {/* Contact button + socials */}
//       <div className="flex flex-col items-center justify-center space-y-6">
//         <a
//           href="contact-me.html"
//           className="
//             group relative flex items-center justify-center
//             px-10 py-5 mt-8 mb-6
//             rounded-full
//             text-xl font-medium text-white
//             bg-gradient-to-r from-[#9399F0]/90 to-[#2C192C]/80
//             border border-white/40
//             shadow-inner shadow-[#2C192C]/50
//             backdrop-blur-sm
//             tracking-wide
//             transition-all duration-300
//             hover:from-[#9399F0]/100 hover:to-[#2C192C]/90
//             hover:border-white/60
//             hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
//             hover:scale-[1.05]
//             active:bg-[#FADADD] active:text-[#412744]
//           "
//         >
//           {text.button}
//         </a>

//         <div className="flex items-center justify-center space-x-8 mb-8">
//           <a href={`mailto:${text.contactEmail}`} aria-label={text.emailLabel}>
//             <img
//               src="/images/social-sharing-buttons/envelope-solid-full.svg"
//               alt={text.emailLabel}
//               className="w-10 h-10"
//             />
//           </a>
//           <a
//             href="https://api.whatsapp.com/send?text=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F"
//             aria-label="WhatsApp"
//           >
//             <img
//               src="/images/social-sharing-buttons/whatsapp-brands-solid.svg"
//               alt="WhatsApp"
//               className="w-10 h-10"
//             />
//           </a>
//           <a
//             href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmy-story-galina-lavigina.netlify.app%2F"
//             aria-label="Facebook"
//           >
//             <img
//               src="/images/social-sharing-buttons/facebook-brands-solid-full.svg"
//               alt="Facebook"
//               className="w-10 h-10"
//             />
//           </a>
//         </div>

//    {/* PDF Download Section (Subtle & Elegant, Pill Shape) */}
// <div className="flex flex-col items-center justify-center space-y-2">
//   <a
//     href="/pdf/everybody-chooses-for-themselves-2026.pdf"
//     download
//     className="
//       group relative flex items-center justify-center
//       px-10 py-3
//       rounded-full
//       text-lg font-medium text-white
//       bg-white/10
//       border border-white/20
//       backdrop-blur-sm
//       tracking-wide
//       transition-all duration-300
//       hover:bg-white/20 hover:scale-105
//       active:bg-white/30
//     "
//   >
//             {text.pdf}
//           </a>
//           <p className="text-sm sm:text-base text-white/70 max-w-[480px] text-center">
//             This PDF contains the full story with images and all chapters. Currently available only in Russian. Best viewed on desktop.
//           </p>
//         </div>
//       </div>


//       <div className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
//         <div className="max-w-[720px] mx-auto text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center">
//           <p className="mb-8">{text.copyright}</p>
         
//           <p className="mb-8">{text.info1}</p>
         
//           <p className="mb-16">
//             <a href={`mailto:${text.contactEmail}`} className="underline hover:text-gray-300">
//               {text.contactEmail}
//             </a>
//           </p>
//             <p className="mb-8 text-sm">{text.designedBy}</p>
//           <p className="mb-8 text-sm">{text.privacy}</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

















