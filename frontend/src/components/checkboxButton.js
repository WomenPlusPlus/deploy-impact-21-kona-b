import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export default function CheckboxButton({
  translationKey,
  setValue,
  active,
  Icon,
}) {
  const { t } = useTranslation("quiz");

  return (
    <div>
      <label className="flex flex-row my-3">
        <Checkbox
          onChange={setValue}
          checked={active}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#8F20B2",
                alignSelf: "stretch",
              }}
            >
              <FiCheck color="white" size={16} />
            </div>
          }
          borderColor="#8F20B2"
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
        />
        <div className="ml-2 mr-1 pt-1">{Icon && <Icon />}</div>
        {t(translationKey)}
      </label>
    </div>
  );
}
