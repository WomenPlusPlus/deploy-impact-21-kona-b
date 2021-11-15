import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { api } from "../config";
import ContactDetails from "../components/contactDetails";
import RatingForm from "../components/ratingForm";

export default function OrganisationPage() {
  // Organisation example to used until we can access the database
  const [organisation, setOrganisation] = useState({
    contactable: "True",
    description:
      "Suspendisse non congue arcu. Aliquam gravida augue vel orci ultricies, vitae facilisis lectus laoreet. Aliquam lorem eros, porttitor ac euismod vulputate, consectetur sit amet nunc. Ut sit amet velit est.",
    id: "1",
    name: "La Liane",
    region: "Saint-Louis",
    subCategories: ["Shelter", "Food bank"],
    targetGroups: ["Children", "Women"],
    objective: "Better living conditions for women and children",
    email: "email@example.com",
    address: "12 rue principale, Dakar",
    phone: "012 234 12 12",
    website: "https://example.com",
    socialMedias: ["https://facebook.com", "https://twitter.com"],
  });

  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/organisations/${id}`).then((response) =>
      response.json().then((data) => {
        // API request to be used when the database will be updated
        setOrganisation({
          ...organisation,
          ...data[0],
        });
      })
    );
  }, []);

  return (
    <DocumentTitle title={organisation.name || "Organisation page"}>
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-5 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-3 col-span-7">
            <h1 className="border-b border-kona col-span-3 my-8 text-2xl uppercase">
              {organisation.name}
            </h1>
            <h2 className="font-bold mt-4 tracking-wide uppercase">
              Brief Description
            </h2>
            <p className="mb-4 text-justify text-sm">
              {organisation.description}
            </p>
            <h2 className="font-bold mt-4 tracking-wide uppercase">
              What do we offer
            </h2>
            <div className="mb-4">
              {organisation.subCategories.map((subCategory) => {
                return (
                  <ul key={subCategory}>
                    <li className="flex text-sm">{subCategory}</li>
                  </ul>
                );
              })}
            </div>
            <h2 className="font-bold mt-4 tracking-wide uppercase">
              Target Groups
            </h2>
            {organisation.targetGroups.map((targetGroup) => {
              return (
                <ul key={targetGroup}>
                  <li className="flex text-sm">{targetGroup}</li>
                </ul>
              );
            })}
            <h2 className="font-bold mt-4 tracking-wide uppercase">
              Objective
            </h2>
            <p className="text-sm">{organisation.objective}</p>
            <ContactDetails organisation={organisation} />
            <RatingForm />
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
