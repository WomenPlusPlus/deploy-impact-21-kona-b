import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import Button from "../components/button";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <DocumentTitle title="homepage">
      <div>
        <div className="text-center">
          <p className="italic leading-relaxed text-xs">{t("presentation")}</p>
          <h2 className="font-medium justify-center leading-loose my-12 sm:my-24 lg:my-28 text-xl sm:text-3xl">
            {t("title")} <br /> Dots.
          </h2>
          <p className="mb-12 sm:mb-20 text-lg">{t("subTitle")}</p>
          <div className="gap-8 sm:gap-16 grid sm:grid-cols-2 m-8">
            <div>
              <Button
                description={t("listOrganisationButton")}
                url={"organisations"}
                height={"h-28"}
                width={"w-52"}
              />
              <p className="my-2 text-xs">{t("textListOrganisations")}</p>
            </div>
            <div>
              <Button
                description={t("quizButton")}
                url={"quiz"}
                height={"h-28"}
                width={"w-52"}
              />
              <p className="my-2 text-xs">{t("textQuiz")}</p>
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}
