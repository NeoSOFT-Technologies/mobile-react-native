#!/bin/bash

ENTRYPOINT=""
case $1 in
dev) ENTRYPOINT="entrypoints/main_dev.ts";;
qa) ENTRYPOINT="entrypoints/main_qa.ts";;
prod) ENTRYPOINT="entrypoints/main_prod.ts";;
esac

# Uncomment if generated_main causes error on ios
#if [ $2 == ios ]
#then
#  sed -i '' "s#.*entrypoints/main.*#import 'package:flutter_template/$ENTRYPOINT' as entrypoint;#" lib/main.dart
#fi

yarn run:android:$1