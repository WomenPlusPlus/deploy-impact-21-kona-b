import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export default function CheckboxButton({ translationKey, setValue, value }) {
  const { t } = useTranslation("quiz");

  // if the button is active then active is set to true
  const [active, setActive] = useState(value === translationKey);

  // the hook changes the value of the active variable when the value (setValue) changes
  useEffect(() => {
    setActive(value === translationKey);
  }, [value, translationKey]);

  return (
    <div>
      <label onClick={() => setValue()}>
        <Checkbox
          checked={false}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#8F20B2",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="white" size={20} />
            </div>
          }
          borderColor="#8F20B2"
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
          label={t(translationKey)}
        />
      </label>
    </div>
  );
}
