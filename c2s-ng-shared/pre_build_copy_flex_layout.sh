#!/usr/bin/env bash

NC='\033[0m'
LIGHT_BLUE='\033[1;34m'
LIGHT_CYAN='\033[1;36m'

copy_base_path=/usr/local/google/home/mmalerba
copy_relative_path=/flex-layout/src/lib
copy_path=$copy_base_path$copy_relative_path

echo -e "${LIGHT_BLUE}identifying the operating system${NC}"
if [ "$(uname)" == "Darwin" ]; then
    echo -e "${LIGHT_CYAN}->Mac OS X platform${NC}"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo -e "${LIGHT_CYAN}->GNU/Linux platform${NC}"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    echo -e "${LIGHT_CYAN}->32 bits Windows NT platform${NC}"
    copy_base_path=/c$copy_base_path
    copy_path=$copy_base_path$copy_relative_path
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    echo -e "${LIGHT_CYAN}->64 bits Windows NT platform${NC}"
    copy_base_path=/c$copy_base_path
    copy_path=$copy_base_path$copy_relative_path
fi

echo -e "${LIGHT_BLUE}cleaning $copy_base_path${NC}"
rm -r $copy_base_path

echo -e "${LIGHT_BLUE}creating $copy_path${NC}"
mkdir -p $copy_path

echo -e "${LIGHT_BLUE}coping node_modules/@angular/flex-layout to $copy_path${NC}"
cp -a node_modules/@angular/flex-layout/* $copy_path

echo -e "${LIGHT_BLUE}coping required flex source files is done${NC}"
