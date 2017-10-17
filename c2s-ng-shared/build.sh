#!/usr/bin/env bash

RED='\033[0;31m'
LIGHT_GREEN='\033[1;32m'
NC='\033[0m'

echo -e "${LIGHT_GREEN}running npm prune and npm update${NC}"
npm prune
npm update

echo -e "${LIGHT_GREEN}cleaning .ng_build folder${NC}"
rm -r .ng_build/

echo -e "${LIGHT_GREEN}running pre_build_copy_flex_layout script to copy flex dependencies${NC}"
./pre_build_copy_flex_layout.sh

echo -e "${LIGHT_GREEN}running packagr${NC}"
npm run packagr

echo -e "${LIGHT_GREEN}build is done${NC}"
