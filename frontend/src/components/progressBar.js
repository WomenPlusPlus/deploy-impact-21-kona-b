import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import "../progressBar.css";

export default function ProgressBar({ step }) {
  const { t } = useTranslation("quiz");
  
  return (
    <div className="container">
      <ul className="progressbar">
        <li className="active">{t("start")}</li>
        <li className={classNames({ 'active': step+1 >= 2 })}></li>
        <li className={classNames({ 'active': step+1 >= 3 })}></li>
        <li className={classNames({ 'active': step+1 >= 4 })}></li>
        <li className={classNames({ 'active': step+1 >= 5 })}></li>
        <li className={classNames({ 'active': step+1 >= 6 })}></li>
        <li >{t("end")}</li>
      </ul>
    </div>
  );
}
