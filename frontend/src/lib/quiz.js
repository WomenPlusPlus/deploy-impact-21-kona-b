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
      { id: 1, text: "male", iconGroup: "md", icon: "MdMale", value: "male" },
      {
        id: 2,
        text: "female",
        iconGroup: "md",
        icon: "MdFemale",
        value: "female",
      },
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
      {
        id: 1,
        text: "housingAndSocialServices",
        value: "socialProtectionOne",
      },
      { id: 2, text: "economicResources", value: "socialProtectionTwo" },
      {
        id: 3,
        text: "financialServices",
        value: "socialProtectionThree",
      },
      {
        id: 4,
        text: "protectionClimatEvents",
        value: "socialProtectionFour",
      },
      { id: 5, text: "alleviatePoverty", value: "socialProtectionFive" },
    ],
    type: "checkbox",
  },
];

export default quiz;
