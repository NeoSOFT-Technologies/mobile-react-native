#!/bin/bash
APPSUFFIX=""
OS=""
COMMAND="yarn run:"
ENTRYPOINT=""

case $2 in
dev) 
APPSUFFIX="dev"
COMMAND="$COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_dev.ts"
;;
qa) 
APPSUFFIX="qa"
COMMAND="$COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_qa.ts"
;;
prod) 
APPSUFFIX=""
COMMAND="$COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_prod.ts"
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

sed -i '' "s#.*entrypoints/main.*#import * as entrypoint from '$ENTRYPOINT'#" index.js


echo "************************************************************************************************************"
echo "Running $COMMAND"
echo "************************************************************************************************************"

eval $COMMAND