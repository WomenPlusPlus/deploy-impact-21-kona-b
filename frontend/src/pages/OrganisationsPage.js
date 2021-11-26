import React from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import OrganisationsTable from "../components/organisationsTable";

export default function OrganisationsPage() {
  const { t } = useTranslation("organisations");

  return (
    <DocumentTitle title="Organisations">
      <main className="mx-7px">
        <h1 className="border-b border-konaInspired col-span-3 my-8 text-2xl">
          {t("title")}
        </h1>
        <p className="mb-6">{t("presentation")}</p>
        <OrganisationsTable />
      </main>
    </DocumentTitle>
  );
}
