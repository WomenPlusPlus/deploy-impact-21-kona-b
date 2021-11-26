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
              <p key={link} className="mt-2">
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </p>
            ))}
      </main>
    </DocumentTitle>
  );
}
