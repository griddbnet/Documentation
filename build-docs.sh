#!/bin/bash

git fetch --all

home=$(pwd)
thisBranch="latest"
echo "thisBranch = $thisBranch"
oldBranch="v4.5"

echo "Copying contents of LATEST docs to home root"
rsync -av $home/docs/latest/ $home/latest --exclude $home/docs/ja
rsync -av $home/docs/ja/ $home/ja

#cp -r $home/docs/latest $home/
#cp -r $home/docs/ja $home/


echo "changing branch to $oldBranch"
git checkout $oldBranch
# echo "copying over older docs to directory called $oldBranch"
# rsync -av $home/docs/$oldBranch/ $home/$oldBranch --exclude $home/docs/ja
mv $home/docs/ja/$oldBranch $home/ja/


#cp -r $home/docs/* $home/$oldBranch
#cp -r $home/docs/ja/* $home/$oldBranch-ja

echo "running install"
cd $home/docs
npm install
echo "copying contents to docs for building"

mv $home/latest $home/docs/
mv $home/ja $home/docs/
#mv $home/$oldBranch $home/docs/

echo "PRINTING JA DOCS DIR"
ls $home/ja


echo "PRINT ALL CONTENTS"
echo "ls home"
ls $home
echo "ls home/docs"
ls $home/docs/
echo "ls home/docs/ja"
ls $home/docs/ja

SLEEP 3
echo "going to run build"
npm run build

echo "deleting directories: docs/$thisBranch and docs/$oldBranch and docs/node_modules"
rm -rf $home/docs/$oldBranch
rm -rf $home/docs/ja/$oldBranch
rm -rf $home/docs/node_modules
rm $home/docs/package-lock.json

echo "going back to branch $thisBranch"
git checkout main