#!/usr/bin/env bash

# build production app
REACT_APP_API=https://konaconnectdots.azurewebsites.net/api/v0 npm run build
# delete old files
az storage blob delete-batch --account-name konaconnectdots --source '$web'
# upload new files
az storage blob upload-batch --account-name konaconnectdots --source ./build/ --destination '$web'
# purge cdn cache
az cdn endpoint purge --resource-group "KonaB" --profile-name "dots-ms" --name "dots" --content-paths "/*" --no-wait