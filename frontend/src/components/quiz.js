import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import useSWR from "swr";

import QuizButton from "./quizButton";
import CheckboxButton from "./checkboxButton";
import Button from "./button";
import iconMap from "../lib/iconMap";
import { api } from "../config";

export default function Quiz() {
  const { t } = useTranslation("quiz");

  // API quiz request
  const { data: quiz } = useSWR(`${api}/quiz`);

  // answer saves the answer picked by the user
  const [answer, setAnswer] = useState();
  const [allAnswer, setAllAnswer] = useState({});

  const numberQuestions = quiz.length;
  const [step, setStep] = useState(0);

  const resetOrRestoreAnswer = (step) => {
    setAnswer(allAnswer[quiz[step]?.scope.filter]);
  };

  // when user can have more than one answer, makes an array with multiple answers
  // which will be deleted when they untick the answer
  // when user can only have one answer, save the value and go to the next question
  const handleClickAnswer = (type, value) => {
    if (type === "multi_select") {
      if (Array.isArray(answer) && answer.includes(value)) {
        setAnswer(answer.filter((item) => item !== value));
      } else if (Array.isArray(answer)) {
        setAnswer([...answer, value]);
      } else {
        setAnswer([value]);
      }
    } else {
      handleClickNext(value)
    }
  };

  // on click update the array of all answers (will be send to backend)
  // and increment step by 1 to get the next question
  const handleClickNext = (value = answer) => {
    const newStep = step + 1;
    setAllAnswer({
      ...allAnswer,
      [quiz[step].scope.filter]: value,
    });
    resetOrRestoreAnswer(newStep);
    setStep(newStep);
  };

  const handleClickBack = () => {
    const newStep = step - 1;
    resetOrRestoreAnswer(newStep);
    setStep(newStep);
  };

  console.log("all value", allAnswer);

  return (
    <div>
      {step === 0 && <p className="my-6 text-sm">{t("presentation")}</p>}
      {quiz && step < numberQuestions ? (
        <div>
          <h2 className="my-6 text-lg font-semibold uppercase">
            {t(`${quiz[step].scope.translation_key}.question`)}
          </h2>
          <div>
            {/* when the type is checkbox, it display the Checkbox component */}
            {quiz[step].type === "multi_select" ? (
              <div>
                {quiz[step].answers.map((filterKey) => {
                  return (
                    <div key={filterKey.value}>
                      <CheckboxButton
                        translationKey={`${quiz[step].scope.translation_key}.filters.${filterKey.translation_key}`}
                        setValue={() =>
                          handleClickAnswer(quiz[step].type, filterKey.value)
                        }
                        active={(answer || []).includes(filterKey.value)}
                        Icon={iconMap[filterKey.translation_key]}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              // else it display the Quizbutton component
              <div className="grid grid-cols-2 gap-4">
                {quiz[step].answers.map((filterKey) => {
                  return (
                    <QuizButton
                      key={filterKey.value}
                      translationKey={`${quiz[step].scope.filter}.filters.${filterKey.translation_key}`}
                      setValue={() =>
                        handleClickAnswer(quiz[step].type, filterKey.value)
                      }
                      value={answer}
                      active={answer === filterKey.value}
                      Icon={iconMap[filterKey.translation_key]}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2">
            {step > 0 && (
              <div>
                <Button
                  text={t("backButton")}
                  onClick={() => handleClickBack()}
                />
              </div>
            )}
            {/* is question type is checkbox, display next/submit button */}
            {quiz[step].type === "multi_select" && (
              <div className="flex justify-end">
                <Button
                  text={
                    step >= numberQuestions - 1
                      ? t("submitButtonLast")
                      : t("submitButton")
                  }
                  onClick={() => handleClickNext()}
                  primary={true}
                />
              </div>
            )}
            {(quiz[step].scope.filter === "gender" ||
              quiz[step].scope.filter === "age") && (
              <div className="flex justify-end">
                <Button
                  text={t("skipButton")}
                  onClick={() => handleClickNext()}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
}
