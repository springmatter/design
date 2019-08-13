#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd ..

git add -A
git commit -m 'deploy'

git push origin master

cd -
