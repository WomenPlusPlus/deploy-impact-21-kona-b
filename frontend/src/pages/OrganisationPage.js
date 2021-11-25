import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { api } from "../config";
import { useTranslation } from "react-i18next";

import ContactDetails from "../components/contactDetails";
import RatingForm from "../components/ratingForm";
import iconMap from "../lib/iconMap";

export default function OrganisationPage() {
  const { t } = useTranslation(["organisation", "quiz"]);

  const [organisation, setOrganisation] = useState({});

  // API fetch request get info about each organisation
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/organisations/${id}`).then((response) =>
      response.json().then((data) => {
        setOrganisation({
          ...data[0],
        });
      })
    );
  }, []);

  return (
    <DocumentTitle title={organisation?.name || "Organisation page"}>
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-5 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-3 col-span-7">
            <h1 className="border-b border-konaInspired col-span-3 my-8 text-2xl uppercase">
              {organisation?.name}
            </h1>
            <p className="mb-4 text-justify text-sm">
              {organisation?.objective}
            </p>
            <h2 className="mt-8 tracking-wide uppercase text-lg">
              {t("whatTheyOffer")}
            </h2>
            <div className="mb-4">
              <ul className="list-disc list-inside text-sm">
                {organisation.dots_subCategories?.map((subCategory) => {
                  return (
                    <li key={subCategory} className="ml-2">
                      {t(`dots_subCategories.filters.${subCategory}`, {
                        ns: "quiz",
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
            <h2 className="mt-8 tracking-wide uppercase text-lg">
              {t("targetGroups")}
            </h2>
            <div>
              <ul className="ml-2">
                {organisation.gender?.map((eachGender) => {
                  // checking which icons to use depending on the gender
                  const IconsGender = iconMap[eachGender];

                  return (
                    <li key={eachGender} className="flex text-sm">
                      {t(`gender.filters.${eachGender}`, {
                        ns: "quiz",
                      })}
                      {/* if there is an icon display it */}
                      <div className="ml-1">
                        {IconsGender && <IconsGender />}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="ml-2">
                {organisation.age?.map((eachAge) => {
                  const IconsAge = iconMap[eachAge];
                  return (
                    <li key={eachAge} className="flex text-sm">
                      {t(`age.filters.${eachAge}`, {
                        ns: "quiz",
                      })}
                      {/* if there is an icon display it */}
                      <div className="ml-1">{IconsAge && <IconsAge />}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ContactDetails organisation={organisation} />
            <RatingForm />
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
