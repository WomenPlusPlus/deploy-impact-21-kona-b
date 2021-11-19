import React from "react";
import { useTranslation } from "react-i18next";

export default function QuizButton({ translationKey, setValue, active, Icon }) {
  const { t } = useTranslation("quiz");

  const classNames =
    "border border-gray-200 hover:bg-gray-200 sm:mr-6 px-4 py-2 rounded text-xs uppercase";

  return (
    <>
      <button
        className={active ? `${classNames} border-kona` : classNames}
        type="button"
        onClick={() => setValue()}
      >
        <div className="text-xl flex justify-center mb-2">
          {Icon && <Icon />}
        </div>

        {t(translationKey)}
      </button>
    </>
  );
}
