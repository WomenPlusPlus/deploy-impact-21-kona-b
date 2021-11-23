import React, { Suspense } from "react";
import DocumentTitle from "react-document-title";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Quiz from "../components/quiz";

export default function QuizPage() {
  return (
    <DocumentTitle title="Quiz">
      <Suspense fallback={<Skeleton count={2} />}>
        <Quiz />
      </Suspense>
    </DocumentTitle>
  );
}
