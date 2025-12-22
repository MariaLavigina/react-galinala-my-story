import React from "react";

const TextOneOnly = ({ lang = "ru" }) => {
  return (
    <>
      {lang === "ru" ? (
        <>
          <h1>каждый выбирает </h1>
          <h2>для себя</h2>
          <h3>Это история о том как трудный выбор обернулся неожиданным, невероятным счастьем. </h3>

          <p>
          Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история - не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
          </p>

          <p>
         Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
          </p>

          <p>
           Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом , между выживанием и подлинной жизнью.
          </p>

          <p>
           Это история о том, как свой выбор сделала я.
          </p>
          
        </>


     
 ) : lang === "he" ? (
        <>
          <h1>כל אחד בוחר </h1>
          <h2>את דרכו</h2>
          <h3>זהו סיפור על בחירה קשה - שהפכה, באופן מפתיע, לאושר גדול ולא ייאמן.</h3>

          <p>
           שמי גָּלִינָה. נולדתי בשנת 1941 בעולם שנקרא אז ברית המועצות.  
אבל זה לא רק סיפור על העבר. זהו מסע של התעוררות אישית, שהוביל אותי אל ההחלטה הקשה ביותר בחיי - ועם הזמן התברר שזו הייתה גם ההחלטה הנכונה ביותר.

          </p>

          <p>
   בשנת 1990, כשהייתי כמעט בת חמישים, החלטתי לעזוב את ברית המועצות יחד עם אמי, שהייתה אז בשנות השמונים לחייה, ועם בתי הקטנה, בת שבע בלבד. 
          </p>

          <p>
           בחרתי לקרוא לסיפור שלי "כל אחד בוחר את דרכו", מפני שבסופו של דבר, לא משנה היכן נולדנו או מה לימדו אותנו - כל אחד מאיתנו נדרש לבחור.  
 לבחור - בין פחד לאומץ, בין לשתוק ולדבר, בין לשרוד לבין באמת לחיות.
          </p>

          <p>
            וזהו הסיפור על הבחירה שלי.
          </p>
        </>
      ) : (
        <>




          <h1>Everybody chooses </h1> 
          <h2>For oneself</h2>
          <h3>This is the story of how a difficult choice turned into unexpected, incredible happiness.</h3>

          <p>
           My name is Galina. I was born in 1941 in a world that was then called the Soviet Union. This story isn’t just about the past - it’s about my own personal awakening, a journey that led me to a very difficult but, as it turned out, the most important decision of my life.
          </p>

          <p>
        This is the story of why, in 1990, at nearly fifty years old, I decided to leave the Soviet Union with my mother - who was already over eighty at the time - and my little daughter, who was just seven.
          </p>

          <p>
           I chose to call my story “Everybody chooses for oneself” because, in the end, no matter where we’re born or what we’re taught, each of us has to make our own choice. The choice between fear and courage, between silence and speaking out, between simply surviving and truly living!
          </p>

          <p>
         This is the story of how I made my choice.
          </p>
        </>
      )}
    </>
  );
};

export default TextOneOnly;
