import React, { useState, useEffect } from "react";

export default function OrganisationFilters({ title, allValues, setSelected }) {
  const [selectedValues, setSelectedValues] = useState([]);
  const handleRegionsChange = (event) => {
    if (selectedValues.includes(event.target.name)) {
      // if value is already selected, remove it
      setSelectedValues(
        selectedValues.filter((value) => value !== event.target.name)
      );
    } else {
      // if value not selected, add it
      setSelectedValues([...selectedValues, event.target.name]);
    }
  };

  useEffect(() => {
    // pass selected to parent
    setSelected(selectedValues);
  }, [setSelected, selectedValues]);

  return (
    <div>
      <h3>{title}</h3>
      {allValues.map((value) => (
        <label key={value}>
          <input
            type="checkbox"
            name={value}
            checked={selectedValues.includes(value)}
            onChange={handleRegionsChange}
          />
          {value}
        </label>
      ))}
    </div>
  );
}
