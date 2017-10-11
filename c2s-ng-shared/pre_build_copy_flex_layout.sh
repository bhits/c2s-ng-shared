#!/usr/bin/env bash

copy_base_path=/usr/local/google/home/mmalerba
copy_relative_path=/flex-layout/src/lib
copy_path=$copy_base_path$copy_relative_path

if [ "$(uname)" == "Darwin" ]; then
    echo Mac OS X platform
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    echo GNU/Linux platform
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    echo 32 bits Windows NT platform
    copy_base_path=/c$copy_base_path
    copy_path=$copy_base_path$copy_relative_path
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    echo 64 bits Windows NT platform
    copy_base_path=/c$copy_base_path
    copy_path=$copy_base_path$copy_relative_path
fi

echo cleaning $copy_base_path
rm -r $copy_base_path

echo creating $copy_path
mkdir -p $copy_path

echo coping node_modules/@angular/flex-layout to $copy_path
cp -a node_modules/@angular/flex-layout/* $copy_path
