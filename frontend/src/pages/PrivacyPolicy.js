import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation("privacyPolicy");

  const paragraphs = [
    "text.0",
    "text.1",
    "text.2",
    "text.3",
    "text.4",
    "text.5",
    "text.6",
    "text.7",
    "text.8",
  ];

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
            {paragraphs.map((paragraph) => (
              <p className="mb-6 leading-relaxed" key={paragraph}>
                {t(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
