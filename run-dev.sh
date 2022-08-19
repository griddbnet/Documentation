#!/bin/bash

home=$(pwd)

mkdir $home/latest
cp -r $home/docs/* $home/latest
mv $home/latest $home/docs
cd $home/docs/
npm install
npm run dev
