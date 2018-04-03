#!/bin/bash
cd "$(dirname "$0")"
cd ../
pwd
node_modules/.bin/wdio wdio.conf.js --suite priceChangesReject
