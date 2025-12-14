import React from "react";

const TextForthPage = ({ lang = "ru" }) => {
  return (
    <>
      {lang === "ru" ? (
        <>
          <h1>Mоя Маша </h1>
          <h2>История первых дней в Израиле, рассказанная моей дочерью Машей</h2>


          <p>
              Большую часть жизни мне почему-то очень нравились пальмы. Я не понимала почему - да, они красивые, но для меня в этом всегда было что-то особенное. Ещё с детства я всё время их рисовала - снова и снова.Несколько лет назад я как-то сказала об этом подруге - просто поделилась, что пальмы мне всегда были близки и чем-то притягивали. И она ответила: “Может, это потому, что это было первое, что ты увидела, когда вы прилетели в Израиль?” И тогда всё вдруг стало понятно.
          </p>

          <p>
            Когда мы прилетели, именно пальмы были первым ярким и необычным, что бросилось в глаза. После Москвы, где таких деревьев не было, они произвели на меня сильное впечатление. Это как у младенца - первое, что он видит, - лицо матери. А для меня, в новой стране и с новой жизнью, первыми меня встретили пальмы. Наверное, поэтому они до сих пор живут где-то глубоко внутри.
          </p>

      
          
        </>


     
 ) : lang === "he" ? (
        <>
          <h1>מָאשָׁה שלי</h1>
          <h2>הסיפור של הימים הראשונים שלנו בישראל - כפי שסיפרה בתי, מָאשָׁה. </h2>
     

          <p>
           
           לאורך רוב חיי, משום מה, תמיד הרגשתי קשר מיוחד לעצי דקל.  לא ממש ידעתי להסביר למה - נכון, הם יפים, אבל בשבילי היה בהם משהו מעבר לזה, משהו מיוחד.
          </p>

          <p>
            עוד כשהייתי ילדה הייתי מציירת דקלים שוב ושוב, בלי לדעת למה.
             לפני כמה שנים סיפרתי על זה לחברה - סתם ככה, שאיכשהו דקלים תמיד היו לי קרובים ללב, שתמיד הרגשתי אליהם חיבה מוזרה כזו.
          </p>

            <p>
             והיא אמרה לי:
          </p>

            <p>
           “אולי זה בגלל שזה היה הדבר הראשון שראית כשנחתם בישראל?”
          </p>

            <p>
          ופתאום הכול התחבר.
          </p>

            <p>
            כשהגענו לישראל, הדקלים באמת היו הדבר הראשון שקפץ לי לעיניים - כל כך שונים, כל כך חיים.
 אחרי מוסקבה, שבה לא היו עצים כאלה בכלל, הם עשו עליי רושם חזק במיוחד.
          </p>

             <p>
            זה היה קצת כמו אצל תינוק - שהדבר הראשון שהוא רואה הוא פני אמו.
 ואצלי, בארץ החדשה, עם חיים חדשים, הדבר הראשון שפגש אותי היו הדקלים.
          </p>


   <p>
    אולי בגלל זה הם עדיין שוכנים בי, איפשהו עמוק בפנים.
          </p>




        </>
      ) : (
        <>




          <h1>My Masha</h1> 
          <h2>A story about our first days in Israel, told by my daughter, Masha</h2>

   <p>
    For most of my life, I’ve been strangely drawn to palm trees.  I didn’t really understand why - yes, they’re beautiful, but to me, there was always something special about them. Ever since I was a child, I kept drawing them again and again.
    </p>

  

       <p>
        A few years ago, I mentioned this to a friend - just casually sharing how palms always felt close to me, like they somehow pulled me in. 
    </p>

       <p>
        And she said:
    </p>

       <p>
        “Maybe it’s because they were the first thing you saw when you arrived in Israel?” 
    </p>

          <p>
            Suddenly, everything made sense.
    </p>


      <p>
        When we landed, the palms were the first bright and unusual thing that caught my eye. Coming from Moscow, where there are no such trees, they made a strong impression on me. It’s like a baby’s first sight - their mother’s face. For me, in this new country and a new life, my friend suggested that perhaps the palms were the first to welcome me. 
    </p>

    
      <p>
        Maybe that’s why they still live somewhere deep inside me.
    </p>






        </>
      )}
    </>
  );
};

export default TextForthPage;
