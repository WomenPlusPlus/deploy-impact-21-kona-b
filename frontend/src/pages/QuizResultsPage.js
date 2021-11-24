import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classNames from "classnames";

import organisationsFilter from "../lib/organisationsFilter.json";
import LinkButton from "../components/LinkButton";
import iconMap from "../lib/iconMap";

export default function QuizResultsPage() {
  const { t } = useTranslation("quizResults");
  const numberOfQuestions = 6;
  const [organisations, setOrganisations] = useState(organisationsFilter);
  return (
    <div>
      <h1 className="mt-4 text-xl text-center">{t("title")}</h1>
      <div className="flex justify-center">
        <div className="mt-6 text-center bg-cream shadow-lg">
          <LinkButton
            description={`${t("buttonRetakeQuestionnaire")}`}
            url={"quiz"}
            fontSize={"text-xs"}
            padding={"px-6 py-1"}
            margin={"mx-0"}
          />
        </div>
      </div>
      {organisations.map((organisation) => {
        const score = (organisation.score / (numberOfQuestions - 1)) * 100;

        console.log("score", score);
        const Icons = organisation.dots_categories
          .map((category) => iconMap[category])
          .filter(Boolean);

        return (
          <Link to={`/organisations/${organisation.id}`}>
            <div
              className={classNames(
                "grid grid-cols-5 bg-cream border border-blueDark bg-cream",
                "hover:border-orangeDark my-8 sm:mx-36 p-2 sm:p-4 shadow-lg rounded-lg"
              )}
              key={organisation.name}
            >
              <div className="flex flex-wrap content-center bg-gray-200 text-sm h-13">LOGO</div>
              <div className="col-span-4 ">
                <div className="font-bold text-blueDark text-left leading-snug ml-2">
                  {organisation.name}
                </div>
                {/* if the score > 80% then it's very relevant */}
                {/* if score < 40% it's less relevant */}
                {/* else possibly relevant */}
                <div className="flex flex-row ml-2 mt-2">
                  {score > 40 ? (
                    score > 80 ? (
                      <div className="mb-2 text-xs font-bold text-greenRelevantDark">
                        {t("veryRelevant")}
                      </div>
                    ) : (
                      <div className="mb-2 text-xs font-bold text-yellow-600">
                        {t("possiblyRelevant")}
                      </div>
                    )
                  ) : (
                    <div className="mb-2 text-xs font-bold text-red-800">
                      {t("less relevant")}
                    </div>
                  )}
                  {Icons.map((Icon) => (
                    <div className="pl-1">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-5 font-light text-xs mb-2 leading-relaxed">{organisation.objective}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
