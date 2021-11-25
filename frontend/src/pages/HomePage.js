import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import LinkButton from "../components/LinkButton";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <DocumentTitle title="homepage">
      <>
        <div className="text-center">
          <p className="my-2 text-xs md:text-lg tracking-tight">
            {t("presentation")}
          </p>
          <div className="flex bg-tree-made-with-hands bg-cover h-28 lg:h-60 justify-end md:justify-center">
            <h2 className="sm:my-6 md:my-12 mr-8 sm:ml-96 self-center text-2xl lg:text-5xl z-40">
              {t("welcome.0")} <br />
              {t("welcome.1")}
              <br />
              {t("welcome.2")}
            </h2>
          </div>
          <p className="my-6 lg:my-16 sm:mb-20 text-xl md:text-3xl">
            {t("title")}
          </p>
          <div className="gap-4 sm:gap-16 grid sm:grid-cols-2">
            <div>
              <LinkButton
                description={t("quizButton")}
                url={"quiz"}
                fontSize={"text-xs"}
                padding={"px-4 py-4"}
                margin={"mx-0"}
                uppercase={"uppercase"}
              />
            </div>
            <div>
              <LinkButton
                description={t("listOrganisationButton")}
                url={"organisations"}
                fontSize={"text-xs"}
                padding={"px-2 py-4"}
                margin={"mx-0"}
                uppercase={"uppercase"}
              />
            </div>
          </div>
        </div>
        <div className="p-6 sm:pb-24 w-full text-xs text-center">
              <div>{t("privacyPolicy.0")}</div>
              <Link  className="underline" to="/privacy-policy">{t("privacyPolicy.1")}</Link>
            </div>
      </>
    </DocumentTitle>
  );
}
