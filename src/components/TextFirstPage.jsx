import React from "react";

const TextFirstPage = ({ lang = "ru" }) => {
  return (
    <>
      {lang === "ru" ? (
        <>
          <h1>Итак, начинаем!</h1>
          <h2>Почему я уехала</h2>
          <h3></h3>

          <p>
            Почему я уехала. Что заставило меня в свои почти 50 лет с 7-летней дочкой и 83-летней очень нездоровой мамой оставить все, все, все и уехать в совершенно незнакомую страну , не зная даже алфавита языка, на котором предстояло жить и работать. 
          </p>

          <p>
            По правде сказать, я не ехала в Израиль — я уезжала из страны, вернее из государства, реалии которого стали для меня вдруг невыносимы, я уже не хотела, не могла мириться с ними, они буквально выдавливали меня.
          </p>

          <p>
            Случилось словно вдруг, хотя, конечно, копилось исподволь. И произошло то, что — слава Богу — произошло: количество перешло в качество. Я помню, как это случилось. Надо сказать, что с приходом Горбачёва страна, казалось, была готова стать нормальным, цивилизованным, правовым государством. Без страха, без оглядки заговорили. Писали о том, что так долго было под запретом.
          </p>

          <p>
            Выступления депутатов на сессии Верховного совета ошеломляли и вселяли надежду. В университетском главном здании лобби превратилось в Гайд Парк. Стояли щиты с газетными вырезками - письмами и приказами «доброго дедушки» Ленина. Все его многочисленные «стрелять стрелять, стрелять» были подчеркнуты красным карандашом из-за чего сами щиты казались красными. Информация каждый день пополнялась, народ толпился, удивлялся, обсуждал.
          </p>

          <p>
            И вот — речь Горбачёва, которую все ждали с большими надеждами и которую широко транслировали. Слушаю — и что же? Те же штампы, тот же стиль. И я начинаю осознавать: нет, никаких коренных изменений быть не может — всё то же. Нет и не будет места в этой стране простому, в хорошем смысле этого слова, обывателю. Ты либо большой негодяй у “кормушки”, либо подворовывающий, жульничающий негодяй помельче, либо жертва их обоих, или... борец, герой — со всеми вытекающими последствиями.
          </p>
        </>
      ) : (
        <>
          <h1>So, let's begin!</h1>
          <h2>Why I Left</h2>
          <h3></h3>

          <p>
            Why I left. What made me, at almost 50 years old with a 7-year-old daughter and an 83-year-old very ill mother, leave everything behind and move to a completely unknown country without even knowing the alphabet of the language I would have to live and work in.
          </p>

          <p>
            To tell the truth, I wasn’t going to Israel — I was leaving my country, or rather the state, whose realities suddenly became unbearable for me; I no longer wanted or could tolerate them, they were literally pushing me out.
          </p>

          <p>
            It happened suddenly, though, of course, it had been building up gradually. And what happened — thank God — happened: quantity turned into quality. I remember how it happened. With Gorbachev’s arrival, the country seemed ready to become a normal, civilized, lawful state. People began speaking without fear, without looking over their shoulder. They wrote about things that had been forbidden for so long.
          </p>

          <p>
            Speeches by deputies in the Supreme Soviet sessions were astonishing and inspiring hope. In the main university building, the lobby turned into Hyde Park. Boards with newspaper clippings — letters and orders of “kind grandfather” Lenin — stood there. All his numerous “shoot, shoot, shoot” were underlined in red pencil, making the boards themselves appear red. Information was updated daily; people gathered, were surprised, discussed.
          </p>

          <p>
            And then came Gorbachev’s speech, awaited with great hope and widely broadcast. Listening — and what do I see? The same clichés, the same style. I begin to realize: no radical change can happen — everything remains the same. There will be no place in this country for an ordinary person, in the good sense of the word. You are either a big villain at the “trough,” a petty thief or cheat, a victim of both, or... a fighter, a hero — with all the resulting consequences.
          </p>
        </>
      )}
    </>
  );
};

export default TextFirstPage;
