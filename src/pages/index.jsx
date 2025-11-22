import React, { useState } from "react";
import TextOneOnly from "../components/TextOneOnly.jsx";
import ForwardButton from "../components/ForwardButton.jsx";
import Navbar from "../components/Navbar.jsx";
import ChapterSectionDesktop from "../components/ChapterSectionDesktop.jsx";
import Footer from '../components/Footer.jsx';
import ChapterSectionMobile from "../components/ChapterSectionMobile.jsx";






      /* -------- Russian -------- */
const texts = {
  ru: {
    h1: `Мы имеем возможность, именно возможность и уже наше дело воспользоваться ею или нет.`,
    h2: `Про нашу алию`,
    h3: `Что значит “нашу”?`,
    paragraphs1: [
      `  Это идея Маши: три женщины - мама, Маша и я - напишем об этом времени. А как же наша бабушка? Ведь…А мы напишем за неё - по её письмам. У меня есть её письма к Томочке и Эрику (они прислали их мне по моей просьбе), а также письма к Игорю, которые я попросила вернуть. Можно сказать, это письма с фронта - непосредственные, трогательные, искренние. 
         Томочка и я не можем их читать - ревём и всё тут. Но деваться некуда.`
    ],

    h3_2: `Вот они эти три женщины`,
    photoDesktop: "images/desktop-images/threeWomen-desktop.jpg",
    photoMobile: "images/mobile-images/threeWomen-mobile.webp",

    h4: `Для кого это написанно?`,
    paragraphs2: [
      `Для Маши. Она не уехала, ее увезли.`,
      `Для ее семьи. Они, британцы, не имеют представления ни о Советском Союзе, ни об Израиле, ни о том, что значит быть олим ходашим ми Русия в Израиле.
       На сколько Европа и мы имеем разную историю одних и тех же событий мне пришло в голову, когда я сказала новым своим родственникам: мое свидетельство о рождении выдано в первый день Второй Мировой войны и меня спросили: сентябрь1939-ого. Вот так, для нас это июнь 1941-ого, а их уже 2 года бомбят. И немного для тех, кто в России.`,
      `Маша давно и упорно просила: "Пиши, как всё это было". Даже тетрадку для этого купила - очень красивую. Я начала писать и время от времени читала Маше. И однажды она сказала: "Я хочу сделать из этого фильм." Мы начали снимать, но, увы, вскоре пришли к выводу: Маша - не Стивен Спилберг, а я - не Морган Фриман. Так родился этот сайт "Каждый выбирает для себя". Я ходила и бормотала эти стихи  ("Каждый выбирает для себя" стихи Юрия Левитанского)  то так, то сяк. И вдруг осознала - ну так я последние зо лет и живу в стране где у человека действительно есть выбор. Он - и только он - решает: "Дьяволу cлужить или пророку..." Я не хочу сказать что в Израиле нет жуликов, ловкачей и прочих . Но в Израиле есть возможность жить без всего этого, и при этом не нужно быть ни героем, ни борцом, а просто - в лучшем смысле этого слова - обывателем.`,
      ` У нас есть возможность. Именно возможность. И уже наше дело - воспользоваться ею или нет.`,
    ],

    h4_2: `Моя история состоит из четырёх частей.`,
    paragraphs3: [
      `Первая глава рассказывает о том, как ко мне пришло ощущение невозможности продолжать жить в России - стране с её законами, а точнее, с беззаконием, где несчастное, унижаемое на каждом шагу общество забыло о чувстве собственного достоинства.`,
      `Вторая глава посвящена нашему новому началу в другой стране - жизни, полной испытаний, но также чудес, красоты и открытий. Это была земля, где нам пришлось строить всё с нуля, но каждый маленький шаг вперёд ощущался как настоящая победа.`,
      `Третья глава - это сборник маленьких историй, рассказанных моей дочерью, - порой забавных, порой трогательных.`,
      `И, наконец, последняя глава  принадлежит моей маме. Через её письма вы увидите наш путь её глазами. Эти письма совсем не похожи на послания старой, очень больной женщины, оказавшейся на склоне лет в совершенно ином мире: другой климат, еда, одежда, праздники - да и вообще всё, всё другое. Она нисколько не растеряна, с радостью подмечает всё хорошее, не жалуется и не сетует на вполне естественные трудности.`
    ]
  },



         /* -------- English -------- */

  en: {
    h1: `We’re given the opportunity, the real opportunity, and it’s up to us whether we use it or not.`,
   pBetween: [
  `The title of my story, “Everybody Chooses for Oneself,” is inspired by the poignant poem “Каждый выбирает для себя” (“Everybody Chooses for Oneself...”) by Yuri Levitansky, a celebrated Soviet and Russian poet. His words remind me that each of us faces profound choices that shape our lives - and that no one else can make those decisions for us.`,
  `This is my story: the journey I took when I decided to leave the Soviet Union, the challenges of my early years as an immigrant in Israel, and how I built a new life through courage and determination..`,
  `It is also a story shared by many - of people who make difficult choices in search of hope, belonging, and a new beginning.`
],
    h2: `About Our Aliyah`,

   
  paragraphsBeforeH3: [
    `*Aliyah (עלייה) is a Hebrew word that means “ascent” or “going up.” In Jewish tradition, it refers to the act of immigrating to Israel - making the move to live in the Land of Israel.`
  ],


    h3: `What does “our” mean?`,
    paragraphs1: [
      `It was my daughter Masha’s idea: three women - my mother, Masha, and me — will tell the story of that time. But what about our grandmother? Well… we’ll tell her story too - through her letters.
       I have her letters to Tomochka and Erik (they sent them to me when I asked), as well as letters to Igor, my husband. You could say these are letters from the front lines - raw, touching, and honest. Tomochka and I can’t even read them without crying…but there’s no way around it.
         `
    ],

    h3_2: `Here are these three women`,
    photoDesktop: "images/desktop-images/threeWomen-desktop.jpg",
    photoMobile: "images/mobile-images/threeWomen-mobile.webp",

    h4: `Who is this written for?`,
    paragraphs2: [
      `For Masha. She didn’t leave by choice - she was taken away.`,
      `For her family. They’re British and have no real understanding of the Soviet Union, Israel, or what it means to be “Olim chadashim mi-Russia” — new immigrants from Russia - in Israel.
       I realized how differently Europe and we experience the same history when I told my new relatives: “My birth certificate was issued on the very first day of World War II,” and they asked, “September 1939?” Yes, for us, it was June 1941, but for them, the bombing had been going on for two years already. .
       `,
      `And a bit for those who are still in Russia.`,
      `Masha had long and persistently asked me, “Write down how it all was.” She even bought a beautiful notebook for it. I started writing and would read bits to her now and then. One day, she said, “I want to make a film out of this.” We started filming, but sadly soon realized: Masha is not Steven Spielberg, and I’m not Morgan Freeman. And that’s how my website “Everybody chooses for oneself” came to life. I kept murmuring this poem (“Each Person Chooses for Themselves” by Yuri Levitansky). Then it hit me - for the last thirty years, I’ve been living in a country where a person truly has a choice. “He - and only he - decides: ‘To serve the devil or the prophet…’” I’m not saying there are no crooks, tricksters, and the like in Israel. But here, you have the chance to live without all that - and you don’t need to be a hero or a fighter, just an ordinary person in the best sense of the word.`,
      `We have the opportunity. The real opportunity. And it’s up to us to decide whether to use it or not.`

  
    ],

    h4_2: `My story has four parts `,
    paragraphs3: [
      `The first chapter tells how I came to feel that I could no longer continue living in Russia—a country with its laws, or rather, its lawlessness—where a society, miserable and humiliated at every turn, had forgotten what it means to have dignity.`,
      `The second chapter is about our new beginning in another country—a life full of challenges, but also wonders, beauty, and discoveries. It was a land where we had to build everything from scratch, yet every small step forward felt like a true victory.`,
      `The third chapter is a collection of little stories told by my daughter—sometimes funny, sometimes deeply touching.`,
      `And finally, the last chapter belongs to my mother. Through her letters, you will see our journey through her eyes. These letters are nothing like the messages you might expect from an elderly, very ill woman, suddenly living in a completely different world: a new climate, new food, new clothes, new holidays—everything, really, was different. She is far from lost; she delights in the good, never complains, and never dwells on the natural hardships.`
    ]
  },



     /* -------- Hebrow -------- */



   he: {
    h1: `יש לנו אפשרות — כן, אפשרות אמיתית — ומה שנעשה איתה, תלוי רק בנו. `,
    pBetween: [
  `כותרת סיפורי, "כל אחד בוחר לעצמו", בהשראת השיר "Каждый выбирает для себя" ("כל אחד בוחר לעצמו...") מאת המשורר הסובייטי והרוסי הנודע יורי לוויטנסקי.
 מילותיו מזכירות לי שכל אחד מאיתנו ניצב בפני בחירות עמוקות שמעצבות את חייו — ושאיש מלבדנו אינו יכול לקבל את ההחלטות הללו במקומנו.`,
  `זהו המסע שבו בחרתי לעזוב את ברית המועצות, האתגרים שעמדו בפניי בשנותיי הראשונות כעולה חדשה בישראל, והדרך שבה בניתי חיים חדשים מתוך אומץ ונחישות.`,
  `זהו גם סיפורם של רבים אחרים — אנשים שבוחרים בדרכים קשות בחיפוש אחר תקווה, שייכות, והתחלה חדשה.`
],
    h2: `על העלייה שלנו`,
    
 

    h3: `מה משמעות "שלנו"?`,
    paragraphs1: [
      `הרעיון לספר על העלייה שלנו היה של מָאשָׁה, הבת שלי.
שלוש נשים - אמא, מאשה ואני - נכתוב על אותה תקופה.  

אבל מה עם סבתא? הרי הסיפור הוא גם שלה…  
נכתוב בשמה, דרך המכתבים שלה.  

יש לי את המכתבים שכתבה לֶטוֹמוֹצ'קָה ולֶאֶרִיק (הם שלחו לי אותם לפי בקשתי), וגם את המכתבים ששלחה לאִיגוֹר, בעלי.  
אלו מכתבים שנכתבו מן החזית - ישירים, מרגשים, כנים עד כאב. 
טוֹמוֹצ'קָה ואני כמעט לא מצליחות לקרוא אותם מבלי לבכות.  
אבל אין ברירה. 
`
    ],

    h3_2: `הנה אנחנו - שלוש נשים, שלוש דורות, סיפור אחד. 
`,
    photoDesktop: "images/desktop-images/threeWomen-desktop.jpg",
    photoMobile: "images/mobile-images/threeWomen-mobile.webp",

    h4: `ולמי כל זה נכתב? `,
    paragraphs2: [
      `למָאשָׁה.`,
      `היא לא עזבה - לקחו אותה.  `,
      `למשפחה שלה.  
הם בריטים, ואין להם מושג אמיתי לא על ברית המועצות, לא על ישראל, ולא על מה פירוש להיות עולים חדשים מרוסיה בישראל.  
`,
      `הבנתי כמה ההיסטוריה שלנו שונה מההיסטוריה האירופית כשסיפרתי לקרובי המשפחה החדשים שלי שתעודת הלידה שלי הונפקה ביום הראשון של מלחמת העולם השנייה.  
הם שאלו: "ספטמבר 1939?"  
עבורם המלחמה כבר נמשכה שנתיים - בשבילנו היא התחילה רק ביוני 1941. 
`,
       `וקצת - גם עבור אלה שעדיין ברוסיה.  `,
        `מָאשָׁה ביקשה ממני שוב ושוב: "תכתבי איך זה באמת היה."  
אפילו קנתה בשביל זה מחברת יפהפייה.  
`,
         `התחלתי לכתוב, ולפעמים קראתי לה את מה שיצא.  
יום אחד היא אמרה: "אני רוצה לעשות מזה סרט."  `,
          `ניסינו לצלם, אבל מהר מאוד הבנו -  
מָאשָׁה לא סטיבן ספילברג, ואני לא מורגן פרימן.  
`,
           `כך נולד האתר הזה: "כל אחד בוחר לעצמו".  `,
            `
הלכתי ומללתי לעצמי את השיר של יוּרִי לַבֶּטַנְסְקִי – "כָּל אֶחָד בּוֹחֵר לְעַצְמוֹ". 
פעם כך, ופעם אחרת.  
ופתאום הבנתי:  
כך אני חיה כבר כמעט שלושים שנה — בארץ שבה לאדם באמת יש בחירה.  
`,
             `"...הוא, ורק הוא, מחליט: "אם לשמש את השטן — או את הנביא."  `,
              `אני לא טוענת שבישראל אין רמאים, ערמומיים ושאר טיפוסים כאלה.  
אבל בישראל יש אפשרות לחיות בלי כל זה.  
ואין צורך להיות לא גיבורה ולא לוחמת —  
רק פשוט, במובן היפה ביותר של המילה, אדם רגיל.  
`,
               `יש לנו אפשרות. אפשרות אמיתית. ומה נעשה איתה – זה כבר תלוי בנו.`
                
    ],

h4_2: `הסיפור שלי מורכב מארבעה חלקים`,
paragraphs3: [
  `הפרק הראשון מספר על הרגע שבו הרגשתי שאין לי איך להמשיך לחיות ברוסיה - במדינה עם “החוקים” שלה, או בעצם בלי חוקים בכלל, מקום שבו חברה שלמה, אומללה ומדוכאת בכל צעד, כבר שכחה מה זה כבוד עצמי.`,
  `הפרק השני מוקדש לתחילתו החדשה שלנו במדינה אחרת – חיים מלאי אתגרים, אבל גם ניסים, יופי ותגליות. זו הייתה אדמה שבה היינו חייבות לבנות הכל מאפס, אבל כל צעד קטן קדימה הרגיש כמו ניצחון אמיתי.`,
  `הפרק השלישי הוא אוסף של סיפורים קטנים שסיפרה בתי מָאשָׁה - לפעמים מצחיקים, לפעמים נוגעים ללב.`,
  `ולבסוף, הפרק האחרון שייך לאמא שלי. דרך המכתבים שלה תראו את הדרך שלנו בעיניים שלה. המכתבים האלו בכלל לא נראים כמו מסרים של אישה זקנה, חולה מאוד, שנמצאת בשנותיה האחרונות בעולם שונה לחלוטין: אקלים אחר, אוכל, בגדים, חגים - ובכלל, הכל שונה. היא בכלל לא מבולבלת, בשמחה מבחינה בכל הטוב, לא מתלוננת ולא קובלת על הקשיים הטבעיים.`
]
}
};








  /* -------- styles for the above text -------- */



const Index = () => {
  const [lang, setLang] = useState("ru"); // default Russian

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div className="h-20"></div>

  {/* ---------- Desktop-only Hero section ---------- */}
<div className="w-full hidden lg:block">


    {/* logic for hero desktop */}
  <img
    src={
      lang === "ru"
        ? "images/desktop-images/hero-ru-desktop.webp"
        : lang === "en"
        ? "images/desktop-images/hero-en-desktop.webp"
        : "images/desktop-images/hero-he-desktop.webp"
    }
    alt="Hero"
    className="w-full h-auto block"
  />


  

  <div className="relative w-full -mt-[380px]">
    <img
      src="images/desktop-images/wave-index-entro.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

<div
  dir={lang === "he" ? "rtl" : "ltr"}
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white
    [&>h1]:text-[4.5vw]
    [&>h3]:text-[2.5vw] [&>h3]:mt-10 [&>h3]:mb-16
    [&>p]:text-[1.25vw] [&>p]:mt-6
    md:[&>p]:text-[1.38vw] lg:[&>p]:text-[1.55vw]
    ${lang === "ru" ? "[&>h2]:text-[10vw]" : "[&>h2]:text-[7vw]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>


  </div>
</div>
{/* -------- end of desktop-only hero -------- */}


{/* ---------- Tablet-only Hero section ---------- */}
<div className="hidden md:block lg:hidden w-full">


  {/* logic for hero tablet */}
  <img
    src={
      lang === "ru"
        ? "images/ipad-images/hero-ru-ipad.webp"
        : lang === "en"
        ? "images/ipad-images/hero-en-ipad.webp"
        : "images/ipad-images/hero-he-ipad.webp"
    }
    alt="Hero"
    className="w-full h-auto block"
  />



  
  <div className="relative w-full -mt-[200px]">
    <img
      src="images/ipad-images/first-wave-tablet.svg"
      alt="Wave"
      className="w-full h-auto block"
    />
   <div
  dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[85%] px-2 sm:px-4
    ${lang === "he" ? "font-rubik" : ""}
    [&>h1]:text-[5vw]
    [&>h3]:text-[3.5vw] [&>h3]:mt-8 [&>h3]:mb-12
    [&>p]:text-[2vw] [&>p]:mt-6 leading-relaxed
    ${lang === "ru" 
      ? "[&>h2]:text-[11vw]" 
      : "[&>h2]:text-[7vw]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>
  </div>
</div>
{/* -------- end of tablet-only hero -------- */}


  





{/* ---------- Mobile-only Hero section ---------- */}
<div className="block md:hidden w-full">
  <img
    src="images/mobile-images/hero-mobile.jpg"
    alt="Hero"
    className="w-full h-auto block"
  />

  <div className="relative w-full -mt-[115px]">
    <img
      src="images/mobile-images/wave-index-mobile.svg"
      alt="Wave"
      className="w-full h-auto block"
    />

<div
  dir={lang === "he" ? "rtl" : "ltr"} // keep RTL for Hebrew
  className={`
    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    text-center text-white w-[95%] sm:w-[70%]

    [&>h1]:text-[clamp(23px,8vw,80px)]
    [&>h3]:text-[clamp(23px,6vw,35px)] 
    [&>h3]:mt-16 [&>h3]:mb-16

    [&>p]:text-[clamp(16px,5vw,25px)] 
    [&>p]:mt-8

    ${lang === "ru" 
      ? "[&>h2]:text-[clamp(65px,14vw,200px)]" 
      : "[&>h2]:text-[clamp(50px,12vw,140px)]"}
  `}
>
  <TextOneOnly lang={lang} />
</div>

  </div>
</div>
{/* -------- end of mobile-only hero -------- */}









{/* ---------- styles for text json: TextOneOnly ---------- */}
<section className="px-[16px] sm:px-[24px] md:px-[32px] mt-[48px]">
  <div
    className={`max-w-[720px] mx-auto text-center ${lang === "he" ? "font-rubik" : ""}`}
    dir={lang === "he" ? "rtl" : "ltr"} // RTL for Hebrew
  >

    {/* H1 - quote */}
    <h1 className="text-white text-[22px] sm:text-[30px] md:text-[35px] lg:text-[45px] mb-8 italic">
      {texts[lang].h1}
    </h1>

    {/* 🌟 NEW: Conditional paragraph between H1 and H2 */}
  {texts[lang].pBetween && (
  <div className="mb-32 mt-32">
    {texts[lang].pBetween.map((paragraph, i) => (
      <p
        key={i}
        className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-6 leading-relaxed"
      >
        {paragraph}
      </p>
    ))}
  </div>
  )}

    {/* H2 */}
    <h2 className="text-white text-[50px] sm:text-[55px] md:text-[60px] lg:text-[65px] mb-8 mt-24">
      {texts[lang].h2}
    </h2>

    {/* Paragraphs before H3 (English only) */}
    {texts[lang].paragraphsBeforeH3 && (
      <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
        {texts[lang].paragraphsBeforeH3.map((p, i) => (
          <p key={i} className="mb-6">{p}</p>
        ))}
      </div>
    )}

    {/* H3 - intro */}
    <h3 className="text-white text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] mb-8">
      {texts[lang].h3}
    </h3>

    {/* Paragraphs - intro text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
      {texts[lang].paragraphs1.map((p, i) => (
        <p key={i} className="mb-8">{p}</p>
      ))}
    </div>

    {/* H3 - second heading */}
    <h3 className="text-white text-[28px] sm:text-[3px] md:text-[35px] lg:text-[40px] mb-8 mt-20">
      {texts[lang].h3_2}
    </h3>

    {/* Responsive photo */}
    <img
      src={texts[lang].photoDesktop}
      alt="------------"
      className="w-full h-auto hidden sm:block mb-16"
    />
    <img
      src={texts[lang].photoMobile}
      alt="--------------"
      className="w-full h-auto block mb-16 sm:hidden"
    />

    {/* H4 - subheading */}
    <h4 className="text-white text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] mt-32 mb-6">
      {texts[lang].h4}
    </h4>

    {/* Paragraphs - story text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 mt-16 leading-relaxed">
      {texts[lang].paragraphs2.map((p, i) => (
        <p key={i} className="mb-6">{p}</p>
      ))}
    </div>

    {/* H4 - next section heading */}
    <h4 className="text-white text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] mt-24 mb-6">
      {texts[lang].h4_2}
    </h4>

    {/* Paragraphs - final chapter text */}
    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mb-8 leading-relaxed">
      {texts[lang].paragraphs3.map((p, i) => (
        <p key={i} className="mb-6">{p}</p>
      ))}
    </div>

{/* -------- end of styles for text json ---------- */}







          

          <div className="flex justify-center mt-24">
            <ForwardButton />
          </div>
        </div>
      </section>

      {/* ---------- Chapters Section (desktop & tablet only) ---------- */}
      <ChapterSectionDesktop />

      {/* ---------- Chapters Section (mobile only) ---------- */}
      <ChapterSectionMobile />

      {/* ---------- Footer ---------- */}
      <Footer />
    </>
  );
};

export default Index;

