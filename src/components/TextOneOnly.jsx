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
            Меня зовут Галина. Я родилась в 1941 году в мире, который тогда назывался Советским Союзом. Эта история — не просто рассказ о прошлом, а путь моего личного пробуждения, который привёл меня к очень трудному, но как оказалось самому верному решению в моей жизни.
          </p>

          <p>
            Это рассказ о том, почему в 1990 году в возрасте почти 50-ти лет я решила покинуть Советский Союз вместе с моей мамой, которой на тот момент было за восемьдесят, и моей маленькой дочерью, которой было всего семь лет.
          </p>

          <p>
            Я решила назвать свою историю “Каждый выбирает для себя”, потому что в конце концов, где бы мы ни родились и чему бы нас ни учили, каждому из нас приходится делать СВОЙ выбор. Выбор между страхом и дерзостью, между молчанием и живым словом, между выживанием и подлинной жизнью.
          </p>

          <p>
            Это история о том, как свой выбор сделала я.
          </p>
        </>
      ) : (
        <>
          <h1>Everyone Chooses</h1>
          <h2>for Themselves</h2>
          <h3>This is a story of how a difficult choice turned into unexpected, incredible happiness.</h3>

          <p>
            My name is Galina. I was born in 1941 in a world then called the Soviet Union. This story is not just about the past, but about my personal awakening that led me to a very difficult, but ultimately the most correct decision in my life.
          </p>

          <p>
            This is the story of why, in 1990, at almost 50 years old, I decided to leave the Soviet Union with my mother, who was over eighty at the time, and my little daughter, who was only seven years old.
          </p>

          <p>
            I decided to name my story “Everyone Chooses for Themselves,” because, in the end, no matter where we are born or what we are taught, each of us has to make OUR OWN choice. A choice between fear and boldness, between silence and the living word, between mere survival and authentic life.
          </p>

          <p>
            This is the story of how I made my own choice.
          </p>
        </>
      )}
    </>
  );
};

export default TextOneOnly;
