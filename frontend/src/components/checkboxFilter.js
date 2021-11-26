import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function OrganisationFilters({
  title,
  translationKeyPrefix,
  allValues,
  setSelected,
}) {
  const { t } = useTranslation("quiz");

  // selected values state
  const [selectedValues, setSelectedValues] = useState([]);

  // handle a change of filters
  const handleChange = (event) => {
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
    <div className="py-6 px-5">
      <h3 className="font-extrabold mb-2 uppercase">{title}</h3>
      {allValues.map((value) => (
        <div key={value} className="flex flex-row">
          <input
            id={`filter-${title}-${value}`}
            className="cursor-pointer mr-2 my-1"
            type="checkbox"
            name={value}
            checked={selectedValues.includes(value)}
            onChange={handleChange}
          />
          <label
            className="cursor-pointer select-none"
            htmlFor={`filter-${title}-${value}`}
          >
            {t(`${translationKeyPrefix}.${value}`)}
          </label>
        </div>
      ))}
    </div>
  );
}
