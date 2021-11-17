import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageButtons() {
  const languages = ["en", "fr"];
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {languages.flatMap((language, index) => {
        return [
          <button
            key={language}
            className="hover:bg-gray-100 m-1 p-1 text-xs uppercase"
            type="button"
            onClick={() => changeLanguage(language)}
          >
            {language}
          </button>,
          index < languages.length - 1 ? "/" : null,
        ];
      })}
    </div>
  );
}
