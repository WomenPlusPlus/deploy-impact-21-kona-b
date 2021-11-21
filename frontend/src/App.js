import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SWRConfig } from "swr";

import Navigation from "./components/navigation";
import HomePage from "./pages/HomePage";
import OrganisationPage from "./pages/OrganisationPage";
import QuizPage from "./pages/QuizPage";
import OrganisationsPage from "./pages/OrganisationsPage";
import OrganisationFormPage from "./pages/OrganisationFormPage";
import PrivacyPolicyPage from "./pages/PivacyPolicy";
import AboutUsPage from "./pages/AboutUsPage";

// used by SWR to make and cache API get request
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
        suspense: true,
      }}
    >
      <Suspense fallback={<Skeleton />}>
        <div className="grid grid-cols-9 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-1 col-span-9 sm:col-span-7 mx-2 sm:mx-0">
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/organisations/:id" component={OrganisationPage} />
              <Route path="/quiz" component={QuizPage} />
              <Route path="/organisations" component={OrganisationsPage} />
              <Route
                path="/organisation-form"
                component={OrganisationFormPage}
              />
              <Route path="/privacy-policy" component={PrivacyPolicyPage} />
              <Route path="/about-us" component={AboutUsPage} />
            </Switch>
          </div>
        </div>
      </Suspense>
    </SWRConfig>
  );
}
