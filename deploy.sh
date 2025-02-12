#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push the build to the gh-pages branch of your GitHub repo
git push -f git@github.com:Ahren-Chen/Ahren-Chen.github.io.git main:gh-pages

# if you are deploying to https://Ahren-Chen.github.io/<REPO>
# git push -f git@github.com:Ahren-Chen/<REPO>.git main:gh-pages

cd -