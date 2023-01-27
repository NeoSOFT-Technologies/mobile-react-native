#!/bin/bash
ENTRYPOINT=""
APPSUFFIX=""
OS=""
COMMAND="yarn run:"

case $2 in
dev) 
ENTRYPOINT="entrypoints/main_dev.ts"
APPSUFFIX="dev"
COMMAND="$COMMAND$1:$2"
;;
qa) 
ENTRYPOINT="entrypoints/main_qa.ts"
APPSUFFIX="qa"
COMMAND="$COMMAND$1:$2"
;;
prod) 
ENTRYPOINT="entrypoints/main_prod.ts"
APPSUFFIX=""
COMMAND="$COMMAND$1:$2"
;;
esac

case $1 in
android)
OS="android"
COMMAND="$COMMAND --appIdSuffix=$APPSUFFIX"
;;

ios)
OS="ios"
COMMAND="$COMMAND"
;;
esac

echo "************************************************************************************************************"
echo "Running $COMMAND"
echo "************************************************************************************************************"

eval $COMMAND