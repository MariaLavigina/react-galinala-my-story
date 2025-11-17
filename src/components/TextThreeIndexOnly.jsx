// TextThreeIndexOnly.jsx
import React from "react";

const TextThreeIndexOnly = ({ lang = "ru" }) => (
  <>
    {lang === "ru" ? (
      <>
        <h1>Про нашу алию</h1>
        <h2>Что значит “нашу”?</h2>
        <p>
          Это идея Маши: три женщины - мама, Маша и я - напишем об этом времени. А как же наша бабушка? Ведь… А мы напишем за неё - по её письмам. У меня есть её письма к Томочке и Эрику (они прислали их мне по моей просьбе), а также письма к Игорю, которые я попросила вернуть. Можно сказать, это письма с фронта - непосредственные, трогательные, искренние. Томочка и я не можем их читать - ревём и всё тут. Но деваться некуда.
        </p>
      </>
    ) : (
      <>
        <h1>About Our Aliyah</h1>
        <h2>What does "our" mean?</h2>
        <p>
          This was Masha’s idea: three women – mom, Masha, and I – would write about that time. But what about our grandmother? Well… we will write for her based on her letters. I have her letters to Tomochka and Erik (they sent them to me at my request) as well as letters to Igor that I asked to be returned. You could say these are front-line letters – direct, touching, and sincere. Tomochka and I cannot read them – we cry, and that’s it. But there’s no other way.
        </p>
      </>
    )}
  </>
);

export default TextThreeIndexOnly;
