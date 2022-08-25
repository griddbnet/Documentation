#!/bin/bash

git fetch --all

home=$(pwd)
thisBranch="latest"
echo "thisBranch = $thisBranch"
oldBranch="v4.5"


echo "Making directories $thisBranch && $oldBranch"
mkdir $oldBranch
mkdir $oldBranch-ja

cd $home/docs
echo "Copying contents of LATEST docs to home root"
cp -r $home/docs/latest $home/
cp -r $home/docs/ja $home/


echo "changing branch to $oldBranch"
git checkout $oldBranch
echo "copying over older docs to directory called $oldBranch"
cp -r $home/docs/* $home/$oldBranch
cp -r $home/docs/ja/* $home/$oldBranch-ja

echo "running install"
npm install
echo "copying contents to docs for building"

mv $home/latest $home/docs/
echo "renaming ja content to $thisBranch and moving to docs/ja"
mv $home/ja $home/latest
mv $home/latest $home/ja
echo "moving $oldBranch from root to docs/"
mv $home/$oldBranch $home/docs/

echo "renaming $oldBranch-ja within docs/ja directory"
mv $home/$oldBranch-ja $home/docs/ja
mv $home/docs/ja/$oldBranch-ja $home/docs/ja/$oldBranch

echo "going to run build"
npm run build

echo "deleting directories: docs/$thisBranch and docs/$oldBranch and docs/node_modules"
rm -rf $home/docs/$thisBranch
rm -rf $home/docs/$oldBranch
rm -rf $home/docs/ja/$thisBranch
rm -rf $home/docs/ja/$oldBranch
rm -rf $home/docs/node_modules
rm $home/docs/package-lock.json

echo "going back to branch $thisBranch"
git checkout main
