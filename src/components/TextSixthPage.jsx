import React from "react";

const TextSixthPage = ({ lang = "ru" }) => {
  return (
    <>
      {lang === "ru" ? (
        <>
          <h1>2026</h1>
          <h2>Послесловие</h2>
      

          <p>
           В силу своего возраста и наших стараний моя 7-летняя Маша не могла чувствовать, осознавать режим страны в которой родилась. Мир её детства был прекрасен. И вдруг, прямо из безмятежного детства, она оказывается среди незнакомых людей, говорящих на непонятном языке, без дома, друзей и родных - в мире, полном соблазнов и абсолютного безденежья.
          </p>

              <p>
           И когда Маша, уже повзрослев, начала приставать ко мне: “Пиши, пиши, как это было. Ну что я буду рассказывать своим детям?” - я ей уступила и начала писать “как это было”. Но подспудно мне хотелось ещё и показать ей, что наши нелёгкие первые годы в Израиле, все пережитые трудности, стоили того.
          </p>

              <p>
          Сегодня я могу сказать, что моя мама, моя дочь и я - три женщины, трех разных поколений, пройдя нелегкий путь "олим ходашим ми Русия",  рады,  что  хватило нам дерзости сделать верный выбор.
          </p>


        </>
     




) : lang === "he" ? (
  <>
    <h1>2026</h1>
    <h2>אחרית דבר</h2>


    <p>
     בשל גילה הצעיר ובזכות המאמצים שלנו, מאשה בת השבע שלי לא יכלה להבין, ובטח שלא להרגיש, את המשטר של המדינה בה נולדה. עולמה הילדותי היה יפה, מלא שלווה. ואז, פתאום, מתוך אותה ילדות תמימה, היא מצאה את עצמה בין זרים, בשפה שאינה מבינה, בלי בית, בלי חברים, בלי משפחה - בעולם מלא פיתויים ועוני מוחלט.
    </p>

       <p>
      כאשר מאשה, שכעת גדלה, עודדה אותי: "כתבי, כתבי איך זה היה. מה אני אגיד לילדים שלי?" נכנעתי והתחלתי לכתוב את סיפורנו, את "איך זה היה". אך בליבי ידעתי שגם רציתי להראות לה שהשנים הראשונות הקשות בישראל, כל הקשיים והמאבקים, היו שווים את זה.
    </p>

       <p>
      היום אני יכולה לומר שאני, אמי וביתי - שלוש נשים משלוש דורות שונות - שעברו את המסע המאתגר של עולים חדשים מרוסיה, שמחות שלקחנו את האומץ לבחור בדרך הנכונה.
    </p>


 
  </>
) : (
  <>







          <h1>2026</h1>
          <h2>Afterword</h2>
     

          <p>
           Due to her young age and our efforts, my seven-year-old Masha could not comprehend or feel the reality of the regime in the country where she was born. Her childhood world was beautiful and serene. And then, suddenly, emerging from that peaceful childhood, she found herself surrounded by strangers speaking a language she did not understand, without a home, friends, or family - in a world full of temptations and complete poverty.
          </p>

           <p>
            When Masha, now grown up, started urging me, “Write, write about how it was. What am I going to tell my children?” I gave in and began writing “how it was.” But deep down, I also wanted to show her that our difficult first years in Israel, all the hardships we went through, were worth it.
          </p>

           <p>
            Today I can say that my mother, my daughter, and I - three women from three different generations - having gone through the challenging journey of “olim hadashim mi-Russia” (new immigrants from Russia), are glad that we had the courage to make the right choice.
          </p>

   

        </>
      )}
    </>
  );
};

export default TextSixthPage;
