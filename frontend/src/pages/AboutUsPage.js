import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation("aboutUs");

  return (
    <DocumentTitle title="Privacy policy">
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-5 col-span-7">
            <h1
              className="mb-6 mt-12
             text-3xl uppercase"
            >
              {t("title")}
            </h1>
            
              <p className="mb-6 leading-relaxed">{t('text')}</p>
          
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
