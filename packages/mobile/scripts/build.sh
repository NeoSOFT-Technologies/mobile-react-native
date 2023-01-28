#!/bin/sh

ENTRYPOINT=""
CURRENT_WORKSPACE=""
PLIST_LOCATION=$RUNNER_TEMP/options.plist

FILE_FORMAT=""
FLAVOR=""
FLAGS=""

setAndroidFlavor(){
 case $1 in #flavor
  dev) FLAVOR="DevRelease"
  ;;
  qa) FLAVOR="QaRelease"
  ;;
  prod) FLAVOR="ProRelease"
  ;;
  esac
}

setIOSFlavor(){
 case $1 in #flavor
  dev) FLAVOR="mobile build -configuration dev.Debug"
  ;;
  qa) FLAVOR="mobile build -configuration qa.Debug"
  ;;
  prod) FLAVOR="mobile build -configuration prod.Debug"
  ;;
  esac
}

setEnvironmentEntryPoint(){
 case $1 in #flavor
  dev)
  ENTRYPOINT="./src/entrypoints/main_dev.ts"
  ;;
  qa)
  ENTRYPOINT="./src/entrypoints/main_qa.ts"
  ;;
  prod)
  ENTRYPOINT="./src/entrypoints/main_prod.ts"
  ;;
  esac
  echo $ENTRYPOINT
}

if [[ -z "${GITHUB_WORKSPACE}" ]]; then
  CURRENT_WORKSPACE="packages/mobile"
else
  CURRENT_WORKSPACE="$GITHUB_WORKSPACE/packages/mobile"
fi

setEnvironmentEntryPoint $2

case $1 in #apk, appbundle, ios
  apk) FILE_FORMAT="cd android && ./gradlew assemble"
    setAndroidFlavor $2
    ;;

  appbundle) FILE_FORMAT="cd android && ./gradlew bundle"
    setAndroidFlavor $2
    ;;  

  ios) FILE_FORMAT="cd ios && xcodebuild -scheme "
   setIOSFlavor $2
   ;;

  ipa) FILE_FORMAT="cd ios && xcodebuild -scheme "
   setIOSFlavor $2
   FLAGS="$FLAGS --export-options-plist=$PLIST_LOCATION"
   ;; 

esac

COMMAND="$FILE_FORMAT$FLAVOR$FLAGS"
echo "Requested Flavour: $2"
echo "Setting entrypoint: $ENTRYPOINT"
echo "Building $1 .......... "
echo ""

sed -i '' "s#.*entrypoints/main.*#import * as entrypoint from '$ENTRYPOINT'#" index.js

echo "************************************************************************************************************"
echo "Running $COMMAND"
echo "************************************************************************************************************"

eval $COMMAND