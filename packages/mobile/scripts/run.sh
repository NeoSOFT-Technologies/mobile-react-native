#!/bin/bash
ENTRYPOINT=""
APPSUFFIX=""
OS=""

case $1 in
android)
OS="android";;
ios)
OS="ios";;
esac

case $2 in
dev) 
ENTRYPOINT="entrypoints/main_dev.ts"
APPSUFFIX="dev"
;;
qa) 
ENTRYPOINT="entrypoints/main_qa.ts"
APPSUFFIX="qa"
;;
prod) ENTRYPOINT="entrypoints/main_prod.ts";;
esac

echo "************************************************************************************************************"
echo "Running yarn run:$1:$2 --appIdSuffix=$APPSUFFIX"
echo "************************************************************************************************************"

yarn run:$1:$2 --appIdSuffix=$APPSUFFIX