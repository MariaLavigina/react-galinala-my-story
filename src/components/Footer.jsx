export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white py-12 text-center">
      {/* Contact button + socials */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <a
          href="contact-me.html"
          className="group relative overflow-hidden px-6 py-3 border border-white rounded-full font-['Roboto'] text-base tracking-wide transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02] active:bg-[#FADADD] active:text-[#412744]"
        >
          Свяжитесь со мной
        </a>

        <div className="flex items-center justify-center space-x-8">
          <a href="mailto:galinala.mystory@gmail.com" aria-label="Email">
            <img
              src="images/social-sharing-buttons/envelope-solid-full.svg"
              alt="Email"
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
      <div className="mt-12 max-w-[720px] mx-auto text-white text-sm sm:text-base">
        <p>© 2025 Галина Лавигина — все права защищены.</p>
        <p className="mt-2">
          Мы будем рады, если эта история затронет вас и вы захотите поделиться
          ею, перепостить или опубликовать.
        </p>
        <p className="mt-2">
          Пожалуйста, делайте это только с точным сохранением текста и с явным
          указанием автора — Галины Лавигиной.
        </p>
        <p className="mt-2">
          Если у вас есть вопросы, мысли или добрые слова — пишите:
        </p>
        <p className="mt-1">galinala.mystory@gmail.com</p>
        <p className="mt-4 text-xs">
          Когда вы пишете нам через форму обратной связи или напрямую на Gmail,
          мы видим ваше имя, email и сообщение, чтобы ответить вам лично.
        </p>
        <p className="mt-1 text-xs">
          Эти данные используются только для переписки с вами и никуда не
          передаются.
        </p>
      </div>
    </footer>
  );
}
