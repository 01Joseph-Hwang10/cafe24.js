#!/bin/bash

# Get the current version from the package.json file
CURRENT_VERSION="$(jq -r '.version' package.json)"

# Get the prerelease version from the current version
PRERELEASE_VERSION="$(semver $CURRENT_VERSION -i prerelease --preid dev)"
echo "Bumping version from $CURRENT_VERSION to $PRERELEASE_VERSION"

# Update the version in the package.json file
jq '.version = "'$PRERELEASE_VERSION'"' package.json > temp.json
mv temp.json package.json
