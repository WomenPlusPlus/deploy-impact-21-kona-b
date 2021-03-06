import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useTranslation } from "react-i18next";

import { api } from "../config";
import OrganisationFilters from "./organisationFilters";
import iconMap from "../lib/iconMap";

export default function OrganisationsTable() {
  const { t } = useTranslation("quiz, organisations");

  const [organisations, setOrganisations] = useState([]);

  // use API to get organisations data and set the state to organisations
  const [filteredOrganisations, setFilteredOrganisations] = useState([]);
  useEffect(() => {
    fetch(`${api}/organisations`).then((response) =>
      response.json().then((data) => {
        setOrganisations(data);
      })
    );
  }, []);

  const [active, setActive] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 gap-2 lg:gap-6">
      <button
        className="border border-gray-400 lg:hidden p-3 rounded-lg text-xs uppercase"
        type="button"
        onClick={() => {
          setActive(!active);
        }}
      >
        Filters
      </button>
      <div
        className={`${
          !active ? "" : "bg-gray-100 rounded-lg text-xs"
        } bg-gray-100 rounded-lg text-xs`}
      >
        <div className={`${active ? "" : "hidden"} lg:block`}>
          <OrganisationFilters
            organisations={organisations}
            setFilteredOrganisations={setFilteredOrganisations}
          />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6">
        <Table>
          <Thead>
            <Tr className="border-b-2 border-konaInspired pb-5 text-left align-bottom">
              <Th>
                {t("name", {
                  ns: "organisations",
                })}
              </Th>
              <Th>
                {t("region", {
                  ns: "organisations",
                })}
              </Th>
              <Th>
                {t("services", {
                  ns: "organisations",
                })}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredOrganisations.map((organisation) => {
              // checking which icons to use depending on the categories
              const iconCategories = organisation.dots_categories
                .map((category) => iconMap[category])
                .filter(Boolean);

              return (
                <Tr
                  className="border-b border-konaInspired rounded-lg mb-2 align-top"
                  key={organisation.id}
                >
                  <Td className="m-1">
                    <Link
                      className="col-span-2"
                      to={`/organisations/${organisation.id}`}
                    >
                      {organisation.name}
                    </Link>
                  </Td>
                  <Td className="m-1">
                    {organisation.region
                      .map((region) =>
                        t(`region.filters.${region}`, {
                          ns: "quiz",
                        })
                      )
                      .join(", ") || " "}
                  </Td>
                  <Td className="m-1">
                    <div className="flex flex-wrap gap-1 py-1">
                      {iconCategories.map((Icon) => {
                        return <div key={Icon}>{Icon && <Icon />}</div>;
                      })}
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
