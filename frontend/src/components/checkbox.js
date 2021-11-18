import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Checkbox({ translationKey, setValue, value }) {
  const { t } = useTranslation("quiz");

  // if the button is active then active is set to true
  const [active, setActive] = useState(value === translationKey);

  // the hook changes the value of the active variable when the value (setValue) changes
  useEffect(() => {
    setActive(value === translationKey);
  }, [value, translationKey]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={translationKey}
          onClick={() => setValue()}
        />
        {t(translationKey)}
      </label>
    </div>
  );
}
