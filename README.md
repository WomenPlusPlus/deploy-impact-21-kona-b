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
- ...

Find the instructions on how to run it [here](/backend).

## :house: Repository structure <a name = "structure"></a>

- __backend:__ In this directory you will find all the files related to the backend.
  
  - ... backend files and subdirectories 
- __frontend:__ In this directory you will find all the files related to the frontend.
  
  - ...frontend files and subdirectories
- __LICENSE:__ File containing the license information.

## :bar_chart: The database <a name = "database"></a>
Explanation about the database

### Maintenance <a name = "maintenance"></a>
Database maintenance

## :books: App translation <a name = "translation"></a>
Explain how the app can be translated using .json files

## :postal_horn: Troubleshooting <a name = "troubleshooting"></a>
If you find any error or weird behaviour when using Dots, please open an issue and we will try to address it ass soon as possible.

## :clipboard: License <a name = "license"></a>
This repository is licensed under the GPL - 3 license. This guarantees the end users the freedom to run, study, share, and modify the software provided. You can find more information in the [LICENSE](/LICENSE.txt) file.

## 👥 Authors <a name = "authors"></a>
- [@bcabgil](https://github.com/bcabgil) - Project management and data science
- [@gildafc](https://github.com/gildafc) - Project management and data science
- [@lorna-mn](https://github.com/lorna-mn) - UX / UI
- [@andrew](https://github.com/lorna-mn) - UX / UI
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
