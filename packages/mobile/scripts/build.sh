#!/bin/sh

ENTRYPOINT=""
CURRENT_WORKSPACE=""
PLIST_LOCATION=$RUNNER_TEMP/options.plist

case $2 in
  dev) ENTRYPOINT="src/entrypoints/main_dev.ts";;
  qa) ENTRYPOINT="src/entrypoints/main_qa.ts";;
  prod) ENTRYPOINT="src/entrypoints/main_prod.ts";;
esac

if [[ -z "${GITHUB_WORKSPACE}" ]]; then
  CURRENT_WORKSPACE="packages/mobile/src"
else
  CURRENT_WORKSPACE="$GITHUB_WORKSPACE/packages/mobile/src"
fi

FLAGS="$1 --flavor $2 -t  $CURRENT_WORKSPACE/$ENTRYPOINT $3 $4 $5"
echo "Requested Flavour: $2"
echo "Setting entrypoint: $CURRENT_WORKSPACE/$ENTRYPOINT"
echo "Building $1 .......... "
echo ""

if [ $1 == ipa ]
then
  sed -i '' "s#.*entrypoints/main.*#import 'package:mobile/$ENTRYPOINT' as entrypoint;#" inject.js
  FLAGS="$FLAGS --export-options-plist=$PLIST_LOCATION"
elif [ $1 == ios ]
then
  sed -i '' "s#.*entrypoints/main.*#import 'package:mobile/$ENTRYPOINT' as entrypoint;#" inject.js
fi
echo "************************************************************************************************************"
echo "Running yarn build $FLAGS"
echo "************************************************************************************************************"

yarn build $FLAGS