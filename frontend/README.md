## Table of Contents

- [About](#about)
- [Set up](#set_up)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)

## About <a name="about"></a>

This file contains the frontend of the project built with create-react-app.

## Set up<a name="set_up"></a>

In order to get started with the project, you need to a few set ups:

- Clone the directory, you can run the following in your terminal:
  ```
  git clone git@github.com:WomenPlusPlus/deploy-impact-21-kona-b.git
  ```
  You can get more information [here](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository).

- Got to the project directory, you can run the following in your terminal:
  ```
  npm install
  ```

## Getting started <a name = "getting_started"></a>

In the project directory, you can run the following in your terminal:
```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Deployment <a name = "deployment"></a>

In order to deploy the website, you need to follow the following steps:
- Make sure you have the Microsoft Azure CLI installed ([more info here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- Login to Microsoft Azure CLI ([more info here](https://docs.microsoft.com/en-us/azure/app-service/quickstart-python?tabs=bash&pivots=python-framework-flask)) 
```
az login
```
- Make sure you're in the frontend directory 
```
cd frontend
```
- Run the deploy script
```
npm run deploy
```

## Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Developer Server Environment
- [Tailwindcss](https://tailwindcss.com/) - CSS Framework
- Libraries:
  - [react-document-title](https://github.com/gaearon/react-document-title) - Adds title to pages
  - [react-hook-form](https://react-hook-form.com/) - Handles form
  - [I18next](https://www.i18next.com/) - Internationalisation Framework
  - [add-to-homescreen-react](https://www.npmjs.com/package/@ideasio/add-to-homescreen-react) - Progressive web app
  - [react-super-responsive-table](https://github.com/coston/react-super-responsive-table/releases) - Converts table data to a user-friendly list in mobile view
