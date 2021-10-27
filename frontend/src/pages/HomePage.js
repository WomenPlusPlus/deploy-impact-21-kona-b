import React from "react";
import DocumentTitle from "react-document-title";

import Button from "../components/button";

export default function HomePage() {
  return (
    <DocumentTitle title="homepage">
      <div>
        <div className="text-center my-12">
          <h2 className="font-medium justify-center leading-loose mb-20 sm:mb-24 lg:mb-32 mt-14 sm:mt-20 lg:mt-24 text-3xl sm:text-6xl">
            Welcome to <br />
            DOTS.
          </h2>
          <p className="leading-relaxed my-20 sm:my-20 lg:my-24 text-xl sm:text-3xl">
            We are your alternative legal aid connecting you to the right
            organisations.
          </p>
          <div className="gap-16 grid sm:grid-cols-2 m-8">
            <div>
              <p className="mb-2">
                You want to find an organisations in your current country:
              </p>
              <Button
                description={"List of organisations"}
                url={"organisations"}
              />
            </div>
            <div>
              <p className="mb-2">
                You want us to guide you to the right organisations depending on
                your needs:
              </p>
              <Button description={"Quiz"} url={"quiz"} />
            </div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}
