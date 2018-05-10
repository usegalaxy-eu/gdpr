#!/bin/bash
set -ex

TMP_DIR=$(mktemp -d)
git checkout master
jekyll build -d $TMP_DIR
git checkout gh-pages
rm -rf *
cp -Rv $TMP_DIR/. .

git add .
git add --all *
git config --local user.name "UseGalaxy.EU Build Bot"
git config --local user.email "jenkins@usegalaxy.eu"

git commit -m "Update site ($BUILD_NUMBER)

$BUILD_URL"

git push origin master
rm -rf $TMP_DIR
