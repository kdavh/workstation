#!/usr/bin/env zsh
set -e

PACKAGES_DIR="$1"
PACKAGE="$2"
SCRIPTS_DIR="$(pwd)"

function exitInstalled() {
    echo "'${PACKAGE}' already installed."
    exit 0
}

cd "$PACKAGES_DIR/$PACKAGE"

. ./index.sh

for d in $dependencies; do
    pushd "$SCRIPTS_DIR"
    echo "Dependency '$PACKAGES_DIR/$d'"
    ./install.sh "$PACKAGES_DIR" "$d"
    echo ''
    popd
done

checkInstalled
install
