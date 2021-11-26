<p align="center">
  <a href="" rel="noopener">
 <img src="https://kona-connect.org/wp-content/uploads/2021/03/cropped-connect_logo_positive-e1614970117884-300x97.png" alt="Project logo"></a>
</p>
<h3 align="center">Dots: the alternative legal aid tech</h3>

<div align="center">

  [![Program](https://img.shields.io/badge/Program-Deploy(impact)-blueviolet.svg)](https://www.womenplusplus.ch/deploy-impact) 
  [![Status](https://img.shields.io/badge/Status-Developing-blueviolet.svg)](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/projects/5) 

</div>

---

<p align="center"> Kona Connect’s legal team, together with students and expert volunteers from around the world, are developing a tool to connect people in need to the organizations best equipped to help them. This tool which is accessible 24/7 through any device, will automatically guide its users to the help they need, whilst simultaneously reducing aid agencies’ staggering workloads, freeing up time to help more individuals.
    <br> 
</p>

## 📝 Table of Contents
- [Problem Statement](#problem_statement)
- [Mission](#mission)
- [Solution](#idea)
- [The web app](#web_app)
- [For developers](#for_developers)
  - [Prerequisites ](#prerequisites)
  - [Installation](#install)
    - [Frontend](#frontend)
    - [Backend](#backend)
- [Repository structure](#structure)
- [The database](#database)
  - [Maintenance](#maintenance)
  - [Access](#access)
- [App translation](#translation)
- [UX/UI](#ux)
- [Troubleshooting](#troubleshooting)
- [Future Work](#future-work)
- [License](#license)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## ‼️ Problem Statement <a name = "problem_statement"></a>
The 17 Sustainable Development Goals (SDGs) are the world’s shared plan that includes ending extreme poverty, reducing inequalities, and protecting the planet. Achieving the Goals by 2030 will require a lot of effort, determination to learn about what works, and agility to adapt to new information and changing trends. Initiatives that generate impact and advance the SDG commitment to “leave no one behind,” should be backed by evidence, practical commitments, and action - something that doesn't happen right now.

Access to tailored and trustworthy information is essential for individuals in precarious (and often life-threatening) situations. However, it is easy to get lost in a bureaucratic maze amongst the numerous support institutions that exist. Databases containing information of aid organisations already exist, but the information tends to be incomplete and fails to describe the services provided. 

The urgency to solve this problem is reflected by the increase of people living in precarious situations. A main factor of this increase is statelessness. A stateless person is someone who is "not considered as a national by any state under the operation of its law" [1](https://en.wikipedia.org/wiki/Statelessness). UNHCR estimates that statelesness affects millions of people worldwide, and at least 700.000 are in West and Central Africa [2](https://data2.unhcr.org/en/situations/statelesswa). Being stateless is just one of the many reasons that lead people to be in vulnerable situations, rendering it of high importance the provision of a tool that eases peoples' search for help.


## :boom: Mission <a name = "mission"></a>
Our mission is to:
* Develop a trustworthy and unified NGO database.
* Empower people to know their human rights.
* Facilitate access to NGO information to fulfill user's needs using intelligent technologies, i.e. Dots.

## 💡 Solution <a name = "idea"></a>
Facilitating the search for assistance and support can be done by empowering people to know what their human rights are, where to look for reliable help, what to expect from aid services, and how to contact the right organisations.

6 weeks ago we did [brainstorming sessions](https://www.figma.com/file/EOSp95m8WUGfHw4U4xhtg0/Brainstorming-the-solution-for-Dots.?node-id=0%3A1) to define how we were going to solve the stated Dots problem, and how we could use the information to satisfy our stakeholders' needs.  The solution was provided by Kona Connect by means of the platform "Dots.", a web app used by people in vulnerable situations to search for help. To do this, Kona Connect's team has identified and classified the social organizations. In order to provide accurate information for the users, we have improved the database by including a classification of the NGOs based on their target user, location and contact information (coordinates, address, email, phone number, opening hours, web site, social media, etc.)

The classification of the NGOs target users is based on the [17 United Nations Sustainable Development Goals (SDG)](https://sdgs.un.org/fr/goals). The SDGs are a collection of goals carefully designed by the UN to create a better planet for a better future, [goals guide for business](https://b1g1.com/sustainable-development-goals-guide?gclid=CjwKCAiAqIKNBhAIEiwAu_ZLDsXijDYGL9yRmIzROPgwNhQEEz275xRPwZiRCWbydcQcP6JN16Sc4hoCZ8AQAvD_BwE)[3](https://b1g1.com/sustainable-development-goals-guide?gclid=CjwKCAiAqIKNBhAIEiwAu_ZLDsXijDYGL9yRmIzROPgwNhQEEz275xRPwZiRCWbydcQcP6JN16Sc4hoCZ8AQAvD_BwE). By means of these goals we not only achieve a meaninful classification of the organisations, but also we are able to trace the impact created by Dots.

The main goal of the tool is to connect people in need to the right organizations as quickly as easily as possible. For this, our solutions provides two main options:
- A quick quiz: By answering a few questions, users will be guided to the organization(s) most likely to be able to help them and their situation.
- The list of all organisations with filters: By selecting the filters that apply to their situation, the user will reach the NGOs that provide the required help.

To measure the impact of our app we have to define, evaluate and quantify impact ([brainstorming and inspiration ideas](https://docs.google.com/document/d/1zR11WpejlC97wz9rCjy_EjCHnbwEGTYGX1FY-AIb9h8/edit?usp=sharing)). The Credit Suisse Impact Management Project Framework was selected to define and evaluate the likely impact of Dots across five dimensions. We will explain how each classification contributes to the definition of Dots impact. The defined impact has been aligned to the 2030 SDG targets. 
    
In the first stage, our solution is focused on providing help for the people located in Senegal. Therefore, the web app is available in English and French, and has a framework which allows easy translation to any regional language. Moreover, thanks to the design of our UX/UI experts, most interface options are coupled with an icon to make the app more accessible and intuitive.

## :iphone: The web app <a name = "web_app"></a>

Dots web app can be used from any device (laptop, phone, tablet). Since it's a Progressive Web App (PWA), updates are done automatically, therefore we guarantee the user is accessing the latest available version. The decision of choosing this technology was supported by the advantages that it has compared to a native app:

* __It can be used offline:__ PWAs can be cached by the web browser and used even when offline.
* __Better performance:__ The performance of PWAs is much better than traditional web apps.
* __No installation or updates required:__ All new features and bug fixes are available without any manual action required.
* __Low on data:__ PWAs are smaller than mobile apps, and they also require less bandwidth than traditional web apps [4](https://brainhub.eu/library/progressive-web-apps-advantages-disadvantages/).

You can now use it here:
https://dots.azureedge.net/

### Pages
The app has the following pages:
- __Home:__ This is the app home page. From here the user has the option to use the search assistant or to view the list of organizations.
- __Search assistant (quiz):__ This page guides the user to find the right NGO by means of a set of questions.
- __List of organizations:__ This page presents the complete list of NGOs and allows the user to define the filters.
- __I am an NGO:__ This is the NGO-portal where NGOs can submit their information so that Konaconnect can include it in their database.
- __About Us:__ This page presents the authors of the Dots. app.
- __Privacy policy:__ This page contains the app's privacy policy.

## For developers <a name = "for_developers"></a>
If you are a developer you need to know this.

### ⚠️ Prerequisites <a name = "prerequisites"></a>
__Frontent:__
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Developer Server Environment
- [Tailwindcss](https://tailwindcss.com/) - CSS Framework

__Backend:__
- [Python 3.8](https://www.python.org/downloads/)

### :computer: Installation <a name = "install"></a>
####  Frontend (Client) <a name = "frontend"></a>
- Progressive web app
- Runs in all major browsers
- Has a mobile-first responsive design
- Provides access to information in the backend based on the United Nations Sustainable Development Goal selected

Find the instructions on how to run it [here](/frontend).

####  Backend (Server) <a name = "backend"></a>
- Developped using Python 3.8
- Processes database using pandas and SQL

Find the instructions on how to run it [here](/backend).

## :house: Repository structure <a name = "structure"></a>

- __backend:__ In this directory you will find all the files related to the backend.
 
- __frontend:__ In this directory you will find all the files related to the frontend.

- __UX/UI_docs.md:__ UX/UI documentation.

- __LICENSE:__ File containing the license information.

## :bar_chart: The database <a name = "database"></a>
Databases containing information of aid organisations already exist, but the information tends to be incomplete and doesn't describe the services provided.  For this reason we decided to create our own and to be able to ask the user about it.

The database information can be found in [/backend/csv/data](/backend/csv/data/organisations_in_senegal_konab.csv). This file contains all the NGO information in a human readable format. For each NGO the information collected is: NGO name, objective,	services,	can the NGO be contacted by individuals,	phone_number,	email,	website,	address,	region,	latitude,	longitude,	opening hours,	hotline,	facebook,	linkedin,	twitter,	youtube,	instagram,	tiktok,	flicker,	sound_cloud, and	other in case they have another social media account.

The organisations services are categorised in the database according to the SDG and targets that they contribute to. This allows us not only to provide a meaninful grouping of NGOs, but also to trace the impact of the app. In order to be more accurate when recommending NGOs to the user, an age and gender classification was added. This allows the app to recommend specific NGOs directly to the group of people they are able to help.  

To make the database more machine readable, it was processed and divided into the following datasets:

* [age and gender](/backend/csv/filters/gender_and_age_filters.csv): In this dataset the organisations are categorized in a machine readable format according to the age and gender of the people to whom they offer their help. In the following table you can find the categories assigned to the NGOs. This classification will help Dots to answer "who is going to benefit from the service impact".

    | Categories  | Options |
    | ------------- | ------------- |
    | gender  | male, female, other  |
    | age | baby, child, youth, adult  |
    
  
* [region](/backend/csv/filters/region_filters.csv): To provide as much information as possible to the user, the database also contains the specific region where each NGO is located. Find below the available options:

  | Categories  | Options |
  | ------------- | ------------- |
  | location  | dakar,	saint_louis, louga,	thies,	diourbel,	mattam,	fatick,	kaolack,	kaffrine,	tamabacounda,	kedougou,	kolda,	sedhiou,	ziguinohor|
This classification will help Dots to answer "what is the region where the impact is created".

* [SDG subcategory](/backend/csv/filters/dots_subcategories_filters.csv): One of the strengths of our database is that each NGO is linked to the Sustainable Development Goals (SDG) subcategories. This allow us to filter the database according to the user specific needs, allowing them to find the help they need in a shorter time and more effectively.  This classification was developed taking into consideration that it is not always clear what are the services provided by the NGOs.
  | Categories  | Options |
  | ------------- | ------------- |
  | sdg  | 1-40|
This classification will help Dots to answer "what are the services whoses impact is going to be monitored by Dots".

### Maintenance <a name = "maintenance"></a>
This app is just as powerful as the information it contains, thefore it is very important to increase and enrich the database. For now, to add a NGO to the database one would need to add the information manually to the corresponding .csv files. The goal is that in the future the information will be stored in a SQL database and the addition of new NGOs will be semi-automated through the NGO-application page. Read more about future develompments in the section _Future Work_.

### Access <a name = "access"></a>
Using the APIs that provide information to the front end and the migration to SQL: 

The SQL database creation was developed in parallel to the creation of the CSV classification tables and API connections between CSV file and front end.   We decided to do this because we used an shared Excel document to create classification tables, standardise the NGOs information provided, and create questions and answers of the quiz.

We wanted to avoid using CSV files in the future, therefore the CSV files are migrated into database.  As a further step we would like to connect the front end directly to the database, and just have the CSV for an initial run.  

We have written down all the [API end points](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/tree/main/backend#rest-apis)  that can access this database such as getting organisation information and quiz information.  The list of APIs includes the explanation of usage.

In the future, we suggest having an admin portal to access the SQL database.  In the admin portal an authentication system should be included to validate who is the user managing the database information.  A tool that generates access tokens for API authorization scenarios that limit the access to the database is [OAuth](https://auth0.com/docs/get-started).  


This same logic could be applied to the organisation information in our database by providing editing access to each NGO. The organisations can submit their data through the "organisation application form" and the data will be sent to the database portal at the same time as it will send an alert to the Dots team by Email or other notification system.  The Dots team should have the capacity to accept or discard the submitted organisation information.  In case the information is not approved, Dots should be able to answer the notification mail to the NGO and get back to the organisation.  The organisation should be provided with an access to edit or delete its information.


## :books: App translation <a name = "translation"></a>
Currently the app is available in English and French, but it has been specially developped so that it can be easily translated to any language. The tranlation files are handled by the front-end and can be found in [/frontend/public/locales/](/frontend/public/locales/). To add your translation you should follow these steps:
### Requirements
The library used to translate the app is **react-i18next**, if it is not installed in your environment you can [download it from here](https://react.i18next.com/).


### Create your translation

1. Create a new folder named with the abbreviation of the language, i.e. fr for French.
2. Go to [/frontend/public/locales/fr](/frontend/public/locales/fr), copy all the files, and paste them in the directory you just created. The files that you have just copy-pasted correspond to the .json files having the french translation for each page in the website. Keep in mind that each language will have a dedicated translation file (.json) for each page. The page that correspond to each translation file is indicated in the filename, i.e. aboutUs.json contains the translation keys for the page "About Us". In case that you want to change the name of the given translation files, you should also change the call to these files in each page.
4. Add the translation on the right side of the colon (:) between comas (" "), i.e. "female": "Female" --> "female":"Femme". This translation key will be used when the new language is selected.

### Translating a new page
Whenever you create a new page, you will need to create a new translation file and add adequate the page so that it can be translated. Follow this steps to know how to translate your new page:

1. Add the new supported language: Go to [/frontend/src/i18n.js ](/frontend/src/i18n.js ), this is the i18next configuration file. Add language abbreviation (the name of the directory you have created in step *1* of the section _Create your translation_) in the i18.js file:

```
23     supportedLngs: ["en", "fr", "new_abbreviation"],
```

2. Go to the page where you want to add the translation.
3. Import the i18next library:
```
import { useTranslation } from "react-i18next")
```
4. Import the translation keys corresponding to the page to translate:
```
const { t } = useTranslation("the page you want to translate")
```

5. Add the translation key for the string to translate:
```
{t("translation key")}
```

For any question, you can refer to [this file](/frontend/src/pages/AboutUsPage.js) and use it as an example.

## :art: UX/UI <a name = "ux"></a>
To know and emphathise with the user was one of our main priorities when developing the app. Therefore, our UX/UI team has made a wonderful job searching information to understand the user needs, frustrations and painpoints. This information combined with the feedback obtained from an interview with a potential user helped us to design the different aspects of the app such as colors, icons and wording. To find more information about the design process and user research check the [UX/UI_docs](/UXUI_docs.md)


## :postal_horn: Troubleshooting <a name = "troubleshooting"></a>
If you find any error or weird behaviour when using Dots, please open an issue and we will try to address it ass soon as possible.

## :robot: Future Work <a name = "future-work"></a>
The app provided here is only the minimum viable product of the Dots. app and several improvements are planned to come:

- __Adding more NGOs:__ Adding more NGOs to the dataset to create a unified resource that people in need can quickly access and navigate.
- __Collect user data:__ Collecting data about how the user intracts with the app would allow us to get a better understanding of the accessibility and common usages of the app. Additionally, this data would allow us to create recommendation systems to new users based on searchers that previously other users did.
Collect data from "feedback box".  "Feedback box" asking the user "was the NGO-information provided useful? Tell us more about it".  The user should be able to leave a written or spoken message about the NGO information provided.  This information could be used to improve NGO services, and to keep a reliable list of organisations.
- __Collect user feedback:__ The goal is that users would rank the information provided in Dots. and add their comments. This would allow Konaconnect to improve the app and update the NGOs information.
- __Add info pop-ups:__ The information pop-ups would be a way of interactively educating the user about their rights and the UN Sustainable Development Goals.
- __NGOs portal + admin login:__ This feature allows the NGOs to apply directly to appear in Dots. On the other hand, an admin login is required so that the Dots. administrator can access the information submitted through the NGOs portal and approve it or regect it.
- __Dots impact reporting:__ The amount of resources available to create real impact, to monitor advances and to identify underserved human rights has been increasing and is set to grow in the upcoming years.  This is assumed because of the increasing pressures on mapping the trazability of contributions towards the Sustainable Development Goals and targets, and because of the improved Machile Learning and other technologies. 
We suggest createing integrated and automated, on demand reports using the data obtained from the user interaction with the "ngo services" (aligned to SDG targets for 2030). Humanitarian effort reports should be reliable, a result of robust data acquisition and selection.  Gathering information for this type of reports has been taken into consideration by identifying how to obtain the information required to comply with "Credit Suisse's Framework to define and evaluate impact".  Considerations of data coleection following Credit Suisse Framework are mentioned in [The database](#database).   [Brainstorming document here](https://docs.google.com/document/d/1zR11WpejlC97wz9rCjy_EjCHnbwEGTYGX1FY-AIb9h8/edit?usp=sharing).
The information aligned to the SDG targets and Credit Suisse Framework can be used to help define Dots performance and objectives aligned to the SDGs.
- __News feed:__ One potential user group of Dots. is people who are looking for education and/or a job. This feature would act like a news feed where the latest information and opportunities would show, allowing the user to be alwasy updated about what the NGOs can offer for them.
- __NGO location:__ One of the improvements added to the given database was to include the latitude and longitude coordinates of each organisation. The idea is to include a map in the NGO information page containing its exact location, making it more easy for the user to find it.
- __Restructure database connections:__ The description can be found in the [Access](#access) section of "Database" in this document.


## :clipboard: License <a name = "license"></a>
This repository is licensed under the GPL - 3 license. This guarantees the end users the freedom to run, study, share, and modify the software provided. You can find more information in the [LICENSE](/LICENSE.txt) file.

## 👥 Authors <a name = "authors"></a>
- [@bcabgil](https://github.com/bcabgil) - Project management and data science
- [@gildafc](https://github.com/gildafc) - Project management and data science
- [@lorna-mn](https://github.com/lorna-mn) - UX / UI
- [@andrew]() - UX / UI
- [@heba0](https://github.com/heba0) - Fullstack
- [@EmilieHumbert](https://github.com/EmilieHumbert) - Frontend Web developer
- [@jacksondieter](https://github.com/jacksondieter) - Frontend and backend lead


## 🙏 Acknowledgments <a name = "acknowledgments"></a>
- Code reference:
- Inspiration:
  - User interaction: https://www.blinkist.com/
  - Documentation: https://github.com/kylelobo/The-Documentation-Compendium
  - Credit Suisse Impact Management Project Framework found in the Sustainable Investment Framework report: https://www.credit-suisse.com/sustainability/en/reports.html
- References:
  - Database of social organizations that provide help to Senegal: https://docs.google.com/spreadsheets/d/1t0-ol45Tz43zTCvqFXLLu5FSWuCbg4kElbocGbylCHA/edit#gid=1868970450
