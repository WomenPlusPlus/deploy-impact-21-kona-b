import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SWRConfig } from "swr";
import AddToHomescreen from "react-add-to-homescreen";

import Navigation from "./components/navigation";
import HomePage from "./pages/HomePage";
import OrganisationPage from "./pages/OrganisationPage";
import QuizPage from "./pages/QuizPage";
import OrganisationsPage from "./pages/OrganisationsPage";
import OrganisationFormPage from "./pages/OrganisationFormPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";
import QuizResultsPage from "./pages/QuizResultsPage";

// used by SWR to make and cache API get request
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App() {
  const handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  return (
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <Suspense fallback={<Skeleton />}>
        <div className="grid grid-cols-9 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile">
          <div className="col-start-1 sm:col-start-1 col-span-9 sm:col-span-7 mx-2 sm:mx-0">
            <Navigation />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/results" element={<QuizResultsPage />} />
              <Route
                path="/organisations"
                element={<OrganisationsPage />}
              />
              <Route path="/organisations/:id" element={<OrganisationPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/organisations" element={<OrganisationsPage />} />
              <Route
                path="/organisation-form"
                element={<OrganisationFormPage />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
            </Routes>
          </div>
        </div>
        <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
      </Suspense>
    </SWRConfig>
  );
}
