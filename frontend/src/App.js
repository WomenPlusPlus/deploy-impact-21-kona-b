import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import HomePage from "./pages/HomePage";
import OrganisationsPage from "./pages/OrganisationsPage";
import QuizPage from "./pages/QuizPage";

export default function App() {
  return (
    <div className='m-5'>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/organisations" component={OrganisationsPage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
    </div>
  );
}
