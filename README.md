# C2S NG Shared

Angular UI Component Library for C2S Shared Components.

## Build

### Prerequisites

+ [NodeJS](https://nodejs.org/en/) - 6.11.1
+ [NPM](https://nodejs.org/en/) - 3.10.10
+ [Angular CLI](https://cli.angular.io/) - 1.4.4
+ [Git](https://git-scm.com/) - 2.14.1

### Jenkins Build

#### Jenkins Prerequisites

+ Jenkins must comply with [build prerequisites](#prerequisites).
+ `/usr/local/google/home/mmalerba` directory must be recursively given permissions for the `jenkins` user and group to read and write.

#### Jenkins Build Sample Shell Script

```bash
cd c2s-ng-shared
chmod +x build.sh
chmod +x pre_build_copy_flex_layout.sh
npm prune
npm install
./build.sh
```

The script can be followed by a `npm publish --registry=$MY_PRIVATE_REGISTRY dist` command to publish the package to a configured private registry.

### Development Build for Local Use

Navigate to the [c2s-ng-shared](c2s-ng-shared) folder, and execute:

```bash
./build-and-pack-for-development.sh
```

This script will build the Angular Component Library and package it as a `tgz` file, so it can be installed locally to an Angular application with a script similar to this *(assuming both of the projects are cloned to the same root directory)*:

```bash
#!/usr/bin/env bash
find_location="../../c2s-ng-shared/c2s-ng-shared/dist"
find_file_pattern="c2s-ng-shared-*.tgz"
local_dep_name=$(find $find_location -name $find_file_pattern)
if [ ! -z "$local_dep_name" ]; then
	echo "installing $local_dep_name"
	npm install --save $local_dep_name
else
	echo "could not find a file at: $find_location/$find_file_pattern"
fi
```

## Run Sandbox

Navigate to the [c2s-ng-shared](c2s-ng-shared) folder, and execute `ng serve`.