#!/bin/bash
home=$(pwd)

mkdir $home/latest
rsync -av $home/docs/ $home/latest --exclude-from='exclude_me.txt'
mv $home/latest $home/docs/

cd docs/
npm install
npm run dev
