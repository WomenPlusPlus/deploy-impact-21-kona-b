import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <div className='m-5'>
      <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
    </div>
  );
}

export default App;
