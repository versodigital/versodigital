#!/bin/bash

if git diff-index --quiet HEAD --; then
    git checkout master
    git pull
    git checkout gh-pages
    git pull
    git merge master
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    [ $? -gt 0 ] && ( echo "Merge failed"; exit 1; )
>>>>>>> master
    npm install
    bower install
>>>>>>> master
    gulp build
    [ $? -gt 0 ] && ( echo "Build failed"; exit 1; )
    npm prune --production
    git add -f .
=======
    git add -f .
    gulp build
>>>>>>> b2719f9eba524e297a5c144f64fcacce5abac517
    git commit -m "Build $(date +"%D %T")"
    git checkout master
else
    echo "Uncommitted changes, exiting."
fi