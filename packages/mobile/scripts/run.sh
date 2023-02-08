#!/bin/bash
APPSUFFIX=""
OS=""
RUN_COMMAND="yarn run:"
ENTRYPOINT=""
BUNDLE_COMMAND=""

case $2 in
dev) 
APPSUFFIX="dev"
RUN_COMMAND="$RUN_COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_dev.ts"
;;
qa) 
APPSUFFIX="qa"
RUN_COMMAND="$RUN_COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_qa.ts"
;;
prod) 
APPSUFFIX=""
RUN_COMMAND="$RUN_COMMAND$1:$2"
ENTRYPOINT="./src/entrypoints/main_prod.ts"
;;
esac

case $1 in
android)
OS="android"
RUN_COMMAND="$RUN_COMMAND --appIdSuffix=$APPSUFFIX"
BUNDLE_COMMAND="npx react-native bundle --platform $OS --dev false --entry-file $ENTRYPOINT --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/ra"
;;

ios)
OS="ios"
RUN_COMMAND="$RUN_COMMAND"
BUNDLE_COMMAND="npx react-native bundle --platform $OS --dev false --entry-file $ENTRYPOINT --bundle-output ios/main.jsbundle --assets-dest ios"
;;
esac

# Uncomment this line for IOS runtime entrfile changes if above doesnt work.
# echo "************************************************************************************************************"
# echo "Updating entry file for IOS only"
# sed -i '' "s#.*entrypoints/main.*#import * as entrypoint from '$ENTRYPOINT'#" index.js
# echo "************************************************************************************************************"

echo "************************************************************************************************************"
echo "Running $BUNDLE_COMMAND"
echo "************************************************************************************************************"

eval $BUNDLE_COMMAND

echo "************************************************************************************************************"
echo "Running $RUN_COMMAND"
echo "************************************************************************************************************"

eval $RUN_COMMAND