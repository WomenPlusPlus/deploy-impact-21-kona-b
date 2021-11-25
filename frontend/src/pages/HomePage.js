import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import LinkButton from "../components/linkButton";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <DocumentTitle title="homepage">
      <>
        <div className="text-center">
          <p className="my-2 text-xs tracking-tight">{t("presentation")}</p>
          <div className="grid grid-cols-2 ">
            <div className="bg-colourful-tree bg-contain bg-center bg-no-repeat h-32 md:h-72"></div>
            <h2 className="self-center text-xl sm:text-4xl lg:text-6xl">
              {t("welcome.0")} <br />
              {t("welcome.1")}
              <br />
              {t("welcome.2")}
            </h2>
          </div>
          <p className="my-6 lg:mt-16 lg:mb-8 sm:mb-8 text-xl md:text-3xl">
            {t("title")}
          </p>
          <div className="gap-4 sm:gap-16 grid sm:grid-cols-2">
            <div>
              <LinkButton
                description={t("quizButton")}
                url={"quiz"}
                fontSize={""}
                padding={"px-4 py-4"}
                margin={"mx-0"}
                border={"border-2  border-konaInspiredDark"}
              />
            </div>
            <div>
              <LinkButton
                description={t("listOrganisationButton")}
                url={"organisations"}
                fontSize={""}
                padding={"px-2 py-4"}
                margin={"mx-0"}
                border={"border-2  border-konaInspiredDark"}
              />
            </div>
          </div>
        </div>
        <div className="p-6 sm:pb-24 md:mt-8 w-full text-xs text-center">
          <div>{t("privacyPolicy.0")}</div>
          <Link className="underline" to="/privacy-policy">
            {t("privacyPolicy.1")}
          </Link>
        </div>
      </>
    </DocumentTitle>
  );
}
