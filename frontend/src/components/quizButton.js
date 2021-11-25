import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export default function QuizButton({ translationKey, setValue, active, Icon }) {
  const { t } = useTranslation("quiz");

  return (
    <>
      <button
        className={classNames(
          "sm:mr-6 px-4 py-2 rounded-lg shadow-lg text-xs",
          "bg-cream hover:border-KonaInspiredDark",
          { "border-2 border-konaInspiredDark": active },
          {"border border-gray-600 ": !active}
        )}
        type="button"
        onClick={() => setValue()}
      >
        {Icon && (
          <div className="text-xl flex justify-center mb-2">
            <Icon />
          </div>
        )}

        {t(translationKey)}
      </button>
    </>
  );
}
