## To run backend (Linux):

- install python 3.8

```
sudo apt update
sudo apt install software-properties-common
sudo apt install python3.8
```

- install pip

```
sudo apt update
sudo apt install python3-pip
```
- install dependencies:
```
 pip install -r requirements.txt
```

- run app.py
```
python app.py
```

## To deploy backend (Azure):

In order to deploy the website, you need to follow the following steps:
- Make sure you have the Microsoft Azure CLI installed ([more info here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- Login to Microsoft Azure CLI ([more info here](https://docs.microsoft.com/en-us/azure/app-service/quickstart-python?tabs=bash&pivots=python-framework-flask)) 
```
az login
```
- Make sure you're in the backend directory 
```
cd backend
```
- Run the deploy script
```
./scripts/deploy.sh 
```
## Structure

### Files:

```bash

├── app.py
├── data
│   ├── csv
│   └── json
├── model
│   ├── filters.py
│   ├── link_tables.py
│   ├── organisations.py
│   ├── quiz.py
│   └── utils
├── readme.md
├── requirements.txt
└── scripts
    └── deploy.sh

```
`data` :  Where organisation info & quiz questions/answers are stored.

`model` : Files linking and querying data from the data (csv / json) files.

`app.py` : Where APIs & main are defined. 


### Data:

```bash
data
   ├── csv
   │   ├── data
   │   │   └── organisations_in_senegal_konab.csv
   │   ├── filters
   │   │   ├── age_filters.csv
   │   │   ├── dots_subcategories_filters.csv
   │   │   ├── gender_and_age_filters.csv
   │   │   ├── gender_filters.csv
   │   │   └── region_filters.csv
   │   ├── keys
   │   │   ├── age_key_value.csv
   │   │   ├── dots_categories_key_value.csv
   │   │   ├── dots_subcategories_key_value.csv
   │   │   ├── gender_key_value.csv
   │   │   └── region_key_value.csv
   │   └── quiz
   │       ├── Answers.csv
   │       └── Questions.csv
   └── json
       └── organisation_display.json



```
`csv/data` :  Raw data of the organisations (social media handlers, address etc.)

`csv/filters` : List of organisations against one-hot-encoded data for different filters.

`csv/keys` : Id/display-value pairs of each filter.

`csv/quiz` : Quiz questions and answer options.

`json` : Final organisations data (raw data + filters) obtained by linking key,filter and raw data files.

## REST APIs

### Organisations

- `GET: /organisations`
    - *Description:* gets all organisation data.
    - *Example:*
  
  path
  ```
    http://127.0.0.1:5000/api/v0/organisations
  ```
    response
    
  ``` json
  [
      {
          "address": "Ndiolofféne Nord",
          "age": [
              "adult",
              "teen",
              "child",
              "baby"
          ],
          "age_gender": [
              "female",
              "other",
              "male",
              "adult",
              "teen",
              "child",
              "baby"
          ],
          "contactable": "True",
          "dots_categories": [
              "food",
              "education",
              "socialProtection",
              "wellBeing",
              "genderEquality",
              "workAndEntrepreneurship"
          ],
          "dots_subCategories": [
              "housingAndSocialServices",
              "nutritiousFood",
              "healthPrevention",
              "diseasePrevention",
              "mentalHealth",
              "primaryAndSecondaryEducation",
              "accessHigherEducation",
              "skillsForEmployment",
              "endViolenceWomen",
              "employment",
              "youthEmployment"
          ],
          "email": "c.hallegot@laposte.net",
          "facebook": "https:\/\/fr-fr.facebook.com\/La-Liane-591490217531018\/",
          "flicker": "None",
          "gender": [
              "female",
              "other",
              "male"
          ],
          "hotline": "None",
          "id": "1",
          "instagram": "https:\/\/instagram.com\/lalianesenegal\/",
          "latitude": "None",
          "linkedin": "None",
          "longitude": "None",
          "name": "La Liane",
          "objective": "Better living conditions for women and children",
          "opening_hours": "None",
          "other": "None",
          "phone_number": "77 434 51 51 \/ 77 783 31 40",
          "region": [
              "saintLouis"
          ],
          "services": "Food and shelter",
          "sound_cloud": "None",
          "tiktok": "None",
          "twitter": "None",
          "website": "https:\/\/laliane.eu",
          "youtube": "None"
      },
      {
          "address": "Hlm villa 407 derrière la Maison de Lille Saint-Louis, Sénégal",
          "age": [
              "adult",
              "teen",
              "child",
              "baby"
          ],
          "age_gender": [
              "female",
              "other",
              "male",
              "adult",
              "teen",
              "child",
              "baby"
          ],
          "contactable": "True",
          "dots_categories": [
              "education",
              "socialProtection",
              "wellBeing",
              "equalOpportunities",
              "workAndEntrepreneurship"
          ],
          "dots_subCategories": [
              "economicResources",
              "healthPrevention",
              "diseasePrevention",
              "primaryAndSecondaryEducation",
              "accessHigherEducation",
              "skillsForEmployment",
              "employment",
              "youthEmployment",
              "migration"
          ],
          "email": "jeunesseespoir60@gmail.com",
          "facebook": "https:\/\/www.facebook.com\/AJEassociationjeunesseespoir\/",
          "flicker": "None",
          "gender": [
              "female",
              "other",
              "male"
          ],
          "hotline": "None",
          "id": "2",
          "instagram": "None",
          "latitude": "16,01473587",
          "linkedin": "None",
          "longitude": "-16,49695734",
          "name": "Association Jeunesse Espoir (AJS)",
          "objective": "The main goal of AJS is to support children and youth in vulnerable situations in the northern region of Senegal through five main axes, while also using the potential of the Internet ",
          "opening_hours": "Always Open",
          "other": "None",
          "phone_number": "33 961 49 80 \/ 77 843 39 34",
          "region": [
              "saintLouis"
          ],
          "services": "Employement support, health  support programs, training",
          "sound_cloud": "None",
          "tiktok": "None",
          "twitter": "https:\/\/twitter.com\/aje_espoir",
          "website": "www.jeunesse-espoir-senegal.com",
          "youtube": "None"
      },...}

  
    


- `GET: /organisations/<org_id>`
    - *Description:* gets a single organisation data by organisation id. 
    - *Example:*
    path
    ```
      http://127.0.0.1:5000/api/v0/organisations/1
    ```
  response
  ```json
  [
    {
        "address": "Ndiolofféne Nord",
        "age": [
            "adult",
            "teen",
            "child",
            "baby"
        ],
        "age_gender": [
            "female",
            "other",
            "male",
            "adult",
            "teen",
            "child",
            "baby"
        ],
        "contactable": "True",
        "dots_categories": [
            "education",
            "wellBeing",
            "socialProtection",
            "genderEquality",
            "workAndEntrepreneurship",
            "food"
        ],
        "dots_subCategories": [
            "housingAndSocialServices",
            "nutritiousFood",
            "healthPrevention",
            "diseasePrevention",
            "mentalHealth",
            "primaryAndSecondaryEducation",
            "accessHigherEducation",
            "skillsForEmployment",
            "endViolenceWomen",
            "employment",
            "youthEmployment"
        ],
        "email": "c.hallegot@laposte.net",
        "facebook": "https:\/\/fr-fr.facebook.com\/La-Liane-591490217531018\/",
        "flicker": "None",
        "gender": [
            "female",
            "other",
            "male"
        ],
        "hotline": "None",
        "id": "1",
        "instagram": "https:\/\/instagram.com\/lalianesenegal\/",
        "latitude": "None",
        "linkedin": "None",
        "longitude": "None",
        "name": "La Liane",
        "objective": "Better living conditions for women and children",
        "opening_hours": "None",
        "other": "None",
        "phone_number": "77 434 51 51 \/ 77 783 31 40",
        "region": [
            "saintLouis"
        ],
        "services": "Food and shelter",
        "sound_cloud": "None",
        "tiktok": "None",
        "twitter": "None",
        "website": "https:\/\/laliane.eu",
        "youtube": "None"
    }
   ]


  
### Filtering

- `GET: /filters`
    - *Description:* gets available filters data along with their filtering options.
    - *Example:*
  path 
      ```
        http://127.0.0.1:5000/api/v0/filters
      ```
  response
  ```json
  [
    {
        "filter_key": "age",
        "filter_value": [
            {
                "icon": "FaBaby",
                "key": "baby",
                "translation_key": "baby",
                "value": "Baby (under 3)"
            },
            {
                "icon": "FaChild",
                "key": "child",
                "translation_key": "child",
                "value": "Child (4-12)"
            },
            {
                "icon": "BsPersonFill",
                "key": "youth",
                "translation_key": "teen",
                "value": "Youth (13-17)"
            },
            {
                "icon": "BsPersonPlusFill",
                "key": "adult",
                "translation_key": "adult",
                "value": "Adult (18+)"
            }
        ]
    },
     {
        "filter_key": "region",
        "filter_value": [
            {
                "icon": null,
                "key": "dakar",
                "translation_key": "dakar",
                "value": "Dakar"
            },
            {
                "icon": null,
                "key": "saint_louis",
                "translation_key": "saintLouis",
                "value": "Saint-Louis"
            },
            {
                "icon": null,
                "key": "louga",
                "translation_key": "louga",
                "value": "Louga"
            },
            {
                "icon": null,
                "key": "kaffrine",
                "translation_key": "kaffrine",
                "value": "Kaffrine"
            },
            {
                "icon": null,
                "key": "tamabacounda",
                "translation_key": "tambacounda",
                "value": "Tamabacounda"
            },
            {
                "icon": null,
                "key": "kedougou",
                "translation_key": "kedougou",
                "value": "Kedougou"
            },
            {
                "icon": null,
                "key": "kolda",
                "translation_key": "kolda",
                "value": "Kolda"
            }, ...

        ]...
    }
- `POST: /organisations/filter`
    - *Description:* gets a list of filtered organisations, sorted by how relevant they are to the passed filters.
    - *Body:* keys / values-array  of desired filtering options.
    - *Example:*
  path
  ```
  http://127.0.0.1:5000/api/v0/organisations/filter
  ```
  body
  ```json
  { "filters":{"gender":["female"],"region":["saint_louis","dakar"],"age":["baby"],"dots_subcategories":["1"],"dots_categories":["1"]}}
  
   response
   ```json
      [
        {
            "address": "Ndiolofféne Nord",
            "age": [
                "adult",
                "teen",
                "child",
                "baby"
            ],
            "age_gender": [
                "female",
                "other",
                "male",
                "adult",
                "teen",
                "child",
                "baby"
            ],
            "contactable": "True",
            "dots_categories": [
                "food",
                "education",
                "socialProtection",
                "wellBeing",
                "genderEquality",
                "workAndEntrepreneurship"
            ],
            "dots_subCategories": [
                "housingAndSocialServices",
                "nutritiousFood",
                "healthPrevention",
                "diseasePrevention",
                "mentalHealth",
                "primaryAndSecondaryEducation",
                "accessHigherEducation",
                "skillsForEmployment",
                "endViolenceWomen",
                "employment",
                "youthEmployment"
            ],
            "email": "c.hallegot@laposte.net",
            "facebook": "https:\/\/fr-fr.facebook.com\/La-Liane-591490217531018\/",
            "flicker": "None",
            "gender": [
                "female",
                "other",
                "male"
            ],
            "hotline": "None",
            "id": "1",
            "instagram": "https:\/\/instagram.com\/lalianesenegal\/",
            "latitude": "None",
            "linkedin": "None",
            "longitude": "None",
            "name": "La Liane",
            "objective": "Better living conditions for women and children",
            "opening_hours": "None",
            "other": "None",
            "phone_number": "77 434 51 51 \/ 77 783 31 40",
            "region": [
                "saintLouis"
            ],
            "score": "4",
            "services": "Food and shelter",
            "sound_cloud": "None",
            "tiktok": "None",
            "twitter": "None",
            "website": "https:\/\/laliane.eu",
            "youtube": "None"
        },
        {
            "address": "Hlm villa 407 derrière la Maison de Lille Saint-Louis, Sénégal",
            "age": [
                "adult",
                "teen",
                "child",
                "baby"
            ],
            "age_gender": [
                "female",
                "other",
                "male",
                "adult",
                "teen",
                "child",
                "baby"
            ],
            "contactable": "True",
            "dots_categories": [
                "education",
                "socialProtection",
                "wellBeing",
                "equalOpportunities",
                "workAndEntrepreneurship"
            ],
            "dots_subCategories": [
                "economicResources",
                "healthPrevention",
                "diseasePrevention",
                "primaryAndSecondaryEducation",
                "accessHigherEducation",
                "skillsForEmployment",
                "employment",
                "youthEmployment",
                "migration"
            ],..
          
     ``` 
        
  
### Quiz

- `GET: /quiz`
    - *Description:* gets quiz questions data linked to its answer options.
    - *Example:*
  
  path 
    ```
       http://127.0.0.1:5000/api/v0/quiz
   ```
  response

   ```json
  [
      {
          "answers": [
              {
                  "id": 1,
                  "text": "Me",
                  "translation_key": "me",
                  "value": "1"
              },
              {
                  "id": 2,
                  "text": "Other",
                  "translation_key": "other",
                  "value": "2"
              }
          ],
          "scope": {
              "filter": "user",
              "id": 1,
              "text": "For you or someone else",
              "translation_key": "user"
          },
          "type": "radio_buttons"
      },
      {
          "answers": [
              {
                  "id": 1,
                  "text": "Male",
                  "translation_key": "male",
                  "value": "male"
              },
              {
                  "id": 2,
                  "text": "Female",
                  "translation_key": "female",
                  "value": "female"
              },
              {
                  "id": 3,
                  "text": "Other",
                  "translation_key": "other",
                  "value": "other"
              }
          ],
          "scope": {
              "filter": "gender",
              "id": 2,
              "text": "Gender",
              "translation_key": "gender"
          },
          "type": "radio_buttons"
      },

## Editing Data
### To add / delete organisation

Add / delete a row containing organisation info to the raw-data and filter files:

*Files to be edited:*
```bash 
data
   ├── csv
   │   ├── data
   │   │   └── organisations_in_senegal_konab.csv
   │   ├── filters
   │   │   ├── age_filters.csv
   │   │   ├── dots_subcategories_filters.csv
   │   │   ├── gender_and_age_filters.csv
   │   │   ├── gender_filters.csv
   │   │   └── region_filters.csv
```

