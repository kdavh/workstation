PACKAGE_NAME="$(dirname "$(pwd)")"

function exitInstalled() {
    echo "'${PACKAGE_NAME}' already installed."
    exit 0
}
