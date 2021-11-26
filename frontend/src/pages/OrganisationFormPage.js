import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import ContactForm from "../components/contactForm";

export default function OrganisationFormPage() {
  const { t } = useTranslation("organisationForm");

  return (
    <DocumentTitle title="Form to register new organisations">
      <main className="mx-7px">
        <h1 className="border-b border-konaInspired col-span-3 my-8 text-2xl">
          {t("title")}
        </h1>
        <p className="mb-6">{t("introduction")}</p>
        <ContactForm />
      </main>
    </DocumentTitle>
  );
}
