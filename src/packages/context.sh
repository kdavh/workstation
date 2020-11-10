PACKAGE_NAME="$1"

function exitInstalled() {
    echo "'${PACKAGE_NAME}' already installed."
    exit 0
}
