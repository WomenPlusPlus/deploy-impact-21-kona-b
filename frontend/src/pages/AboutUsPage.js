import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation, Trans } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation("aboutUs");
  const paragraphs = ["text.0", "text.1"];
  const links = [
    "https://kona-connect.org/dots-legal-aid-tech",
    "https://www.womenplusplus.ch/deploy-impact",
  ];

  return (
    <DocumentTitle title="Privacy policy">
      <main className="mx-7px leading-relaxed">
        <h1
          className="mb-6 mt-12
             text-3xl uppercase"
        >
          {t("title")}
        </h1>
        {paragraphs.map((paragraph) => (
          <p className="mb-6" key={paragraph}>
            {t(paragraph)}
          </p>
        ))}
        <p>{t("contact")}</p>
        <p className="mb-6">
          <a
            href="https://kona-connect.org/contact"
            target="_blank"
            rel="noreferrer"
          >
            https://kona-connect.org/contact
          </a>
        </p>
        <p>{t("moreInfo")}</p>
        {links.map((link) => (
          <p key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </p>
        ))}
      </main>
    </DocumentTitle>
  );
}
