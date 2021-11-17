import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import LinkButton from "../components/LinkButton";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <DocumentTitle title="homepage">
      <div className=" mx-6">
        <div className="text-center">
          <h2 className="font-medium justify-center leading-loose my-2 sm:my-24 md:my-12 text-2xl md:text-4xl">
            {t("welcome")}
          </h2>
          <p className="text-xs md:text-lg tracking-tight">
            {t("presentation")}
          </p>
          <div className="bg-gray-200 flex flex-wrap h-28 my-2 place-content-center">
            Image
          </div>
          <p className="m-6 lg:my-16 sm:mb-20 text-xl md:text-3xl">
            {t("title")}
          </p>
          <p className="m-2 lg:mb-6 sm:mb-12 text-xs md:text-xl">
            {t("subTitle")}
          </p>
          <div className="gap-4 sm:gap-16 grid sm:grid-cols-2">
            <div>
              <LinkButton
                description={t("quizButton")}
                url={"quiz"}
                fontSize={"text-xs"}
                padding={"px-4 py-4"}
                margin={"mx-2"}
              />
            </div>
            <div>
              <LinkButton
                description={t("listOrganisationButton")}
                url={"organisations"}
                fontSize={"text-xs"}
                padding={"px-2 py-4"}
                margin={"mx-2"}
              />
            </div>
          </div>
        </div>
        <p className="m-4 text-xs md:text-base text-start">
          {t("privacyPolicy")}
        </p>
      </div>
    </DocumentTitle>
  );
}
