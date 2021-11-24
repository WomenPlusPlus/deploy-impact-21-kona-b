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

- run api.py
```
python api.py
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
