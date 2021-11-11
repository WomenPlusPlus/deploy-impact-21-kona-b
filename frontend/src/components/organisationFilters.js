import React, { useState, useEffect } from "react";

import CheckboxFilter from "./checkboxFilter";

// SDG will be replaced by categories

export default function OrganisationFilters({
  organisations,
  setFilteredOrganisations,
}) {
  const allRegions = [
    ...new Set(organisations.map(({ region }) => region || [])),
  ];
  const [selectedRegions, setSelectedRegions] = useState([]);

  const allSdg = [...new Set(organisations.flatMap(({ sdg }) => sdg || []))];
  const [selectedSdgs, setSelectedSdgs] = useState([]);

  useEffect(() => {
    const filteredOrganisations = organisations.filter(
      ({ region, sdg }) =>
        (selectedRegions.length === 0 || selectedRegions.includes(region)) &&
        (selectedSdgs.length === 0 ||
          selectedSdgs.some((selectedSdg) => sdg.includes(selectedSdg)))
    );
    setFilteredOrganisations(filteredOrganisations);
  }, [organisations, setFilteredOrganisations, selectedRegions, selectedSdgs]);

  return (
    <div>
      {allRegions.length > 0 && (
        <CheckboxFilter
          title="Regions"
          allValues={allRegions}
          setSelected={setSelectedRegions}
        />
      )}
      {allSdg.length > 0 && (
        <CheckboxFilter
          title="sdg"
          allValues={allSdg}
          setSelected={setSelectedSdgs}
        />
      )}
    </div>
  );
}
