import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/button";
import LanguageButtons from "./languageButtons";

export default function Navigation() {
  return (
    <nav className="border-b-2 border-kona mx-2 lg:mx-6 p-6">
      <div className="relative flex items-end justify-between mx-auto max-w-xl lg:max-w-4xl mt-8 space-x-2 sm:space-x-18 lg:space-x-30">
        <Link to="/" className="text-md sm:text-3xl text-kona">
          Dots. logo
        </Link>
        <div className="flex flex-col justify-between">
          <div className="absolute bottom-10 right-0">
            <LanguageButtons />
          </div>
          <div>
            <Button
              description={"menu"}
              url={""}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
