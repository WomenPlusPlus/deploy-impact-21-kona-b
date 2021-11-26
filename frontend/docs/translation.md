## Translation <a name="translation"></a>

- [Requirements](#requirements)
- [The files structure](#files_structure)
- [How the translation works](#translation_works)
- [Add a new language](#add_language)

### Requirements <a name="requirements"></a>

The library used to translate the Dots. website is [react.i18next](https://react.i18next.com/). If it is not installed in your local environment you can install it following this [guide](https://react.i18next.com/getting-started).

### The files structure <a name="files_structure"></a>

Each language will have a dedicated translation folder and a .json file for each page. The page that correspond to each translation file is indicated in the filename, i.e. aboutUs.json contains the translation for the page "About Us". The 'quiz' json files are used in multiple pages for translation because it contains translation keys needed on different pages. Ideally those translation keys should be moved to global translation files (one for each language).

In case you want to change the name of a translation file, you should change it for every languages. For example if you decide to call the json files translating the homepage 'homepage.json' instead of the current 'home.json', then you need to change the name in the [/fr](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/tree/main/frontend/public/locales/fr) folder and in the [/en](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/tree/main/frontend/public/locales/fr) folder.

### How the translation works <a name="translation_works" ></a>

1. The way the translation works in the actual setup is that the frontend get via a GET API request a 'translation key' from the backend or just uses a translation key. For example for the quiz, the translation keys for the questions and answers are sent by the backend, but on the homepage no API request was used. That means that if for some reason we don't have a response from the backend, the homepage can still be translated / displayed, but not the quiz.

2. Currently the translation files are saved in the frontend. Each translation keys uses thoses translation files to do the translation ([see files structure](#fileStructure).

3. The i18next library is imported on each file needing translation.

```
import { useTranslation } from "react-i18next")
```

4. You need to tell the library which file you want to use for the translation. You do it as followed:

```
const { t } = useTranslation("the page you want to translate")
```

So for example if you are translating the homepage, you will write:

```
const { t } = useTranslation("home")
```

You can also use multiple files and in this case you do like so:

```
const { t } = useTranslation(["organisation", "quiz"]);
```

The first file ('organisation') is the default file.

5. To display the translation strings (translation value), use the translation key that way:

```
t("translation key")
```

If you are using multiple files, you need to do that:

```
{t(`translation key`, {ns: "name of the file you want to use",})}
```

If using default, you don't need to do that.

### Add a new language to your website <a name="add_language"></a>

1. Add the new supported language: Go to [/frontend/src/i18n.js ](/frontend/src/i18n.js), this is the i18next configuration file. Add language abbreviation in the i18.js file:

```
supportedLngs: ["en", "fr", "new_abbreviation"],
```

2. Go to [[/frontend/public/locales](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/tree/main/frontend/public/locales/fr)]. Create a new folder named with the abbreviation of the language, i.e. fr for French

3. In the current set up, there is a translation file for each page, so you need to create a file for each page that you want to translate. Every file translating a page has to have the same name. For example the homepage is translated in French in a file called 'home.json' [/frontend/public/locales/fr/home.json](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/blob/main/frontend/public/locales/fr/home.json) and the English version is also called 'home.json' [/frontend/public/locales/en/home.json](https://github.com/WomenPlusPlus/deploy-impact-21-kona-b/blob/main/frontend/public/locales/en/home.json). If a page is not translated, the fallback language will be used. At the moment it's set up as English ([see configuration file](/frontend/src/i18n.js)).

4. To start the translation, you will need to use the same 'translation keys' accross the different language files.
   If we continue with our homepage example, lets have a look at the English version of the [home.json](/frontend/public/locales/en/home.json) file.
   Here, the keys of the object is a 'translation key' (i.e: "presentation", "title",...). Each file translating the homepage for example will have the same 'translation keys' and each object's value is the translation itself.

```
{
  "welcome": [
    "Welcome",
    "to",
    "Dots."
  ],
  "presentation": "We are your alternative legal aid app responsibly connecting you to the right organisations",
  "title": "How can we help?",
  "subTitle": "We selected a list of trusted organisations, to find the right one for your need:",
  "textListOrganisations": "Search for different organisations depending on your needs",
  "listOrganisationButton": "View all organisations",
  "textQuiz": "Answer a few simple questions to find the right organisation",
  "quizButton": "Use our search assistant",
  "privacyPolicy": "We promise to respect your privacy. Find out more."
}
```
