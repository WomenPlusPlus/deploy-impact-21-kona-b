import React from "react";
import { useTranslation } from "react-i18next";

export default function QuizButton({ translationKey, setValue, active }) {
  const { t } = useTranslation("quiz");

  const classNames =
    "border border-gray-200 hover:bg-gray-200 sm:mr-6 px-4 py-2 rounded text-sm uppercase";
  return (
    <button
      className={active ? `${classNames} border-kona` : classNames}
      type="button"
      onClick={() => setValue()}
    >
      {t(translationKey)}
    </button>
  );
}
