import React, { useState } from "react";
import DocumentTitle from "react-document-title";
import { useTranslation } from "react-i18next";

import QuizButton from "../components/quizButton";
import CheckboxButton from "../components/checkboxButton";
import Button from "../components/button";
import iconMap from "../lib/iconMap";
import quiz from "../lib/quiz";

export default function QuizPage() {
  const { t } = useTranslation("quiz");

  // answer saves the answer picked by the user
  const [answer, setAnswer] = useState();
  const [allAnswer, setAllAnswer] = useState({});

  const [step, setStep] = useState(0);
  const numberQuestions = 5;

  // when user can have more than one answer, makes an array with multiple answers
  // which will be deleted when they untick the answer
  // when user can only have one answer, save the value and go to the next question
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
      setAllAnswer({
        ...allAnswer,
        [quiz[step].scope.filter]: value,
      });
      if (step < numberQuestions) {
        setStep(step + 1);
      }
    }
  };

  // on click update the array of all answers (will be send to backend)
  // and increment step by 1 to get the next question
  const handleClickNext = () => {
    setAllAnswer({
      ...allAnswer,
      [quiz[step].scope.filter]: answer,
    });
    if (step < numberQuestions) {
      setStep(step + 1);
    }
  };

  const handleClickSkip = () => {
    setAllAnswer({
      ...allAnswer,
      [quiz[step].scope.filter]: "",
    });
    setStep(step + 1);
  };
  const handleClickBack = () => {
    setStep(step - 1);
  };

  console.log("all value", allAnswer);
  console.log("step", step);

  return (
    <DocumentTitle title="Quiz">
      <main className="mx-7px">
        <div className="grid grid-cols-7 sm:grid-cols-7 max-w-xl lg:max-w-4xl mx-auto w-mobile mb-8 sm:mb-20">
          {step < numberQuestions ? (
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
                          <CheckboxButton
                            translationKey={`${quiz[step].scope.filter}.filters.${filterKey.text}`}
                            setValue={() =>
                              handleClickAnswer(
                                quiz[step].type,
                                filterKey.value
                              )
                            }
                            active={(answer || []).includes(filterKey.value)}
                            Icon={iconMap[filterKey.text]}
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
                          translationKey={`${quiz[step].scope.filter}.filters.${filterKey.text}`}
                          setValue={() =>
                            handleClickAnswer(quiz[step].type, filterKey.value)
                          }
                          value={answer}
                          active={answer === filterKey.value}
                          Icon={iconMap[filterKey.text]}
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
                {quiz[step].type === "checkbox" && (
                  <div className="flex justify-end">
                    <Button
                      text={
                        step >= numberQuestions - 1
                          ? t("submitButtonLast")
                          : t("submitButton")
                      }
                      step={step}
                      onClick={() => handleClickNext(answer)}
                      numberQuestions={numberQuestions}
                    />
                  </div>
                )}
                {(quiz[step].scope.filter === "gender" ||
                  quiz[step].scope.filter === "age") && (
                  <div className="flex justify-end">
                    <Button
                      text={t("skipButton")}
                      onClick={() => handleClickSkip()}
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>Hello</div>
          )}
        </div>
      </main>
    </DocumentTitle>
  );
}
