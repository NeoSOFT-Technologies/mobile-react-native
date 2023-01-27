#!/bin/sh

ENTRYPOINT=""
CURRENT_WORKSPACE=""
PLIST_LOCATION=$RUNNER_TEMP/options.plist

FILE_FORMAT=""
FLAVOR=""
BUILD_TYPE=""



if [[ -z "${GITHUB_WORKSPACE}" ]]; then
  CURRENT_WORKSPACE="packages/mobile"
else
  CURRENT_WORKSPACE="$GITHUB_WORKSPACE/packages/mobile"
fi

case $1 in #apk, appbundle, ios
  apk) FILE_FORMAT="cd android && ./gradlew assemble"
    case $2 in #flavor
      dev) FLAVOR="DevRelease";;
      qa) FLAVOR="QaRelease";;
      prod) FLAVOR="ProRelease";;
    esac
  ;;

  appbundle) FILE_FORMAT="cd android && ./gradlew bundle"
    case $2 in #flavor
      dev) FLAVOR="DevRelease";;
      qa) FLAVOR="QaRelease";;
      prod) FLAVOR="ProRelease";;
    esac
  ;;  

  ios) FILE_FORMAT="cd ios && xcodebuild -scheme "
    case $2 in #flavor
      dev) FLAVOR="dev.mobile build";;
      qa) FLAVOR="qa.mobile build";;
      prod) FLAVOR="mobile build";;
    esac
  ;;

esac


# case $3 in #build-type: debug, profile, release. Defaults to debug.
#   debug) BUILD_TYPE="/src/entrypoints/main_dev.ts";;
#   profile) BUILD_TYPE="/src/entrypoints/main_qa.ts";;
#   release) BUILD_TYPE="/src/entrypoints/main_prod.ts";;
# esac


#FLAGS="$FILE_FORMAT$FLAVOR  $CURRENT_WORKSPACE/$ENTRYPOINT $3 $4 $5"
FLAGS="$FILE_FORMAT$FLAVOR"
echo "Requested Flavour: $2"
echo "Setting entrypoint: $CURRENT_WORKSPACE/$ENTRYPOINT"
echo "Building $1 .......... "
echo ""

# if [ $1 == ipa ]
# then
#   sed -i '' "s#.*entrypoints/main.*#import * as entrypoint from $ENTRYPOINT#" injex.js
#   FLAGS="$FLAGS --export-options-plist=$PLIST_LOCATION"
# elif [ $1 == ios ]
# then
#   sed -i '' "s#.*entrypoints/main.*#import * as entrypoint from $ENTRYPOINT#" injex.js
# fi

echo "************************************************************************************************************"
echo "Running $FLAGS"
echo "************************************************************************************************************"

eval $FLAGS