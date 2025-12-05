import React from "react";

const  TextFifthPage = ({ lang = "ru" }) => {
  return (
    <>
      {lang === "ru" ? (
        <>
          <h1>моя мама</h1>
          <h2>Четвёртая глава принадлежит моей маме. </h2>


          <p>
           Мои родители почти всю жизнь, кроме ранних лет и лет войны, прожили в Москве. За эти годы у них появилось множество друзей и просто хороших знакомых. Большинство родственников тоже жили в Москве. Жил в Москве с семьей и мой старший брат — их первенец, любимый сын.
          </p>

          <p>
           И вот 1989 год. Маме 82 года. Я спрашиваю её:  "Я хочу уехать в Израиль. Поедешь со мной?" Мама, не задумываясь ни на секунду, отвечает:  Если я буду тебе там полезна — я с тобой. Сейчас я сама в её возрасте и — ох, как понимаю… Как тяжело, будучи старым и очень больным человеком, оставить привычную обстановку, родной дом, сложившийся круг общения, любимого сына — и отправиться в полную неизвестность, в неустроенность.
          </p>

      
          
        </>


     
 ) : lang === "he" ? (
        <>
          <h1>אמא שלי</h1>
          <h2>הפרק הרביעי מוקדש לאמא שלי</h2>
     
          <p>
          הוריי כמעט כל חייהם, למעט השנים הראשונות ושנות המלחמה, חיו במוסקבה. במשך השנים הללו נוצרו להם הרבה חברים ומכרים טובים. רוב הקרובים גם הם חיו במוסקבה. במוסקבה גר גם אחי הבכור - הבן הראשון והאהוב שלהם.
          </p>

           <p>
          והנה, 1989, אמא שלי כבר הייתה בת 82. אני שואלת אותה: "אני רוצה לעלות לישראל. תבואי איתי?"
 אמא, בלי לחשוב אפילו רגע, עונה: "אם אני אהיה לך שם לעזר - אני איתך."
          </p>

           <p>
          עכשיו, כשאני בגיל שלה - אווו, כמה אני מבינה… כמה קשה, כאדם מבוגר וחולה מאוד, לעזוב את הסביבה המוכרת, את הבית האהוב, את מעגל החברים, את הבן האהוב - ולצאת אל הבלתי נודע, אל חוסר וודאות מוחלט.
          </p>


      



        </>
      ) : (
        <>




          <h1>My Mother</h1> 
          <h2>Chapter four belongs to my mother. </h2>



       <p>
      My parents lived almost their entire lives in Moscow, except for their early years and the war. Over the decades, they built countless friendships and acquaintances, and most of our relatives lived there too. My older brother- their firstborn, their beloved son - also grew up in Moscow with the family.
       </p>

          <p>
Then came 1989. My mother was 82. I asked her, “I want to immigrate to Israel. Will you come with me?”
       </p>

          <p>
Without a moment’s hesitation, she replied, “If I can be of any help to you there, I’ll go with you.”
       </p>

            <p>
Now that I have reached her age, I understand - oh, how I understand - how incredibly hard it must have been, as an old and frail person, to leave behind everything familiar: your home, your routines, your circle of friends, your beloved son - and step into a life of uncertainty, into the unknown.
       </p>






        </>
      )}
    </>
  );
};

export default  TextFifthPage;
