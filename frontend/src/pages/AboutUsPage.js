import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation, Trans } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation("aboutUs");
  const paragraphs = ["text.0", "text.1"];
  const links = [
    "https://kona-connect.org/",
    "https://kona-connect.org/dots-legal-aid-tech/",
    "https://www.womenplusplus.ch/deploy-impact",
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
            <p>
              <Trans i18nKey="contact" t={t}>
                If you want to contact Kona Connect, please go{" "}
                <a
                  href="https://kona-connect.org/contact/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </Trans>
            </p>
            {links.map((link) => (
              <p key="link" className="mt-2">
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
