#! bash

# turn on debugging
set -x

path=$1
upstream=$2
branch=$3

cd $path
git fetch $upstream $branch
git checkout -b $branch $upstream/$branch

