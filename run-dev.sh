#!/bin/bash

home=$(pwd)

mkdir $home/latest
mkdir $home/latest-ja

cp -r $home/docs/* $home/latest
cp -r $home/docs/ja/* $home/latest-ja

mv $home/latest $home/docs
mv $home/latest-ja $home/docs/ja
mv $home/docs/ja/latest-ja $home/docs/ja/latest

cd $home/docs/
npm install
npm run dev
