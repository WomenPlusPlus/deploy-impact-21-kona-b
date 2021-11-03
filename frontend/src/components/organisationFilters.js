import React, { useState, useEffect } from "react";

import CheckboxFilter from "./checkboxFilter";

export default function OrganisationFilters({
  organisations,
  setFilteredOrganisations,
}) {
  const allRegions = new Set(organisations.map(({ region }) => region));
  const [selectedRegions, setSelectedRegions] = useState([]);

  useEffect(() => {
    const filteredOrganisations = organisations.filter(
      ({ region }) =>
        selectedRegions.length === 0 || selectedRegions.includes(region)
    );
    setFilteredOrganisations(filteredOrganisations);
  }, [organisations, setFilteredOrganisations, selectedRegions]);

  return (
    <div>
      <CheckboxFilter
        title="Regions"
        allValues={allRegions}
        setSelected={setSelectedRegions}
      />
    </div>
  );
}
