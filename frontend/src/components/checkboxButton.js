import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import classNames from "classnames";

export default function CheckboxButton({
  translationKey,
  setValue,
  active,
  Icon,
}) {
  const { t } = useTranslation("quiz");

  return (
    <div>
      <label
        className={classNames(
          "flex flex-row border border-border-gray-600",
          "items-start my-3 p-2 rounded-lg mx-4",
          { "border-orangeMiddle bg-orangeLight": active }
        )}
      >
        <div className="pt-1">
          <Checkbox
            onChange={setValue}
            checked={active}
            icon={
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  backgroundColor: "#e8a598",
                  alignSelf: "stretch",
                }}
              >
                <FiCheck color="white" size={16} />
              </div>
            }
            borderColor="#e8a598"
            borderRadius={20}
            style={{ overflow: "hidden" }}
            size={20}
          />
        </div>
        {Icon && (
          <div className="ml-2 pt-1">
            <Icon />
          </div>
        )}
        <div className={Icon ? "ml-1 text-sm mt-1" : "text-sm ml-2"}>
          {t(translationKey)}
        </div>
      </label>
    </div>
  );
}
