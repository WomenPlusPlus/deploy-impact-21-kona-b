import React, { useState, useEffect } from "react";

import CheckboxFilter from "./checkboxFilter";

export default function OrganisationFilters({
  organisations,
  setFilteredOrganisations,
}) {
  // get all regions from organisations
  const allRegions = [
    ...new Set(organisations.flatMap(({ region }) => region || [])),
  ];
  // selected regions state
  const [selectedRegions, setSelectedRegions] = useState([]);

  // get all SDGs/categories from organisations
  const allSdg = [
    ...new Set(
      organisations.flatMap(({ dots_categories }) => dots_categories || [])
    ),
  ];
  // selected SDGs/categories state
  const [selectedSdgs, setSelectedSdgs] = useState([]);

  useEffect(() => {
    const filteredOrganisations = organisations.filter((organisation) => {
      // filter the regions and make sure they don't appears twice
      const matchesRegion =
        selectedRegions.length === 0 ||
        selectedRegions.some((selectedRegion) =>
          organisation.region.includes(selectedRegion)
        );
      // filter the SDGs/categories and make sure they don't appears twice
      const matchesSdg =
        selectedSdgs.length === 0 ||
        selectedSdgs.some((selectedSdg) =>
          organisation.dots_categories.includes(selectedSdg)
        );
      return matchesRegion && matchesSdg;
    });
    setFilteredOrganisations(filteredOrganisations);
  }, [organisations, setFilteredOrganisations, selectedRegions, selectedSdgs]);

  return (
    <div>
      {allRegions.length > 0 && (
        <CheckboxFilter
          title="regions"
          translationKeyPrefix="region.filters"
          allValues={allRegions}
          setSelected={setSelectedRegions}
        />
      )}
      {allSdg.length > 0 && (
        <CheckboxFilter
          title="support services"
          translationKeyPrefix="dots_categories.filters"
          allValues={allSdg}
          setSelected={setSelectedSdgs}
        />
      )}
    </div>
  );
}
