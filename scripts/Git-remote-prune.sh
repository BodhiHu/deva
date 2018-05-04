#! bash

# turn on debugging
set -x

path=$1
remote=$2

cd $path
git remote prune $remote

