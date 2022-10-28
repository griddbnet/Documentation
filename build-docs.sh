#!/bin/bash

git fetch --all

home=$(pwd)
thisBranch="latest"
echo "thisBranch = $thisBranch"
oldBranch="v4.5"

echo "Copying contents of LATEST docs to home root"
rsync -av $home/docs/latest/ $home/latest --exclude $home/docs/ja
rsync -av $home/docs/ja/ $home/ja


echo "changing branch to $oldBranch"
git checkout $oldBranch
echo "printout of $home/ja"
ls $home/ja/

mv $home/docs/ja/$oldBranch $home/ja/

echo "running install"
cd $home/docs
npm install
echo "copying contents to docs for building"

#cp -r $home/latest/* $home/docs/
mv $home/latest $home/docs/
rm -rf $home/docs/ja
mv $home/ja $home/docs/
#mv $home/$oldBranch $home/docs/

echo "PRINT ALL CONTENTS"
echo "ls home"
ls $home
echo "ls home/docs"
ls $home/docs/
echo "ls home/docs/latest"
ls $home/docs/latest
echo "ls home/docs/ja"
ls $home/docs/ja

SLEEP 3
echo "going to run build"
npm run build

echo "deleting directories: docs/$thisBranch and docs/$oldBranch and docs/node_modules"
rm -rf $home/docs/$oldBranch
rm -rf $home/docs/ja/$oldBranch
rm -rf $home/docs/$thisBranch
rm -rf $home/docs/ja/$thisBranch
rm -rf $home/docs/node_modules
rm $home/docs/package-lock.json

echo "going back to branch $thisBranch"
git checkout main