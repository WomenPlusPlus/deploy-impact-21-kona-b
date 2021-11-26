#!/usr/bin/env bash

# deploy code
az webapp up
if [ $? -ne 0 ]; then
  exit $?
fi
# add allowed origins
az webapp cors add --allowed-origins "https://dots.azureedge.net" "https://konaconnectdots.z1.web.core.windows.net"
