import React from "react";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

export default function QuizzPage() {
  return (
    <DocumentTitle title="Quiz page">
      <>
        <h1>Quiz</h1>
        <Link to="/">Home</Link>
      </>
    </DocumentTitle>
  );
}
