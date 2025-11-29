import React from "react";

const TextSecondPage = ({ lang = "ru" }) => {
    return (
    <>
      {lang === "ru" ? (
  <>
<h1>Прилетели мы в Израиль</h1>

    <p>
   Прилетели мы в Израиль поздним вечером 17 июня 1990 года. Летели венгерской авиакомпанией Малев с пересадкой в Будапеште. В аэропорту нас, летевших в Тель-Авив, отделили от остальных пассажиров, выставили вооруженную охрану - боялись террористов. 
    </p>


  </>


 ) : lang === "he" ? (
        <>
<h1>הגענו לישראל</h1>

    <p>
     הגענו לישראל בערב מאוחר, ב-17 ביוני 1990. טסנו עם חברת התעופה ההונגרית "מאלב" עם עצירת ביניים בבודפשט. בדרכנו לתל אביב הפרידו אותנו משאר הנוסעים, ושמו סביבנו שמירה חמושה - חששו מפעולות טרור.
    </p>


      </>
      ) : (
        <>

<h1>We Arrived in Israel</h1>

    <p>
  We arrived in Israel late in the evening on June 17, 1990. Our flight was with the Hungarian airline, Malev, with a layover in Budapest. At the airport, all of us flying to Tel Aviv were separated from the other passengers. Armed guards were posted - they were afraid of possible terrorist threats.
    </p>

        </>
      )}
    </>
  );
};



export default TextSecondPage;