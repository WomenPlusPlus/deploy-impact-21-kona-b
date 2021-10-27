import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

export default function OrganisationsPage() {
  return (
    <DocumentTitle title="Page with the list of organisations">
      <>
        <h1>List of Organisations</h1>
        <Link to="/">Home</Link>
      </>
    </DocumentTitle>
  );
}
