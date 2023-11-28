#!/usr/bin/bash

echo 'Entered the function'
git add --all -- ':!data'
echo 'Git add done'
git commit -m "$1"
echo 'Git commit done'
git push -u origin main
echo 'Git pushed'
