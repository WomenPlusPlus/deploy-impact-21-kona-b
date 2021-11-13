import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import OrganisationFilters from "./organisationFilters";

export default function OrganisationsTable() {
  const [organisations, setOrganisations] = useState([]);
  const [filteredOrganisations, setFilteredOrganisations] = useState([]);

  useEffect(() => {
    fetch("/api/v0/organisations").then((response) =>
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
            <Tr className="border-b-2 border-kona pb-5 text-left">
              <Th className="pb-5">Name</Th>
              <Th className="pb-5">Region</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredOrganisations.map((organisation) => {
              return (
                <Tr className="border-b border-kona" key={organisation.id}>
                  <Td className="pb-5">
                    <Link to={`/organisations/${organisation.id}`}>
                      {organisation.name}
                    </Link>
                  </Td>
                  <Td className="">{organisation.region}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
