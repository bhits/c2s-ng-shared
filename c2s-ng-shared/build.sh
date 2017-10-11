#!/usr/bin/env bash

echo cleaning .ng_build folder
rm -r .ng_build/
echo running packagr
npm run packagr
