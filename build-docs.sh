#!/bin/bash

git fetch --all

home=$(pwd)
#branch=$(git rev-parse --abbrev-ref HEAD)
branch="latest"
new="v5.0"

mkdir $branch
mkdir $new

cd $home/docs
cp -r $home/docs/* $home/$branch

git checkout $new
cp -r $home/docs/* $home/$new

#mv .vuepress/dist/* .vuepress/$new
#mv .vuepress/$new .vuepress/dist
#mv $home/$branch .vuepress/dist
#cp .vuepress/dist/$new/* .vuepress/dist

#rm -rf $home/$new

npm install
npm run build
mv $home/$branch $home/docs/.vuepress/dist
mv $home/$new $home/docs/.vuepress/dist
git checkout $branch

