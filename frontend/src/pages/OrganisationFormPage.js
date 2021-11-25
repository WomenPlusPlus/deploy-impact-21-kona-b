import React from "react";
import DocumentTitle from "react-document-title";

import ContactForm from "../components/contactForm";

export default function OrganisationFormPage() {
  return (
    <DocumentTitle title="Form to register new organisations">
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-5 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-3 col-span-7">
            <h1 className="border-b border-konaInspired col-span-3 my-8 text-2xl">
              Contact us
            </h1>
            <p className="mb-6">
              If you are an organisation based in Senegal and want us to add
              your details in Dots., please fill in the form below and we will
              get back to you.
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
