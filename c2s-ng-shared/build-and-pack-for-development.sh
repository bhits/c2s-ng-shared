#!/usr/bin/env bash

LIGHT_GREEN='\033[1;32m'
NC='\033[0m'

echo -e "${LIGHT_GREEN}running build script${NC}"
./build.sh

echo -e "${LIGHT_GREEN}packing for development${NC}"
cd dist
npm pack
cd ..

echo -e "${LIGHT_GREEN}packing for development is done${NC}"
