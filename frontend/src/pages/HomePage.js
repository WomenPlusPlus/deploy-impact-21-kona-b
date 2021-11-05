import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import Button from "../components/button";

export default function HomePage() {
  const { t, i18n } = useTranslation("home");

  return (
    <DocumentTitle title="homepage">
      <div>
        <div className="text-center my-12">
          <h2 className="font-medium justify-center leading-loose mb-20 sm:mb-24 lg:mb-32 mt-14 sm:mt-20 lg:mt-24 text-3xl sm:text-6xl">
            {t("title")}
          </h2>
          <p className="leading-relaxed my-20 sm:my-20 lg:my-24 text-xl sm:text-3xl">
            {t("presentation")}
          </p>
          <div className="gap-16 grid sm:grid-cols-2 m-8">
            <div>
              <p className="mb-2">{t("textListOrganisations")}</p>
              <Button
                description={t("listOrganisationButton")}
                url={"organisations"}
              />
            </div>
            <div>
              <p className="mb-2">{t("textQuiz")}</p>
              <Button description={t("quizButton")} url={"quiz"} />
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}
