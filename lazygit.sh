#!/usr/bin/bash

function lazygit() {
    git add --all -- ':!data'
    git commit -m "$1"
    git push -u origin main
}