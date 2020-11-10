#!/usr/bin/env zsh

dependencies=('shell')

function checkInstalled() {
    if brew ls --versions docker && brew ls --versions docker-compose; then
        exitInstalled
    fi
}

function install() {
    brew install docker
    brew install docker-compose
    # installs gui for docker daemon
    brew cask install docker

    ln -fs $PWD/docker.shellrc ${HOME}/.shellrc.d/
}
