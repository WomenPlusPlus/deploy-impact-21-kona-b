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
- [App translation](#translation)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## ‼️ Problem Statement <a name = "problem_statement"></a>
Access to tailored and trustworthy information is essential for individuals in precarious (and often life-threatening) situations. However, it is easy to get lost in a bureaucratic maze amongst the numerous support institutions that exist. 

One of the main factors that contributes to the increase of people living in precarious situations is statelessnes. A stateless person is someone who is "not considered as a national by any state under the operation of its law" [1](https://en.wikipedia.org/wiki/Statelessness). UNHCR estimates that statelesness affects millions of people worldwide, and at least 700.000 are in West and Central Affrica [2](https://data2.unhcr.org/en/situations/statelesswa). Being statelessnes is just one of the many reasons that causes people to be in vulnerable situations, being of high importance to provide a tool that eases the search for help.

## :boom: Mission <a name = "mission"></a>
Our mission is to:
* Develop a trustworthy and unified NGO database.
* Empower people to know their human rights.
* Facilitate access to NGO   information to fulfill user's needs using intelligent technologies, i.e. Dots.

## 💡 Solution <a name = "idea"></a>
The solution is provided by Konna Connect by means of the platform "Dots", a web app used for searching help. To do this, Kona Connect's team has identified and classified the social organizations. In order to provide accurate information for the users we have improved the database by including information about the age and gender of the target individuals, the SDGs and sub-SDGs to which they contribute, location and contact information (coordinates, address, email, phone number, opening hours, web site, social media, etc.)

The goal of the tool is to connect people in need to the right organizations as quickly as easily as possible. For this, our solutions provides two main options:
- A quick quiz: By answering a few question, users will be guided to the organization(s) most likely to be able to help them and their situation.
- The list of all organisations with filters: By selecting the filters that apply to their situation the user will get the NGOs that provide the needed help.
    
In the first stage, our solution is focused in providing help for the people located in Senegal. Therefore, the web app is available in English and French, and has a framework which allows to easily translate it to any regional language. Moreover, thanks to the design of our UX/UI experts, most interface options are coupled with an icon to make the app more accessible and intuitive.

## :iphone: The web app <a name = "web_app"></a>

Dots web app can be used from any device (laptop, phone, tablet). 

You can now use it here:
https://konaconnectdots.z1.web.core.windows.net/

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
  
  - ... backend files and subdirectories 
- __frontend:__ In this directory you will find all the files related to the frontend.
  
  - ...frontend files and subdirectories
- __LICENSE:__ File containing the license information.

## :bar_chart: The database <a name = "database"></a>
The data base information can be found in [/backend/csv/data](/backend/csv/data/organisations_in_senegal_konab.csv). This file contains all the NGO information in a human readable format. For each NGO the information collected is: NGO name, objective,	services,	can the NGO be contacted by individuals,	phone_number,	email,	website,	address,	region,	latitude,	longitude,	opening hours,	hotline,	facebook,	linkedin,	twitter,	youtube,	instagram,	tiktok,	flicker,	sound_cloud, and	other in case they have another social media account.

To make the database more machine readable, it was processed and divided into the following datasets:

* [age and gender](/backend/csv/filters/gender_and_age_filters.csv): In this dataset the organisations are categorized in a machine readable format according to the age and gender of the people to whom they offer their help. In the following table you can find the categories assigned to the NGOs.

    | Categories  | Options |
    | ------------- | ------------- |
    | gender  | male, female, other  |
    | age | baby, child, youth, adult  |
    
  
* [region](/backend/csv/filters/region_filters.csv): To provide as much information as possible to the user, the database also contains the specific region where each NGO is located. Find below the available options:

  | Categories  | Options |
  | ------------- | ------------- |
  | location  | dakar,	saint_louis, louga,	thies,	diourbel,	mattam,	fatick,	kaolack,	kaffrine,	tamabacounda,	kedougou,	kolda,	sedhiou,	ziguinohor|
  
* [SDG subcategory](/backend/csv/filters/dots_subcategories_filters.csv): One of the strengths of our database is that each NGO is linked to the Sustainable Development Goals (SDG) subcategories. This allow us to filter the database according to the user specific needs, allowing them to find the help they need in a shorter time and more effectively.
  | Categories  | Options |
  | ------------- | ------------- |
  | sdg  | 1-40|


### Maintenance <a name = "maintenance"></a>
This app is just as powerful as the information it contains, thefore it is very important to increase and enrich the database. 

## :books: App translation <a name = "translation"></a>
Currently the app is available in English and French, but it has been specially developped so that it can be easily translated to any language. The tranlation files are handled by the front-end and can be found in [/frontend/public/locales/](/frontend/public/locales/). To add your translation you should follow these steps:
### Requirements
The library used to translate the app is **i18next**, if it is not installed in your environment you can download it from [here](https://www.i18next.com/).


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

## :postal_horn: Troubleshooting <a name = "troubleshooting"></a>
If you find any error or weird behaviour when using Dots, please open an issue and we will try to address it ass soon as possible.

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
- References:
  - Database of social organizations that provide help to Senegal: https://docs.google.com/spreadsheets/d/1t0-ol45Tz43zTCvqFXLLu5FSWuCbg4kElbocGbylCHA/edit#gid=1868970450
