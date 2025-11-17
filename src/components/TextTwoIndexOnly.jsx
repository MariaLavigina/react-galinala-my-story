import React from "react";

const TextTwoIndexOnly = ({ lang = "ru" }) => (
  <h2>
    {lang === "ru"
      ? "Мы имеем возможность, именно возможность и уже наше дело воспользоваться ею или нет."
      : "We have the opportunity, precisely the opportunity, and it is now our responsibility to use it or not."}
  </h2>
);

export default TextTwoIndexOnly;
