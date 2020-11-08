#!/bin/env zsh

echo "test"
. ../context.sh

# installed already?
brew ls --versions docker && brew ls --versions docker-compose && exitInstalled

# install
brew install docker
brew install docker-compose
# installs gui for docker daemon
brew cask install docker

ln -fs $PWD/docker.shellrc ${HOME}/.shellrc.d/
