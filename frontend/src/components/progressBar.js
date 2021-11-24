import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import "././../../src/progressBar.css";

export default function ProgressBar({ step }) {
  const { t } = useTranslation("quiz");
  
  return (
    <div class="container">
      <ul class="progressbar">
        <li class="active">{t("start")}</li>
        <li class={classNames({ 'active': step+1 >= 2 })}></li>
        <li class={classNames({ 'active': step+1 >= 3 })}></li>
        <li class={classNames({ 'active': step+1 >= 4 })}></li>
        <li class={classNames({ 'active': step+1 >= 5 })}></li>
        <li class={classNames({ 'active': step+1 >= 6 })}></li>
        <li >{t("end")}</li>
      </ul>
    </div>
  );
}
