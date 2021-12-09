#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://${access_token}@github.com/fish-uncle/design-plus-doc.git master:gh-pages

cd -
