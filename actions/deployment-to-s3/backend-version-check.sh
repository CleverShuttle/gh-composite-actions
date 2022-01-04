#!/bin/bash

current=$(curl "$BACKEND_ACTUATOR_URL" | jq '.project.version' | cut -d"." -f1 | cut -d"\"" -f2)
required=$(cat ./package.json | jq '.requiredBackendVersion')
echo "Backend version: $current ($required required)"

if [ ! "$current" = "$required" ]; then
  echo "WARNING: Incompatible backend version"
  
  if [ $BACKEND_VERSION_CHECK = true ]; then
      echo "ERROR: Compatible backend version required"
      exit 1
  fi
fi