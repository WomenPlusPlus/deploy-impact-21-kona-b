#!/usr/bin/env bash

# build production app
REACT_APP_API=https://konaconnectdots.azurewebsites.net/api/v0 npm run build
if [ $? -ne 0 ]; then
  exit $?
fi
# delete old files
az storage blob delete-batch --account-name konaconnectdots --source '$web'
if [ $? -ne 0 ]; then
  exit $?
fi
# upload new files
az storage blob upload-batch --account-name konaconnectdots --source ./build/ --destination '$web'
if [ $? -ne 0 ]; then
  exit $?
fi
# purge cdn cache
az cdn endpoint purge --resource-group "KonaB" --profile-name "dots-ms" --name "dots" --content-paths "/*" --no-wait
