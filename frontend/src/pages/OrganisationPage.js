import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

export default function OrganisationPage() {
  const organisationName = "";
  return (
    <DocumentTitle title={organisationName}>
      <>
        <h1>{organisationName}</h1>
        <Link to="/">Home</Link>
      </>
    </DocumentTitle>
  );
}
