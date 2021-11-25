import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Error from "../components/error";

export default function ContactForm() {
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
    console.log(data);
  };

  return (
    <div>
      {complete ? (
        <div>
          Thanks for submitting your form. We will get back to you shortly!
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                Name of the organisation
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
                Contact person (full name)
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
                Telephone number
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="phoneNumber"
                type="number"
                {...register("phoneNumber")}
              />
              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                Email
              </label>
              <input
                className="appearance-none focus:outline-none focus:shadow-outline border border-gray-300 leading-tight px-3 py-2 rounded text-gray-700 w-full mb-6"
                name="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <Error message={"This field is required"} />}

              <label className="block font-bold mb-2 tracking-wide text-sm uppercase">
                Website
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
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
