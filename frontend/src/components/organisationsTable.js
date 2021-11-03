import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import OrganisationFilters from "./organisationFilters";
// import organisations from json file for now and replace by server request later
import organisations from "../data/organisationsList.json";

export default function OrganisationsTable() {
  const [filteredOrganisations, setFilteredOrganisations] =
    useState(organisations);

  return (
    <>
      <OrganisationFilters
        organisations={organisations}
        setFilteredOrganisations={setFilteredOrganisations}
      />
      <Table>
        <Thead>
          <Tr className="border-b-2 border-kona pb-5 text-left">
            <Th className="pb-5">Name</Th>
            <Th className="pb-5">SDG</Th>
            <Th className="pb-5">Region</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredOrganisations.map((organisation) => {
            return (
              <Tr className="border-b border-kona" key={organisation.id}>
                <Td className="pb-5">{organisation.name}</Td>
                <Td className="pb-5">
                  {organisation.SDG.map((item) => {
                    return (
                      <ul key={item}>
                        <li>{item}</li>
                      </ul>
                    );
                  })}
                </Td>
                <Td className="">{organisation.region}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
