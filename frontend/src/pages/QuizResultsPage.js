import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

import { api } from "../config";
import LinkButton from "../components/linkButton";
import iconMap from "../lib/iconMap";

export default function QuizResultsPage() {
  const { t } = useTranslation("quizResults");
  const [organisations, setOrganisations] = useState();

  // saves the query string of the URL
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {};
  const validParams = [
    "age",
    "gender",
    "region",
    "dots_categories",
    "dots_subcategories",
  ];

  // uses the query string of the URL to define the key and values(array) to request the backend
  searchParams.forEach((searchParam, searchKey) => {
    if (!validParams.includes(searchKey)) {
      return;
    }
    if (!filters[searchKey]) {
      filters[searchKey] = [];
    }
    filters[searchKey] = [...filters[searchKey], searchParam];
  });

  // defining the number of questions with the length of filters
  const numberOfQuestions = Object.keys(filters).length;

  // ideally that should be a GET request - should be changed when backend can change it.
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ filters }),
    };
    fetch(`${api}/organisations/filter`, requestOptions).then((response) =>
      response.json().then((data) => {
        setOrganisations(data);
      })
    );
  }, []);

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
            border={"border border-konaInspiredDark"}
          />
        </div>
      </div>
      {organisations?.map((organisation) => {
        const score = (organisation.score / numberOfQuestions) * 100;

        // checking which icons to use depending on the categories
        const Icons = organisation.dots_categories
          .map((category) => iconMap[category])
          .filter(Boolean);

        return (
          <div key={organisation.id}>
            <Link to={`/organisations/${organisation.id}`}>
              <div
                className={classNames(
                  "grid grid-cols-5 bg-cream border border-konaInspiredDark",
                  "hover:bg-gray-100 my-8 sm:mx-36 p-2 sm:p-4 shadow-lg rounded-lg"
                )}
                key={organisation.name}
              >
                <div className="flex flex-wrap content-center bg-gray-200 text-sm h-13">
                  LOGO
                </div>
                <div className="col-span-4 ml-2">
                  <div className="font-bold text-left leading-snug">
                    {organisation.name}
                  </div>
                  {/* if the score > 80% then it's very relevant */}
                  {/* if score < 40% it's less relevant */}
                  {/* else possibly relevant */}
                  <div className="mb-2 text-xs font-bold">
                    {score > 40 ? (
                      score > 80 ? (
                        <div className="text-greenRelevantDark">
                          {t("veryRelevant")}
                        </div>
                      ) : (
                        <div className="text-yellow-600">
                          {t("possiblyRelevant")}
                        </div>
                      )
                    ) : (
                      <div className="text-red-800">{t("less relevant")}</div>
                    )}
                  </div>
                  <div className="flex flex-row">
                    {Icons.map((Icon, index) => (
                      <div className="mr-1" key={Icon + index}>
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-5 font-light text-xs mb-2 leading-relaxed">
                  {organisation.objective}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
