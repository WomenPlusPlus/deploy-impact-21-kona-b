import React from "react";
import { Link } from "react-router-dom";

import LinkButton from "./LinkButton";
import LanguageButtons from "./languageButtons";

export default function Navigation() {
  return (
    <nav className="border-b-2 border-kona mx-2 lg:mx-6">
      <div className="relative flex items-end justify-between mx-auto max-w-xl lg:max-w-4xl mt-6 space-x-2 sm:space-x-18 lg:space-x-30">
        <Link to="/" className="text-md sm:text-3xl text-kona">
          Dots. logo
        </Link>
        <div className="flex flex-col justify-between">
          <div className="absolute bottom-5 right-0">
            <LanguageButtons />
          </div>
          <div>
            <LinkButton
              description={"menu"}
              url={""}
              fontSize={""}
              padding={""}
              margin={""}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
