#!/bin/bash

git fetch --all

home=$(pwd)
thisBranch="latest"
echo "thisBranch = $thisBranch"
oldBranch="v4.6"


echo "Making directories $thisBranch && $oldBranch"
mkdir $thisBranch
mkdir $oldBranch

cd $home/docs
echo "Copying contents of this branch to dir name of $thisBranch"
cp -r $home/docs/* $home/$thisBranch

echo "changing branch to $oldBranch"
git checkout $oldBranch
echo "copying over older docs to directory called $oldBranch"
cp -r $home/docs/* $home/$oldBranch

echo "running install"
npm install
echo "copying contents to docs for building"
sudo mv $home/$thisBranch $home/docs/
sudo mv $home/$oldBranch $home/docs/

echo "going to run build"
npm run build

echo "deleting directories: docs/$thisBranch and docs/$oldBranch and docs/node_modules"
rm -rf $home/docs/$thisBranch
rm -rf $home/docs/$oldBranch
rm -rf $home/docs/node_modules


echo "going back to branch $thisBranch"
git checkout main
