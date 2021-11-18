import React, { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import QuizButton from "../components/quizButton";
import Checkbox from "../components/checkbox";
import SubmitButton from "../components/submitButton";

export default function QuizPage() {
  const { t } = useTranslation("quiz");

  // answer saves the answer picked by the user
  const [answer, setAnswer] = useState();
  const [allAnswer, setAllAnswer] = useState([]);

  const [step, setStep] = useState(0);

  // hardcoded value to mockup the data we will receive from the backend
  // TO REPLACE BY API REQUEST
  const quiz = [
    {
      scope: { id: 1, filter: "user" },
      answers: [
        { id: 1, text: "you", value: "you" },
        { id: 2, text: "else", value: "else" },
      ],
      type: "radio",
    },
    {
      scope: { id: 2, filter: "age" },
      answers: [
        { id: 1, text: "baby", value: "baby" },
        { id: 2, text: "child", value: "child" },
        { id: 3, text: "youth", value: "youth" },
        { id: 4, text: "adult", value: "adult" },
        { id: 5, text: "skip", value: "" },
      ],
      type: "radio",
    },
    {
      scope: { id: 3, filter: "gender" },
      answers: [
        { id: 1, text: "male", value: "male" },
        { id: 2, text: "female", value: "female" },
        { id: 3, text: "other", value: "other" },
        { id: 4, text: "skip", value: "" },
      ],
      type: "radio",
    },
    {
      scope: { id: 4, filter: "region" },
      answers: [
        { id: 1, text: "dakar", value: "dakar" },
        { id: 2, text: "diourbel", value: "diourbel" },
        { id: 3, text: "kaolack", value: "kaolack" },
        { id: 4, text: "saintlouis", value: "saintlouis" },
        { id: 5, text: "thies", value: "thies" },
        { id: 6, text: "all", value: "all" },
      ],
      type: "checkbox",
    },
    {
      scope: { id: 5, filter: "dots_categories" },
      answers: [
        {
          id: 1,
          text: "socialProtection",
          value: "1",
        },
        {
          id: 2,
          text: "food",
          value: "2",
        },
        {
          id: 3,
          text: "productivityAndIncome",
          value: "3",
        },
        {
          id: 4,
          text: "wellBeing",
          value: "4",
        },
        {
          id: 5,
          text: "education",
          value: "5",
        },
      ],
      type: "checkbox",
    },
    {
      scope: { id: 6, filter: "dots_subCategories" },
      answers: [
        { id: 1, text: "housingAndSocialServices", value: "socialProtectionOne" },
        { id: 2, text: "economicResources", value: "socialProtectionTwo" },
        {
          id: 3,
          text: "financialServices",
          value: "socialProtectionThree",
        },
        { id: 4, text: "protectionClimatEvents", value: "socialProtectionFour" },
        { id: 5, text: "alleviatePoverty", value: "socialProtectionFive" },
      ],
      type: "checkbox",
    },
  ];

  // when user can have more than one answer, makes an array with multiple answers
  // which will be deleted when they untick the answer
  const handleClickAnswer = (type, value) => {
    if (type === "checkbox") {
      if (Array.isArray(answer) && answer.includes(value)) {
        setAnswer(answer.filter((item) => item !== value));
      } else if (Array.isArray(answer)) {
        setAnswer([...answer, value]);
      } else {
        setAnswer([value]);
      }
    } else {
      setAnswer(value);
    }
  };

  // on click update the array of all answers (will be send to backend)
  // and increment step by 1 to get the next question
  const handleClick = () => {
    setAllAnswer([...allAnswer, [quiz[step].scope, answer]]);
    if (step <= 4) {
      setStep(step + 1);
    }
  };

  // for now use effect to check all answer state which will be sent to backend.
  useEffect(() => {
    console.log("all value", allAnswer);
    console.log("step", step);
  }, [allAnswer, step]);

  return (
    <DocumentTitle title="Quiz">
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          <div className="col-start-1 sm:col-start-2 sm:col-span-5 col-span-7 mx-4 sm:mx-0">
            {step < 1 && <p className="my-6 text-sm">{t("presentation")}</p>}
            <h2 className="my-6 text-lg font-semibold uppercase">
              {t(`${quiz[step].scope.filter}.question`)}
            </h2>
            <div>
              {/* when the type is checkbox, it display the Checkbox component */}
              {quiz[step].type === "checkbox" ? (
                <div>
                  {quiz[step].answers.map((filterKey) => {
                    return (
                      <div key={filterKey.value}>
                        <Checkbox
                          translationKey={`${quiz[step].scope.filter}.filters.${filterKey.text}`}
                          setValue={() =>
                            handleClickAnswer(quiz[step].type, filterKey.value)
                          }
                          active={answer === filterKey.value}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                // else it display the Quizbutton element
                <div className="grid grid-cols-2 gap-4">
                  {quiz[step].answers.map((filterKey) => {
                    return (
                      <QuizButton
                        key={filterKey.value}
                        translationKey={`${quiz[step].scope.filter}.filters.${filterKey.text}`}
                        setValue={() =>
                          handleClickAnswer(quiz[step].type, filterKey.value)
                        }
                        value={answer}
                        active={answer === filterKey.value}
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <SubmitButton
                text={t("submitButton")}
                textLast={t("submitButtonLast")}
                step={step}
                onClick={() => handleClick(answer)}
              />
            </div>
          </div>
        </div>
      </main>
    </DocumentTitle>
  );
}
