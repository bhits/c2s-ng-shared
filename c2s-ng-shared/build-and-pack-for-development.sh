#!/usr/bin/env bash

./build.sh
cd dist
echo packing
npm pack
cd ..
echo done
