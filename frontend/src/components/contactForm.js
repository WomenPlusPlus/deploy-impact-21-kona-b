import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Error from "../components/error";

export default function ContactForm() {
  const { t } = useTranslation("organisationForm");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const [complete, setcomplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    setErrorMessage("");
    setcomplete(true);
  };

  return (
    <div>
      {complete ? (
        <div>{t("submitMessage")}</div>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                {t("nameOrganisation")}
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && <Error message={"This field is required"} />}
            </div>
            <div>
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                {t("contactPerson")}
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="contactPerson"
                type="text"
                {...register("contactPerson", { required: true })}
              />
              {errors.contactPerson && (
                <Error message={"This field is required"} />
              )}
            </div>
            <div>
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                {t("phoneNumber")}
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="phoneNumber"
                type="number"
                {...register("phoneNumber")}
              />
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                {t("email")}
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <Error message={"This field is required"} />}

              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                {t("website")}
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="website"
                type="text"
                {...register("website")}
              ></input>
            </div>
            {errorMessage && <Error message={errorMessage} />}
            <button
              className="border border-konaInspired px-4 py-2 rounded uppercase"
              type="submit"
            >
              {t("submit")}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
