#!/usr/bin/env zsh
set -e

. ./context.sh

cd "./$PACKAGE_NAME"

. ./index.sh

for d in $dependencies; do
    pushd ..
    echo "Dependency '$d'"
    ./install.sh "$d"
    echo ''
    popd
done

checkInstalled
install
