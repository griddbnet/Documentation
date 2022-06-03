#!/bin/bash

git fetch --all

home=$(pwd)
branch=$(git rev-parse --abbrev-ref HEAD)
#branch="latest"
new="v5.0"

mkdir $branch
mkdir latest

cd $home/docs
cp -r $home/docs/* $home/$branch

echo "changing branch"
git checkout $new
echo "copying over new branch contents!"
cp -r $home/docs/* $home/latest

#mv .vuepress/dist/* .vuepress/$new
#mv .vuepress/$new .vuepress/dist
#mv $home/$branch .vuepress/dist
#cp .vuepress/dist/$new/* .vuepress/dist

#rm -rf $home/$new

echo "running install"
npm install
echo "copying contents to dist"
mv $home/$branch $home/docs/
mv $home/latest $home/docs/
npm run build
git checkout $branch
