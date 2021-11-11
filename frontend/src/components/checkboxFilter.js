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
    <div className="mb-5 px-5">
      <h3 className="font-extrabold mt-5 uppercase">{title}</h3>
      {allValues.map((value) => (
        <div key={value} className="flex flex-row">
          <input
            id={`filter-${title}-${value}`}
            className="cursor-pointer mr-2 my-1"
            type="checkbox"
            name={value}
            checked={selectedValues.includes(value)}
            onChange={handleRegionsChange}
          />
          <label
            className="cursor-pointer select-none"
            htmlFor={`filter-${title}-${value}`}
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  );
}
