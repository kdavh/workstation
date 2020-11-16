wk
==

Workspace setup tool, mac, linux, etc

# Intended Use

```
# install npm somehow
brew install npm

# make `wk` binary available on your system
git clone https://github.com/kdavh/workstation
cd workstation
npm link

# download some dotfiles to work with
git clone git@github.com:kdavh/dotfiles.git ~/.dotfiles

# now use `wk`
```

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wk.svg)](https://npmjs.org/package/wk)
[![Downloads/week](https://img.shields.io/npm/dw/wk.svg)](https://npmjs.org/package/wk)
[![License](https://img.shields.io/npm/l/wk.svg)](https://github.com/kdavh/wk/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Develop](#develop)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wk
$ wk COMMAND
running command...
$ wk (-v|--version|version)
wk/0.0.1 darwin-x64 node-v14.4.0
$ wk --help [COMMAND]
USAGE
  $ wk COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wk autocomplete [SHELL]`](#wk-autocomplete-shell)
* [`wk config:commit`](#wk-configcommit)
* [`wk config:edit`](#wk-configedit)
* [`wk help [COMMAND]`](#wk-help-command)
* [`wk pkg:install [PACKAGE]`](#wk-pkginstall-package)
* [`wk pkg:search`](#wk-pkgsearch)

## `wk autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ wk autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ wk autocomplete
  $ wk autocomplete bash
  $ wk autocomplete zsh
  $ wk autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `wk config:commit`

Updates package_definitions, manifests, and workstation-setup repo

```
USAGE
  $ wk config:commit

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ wk config commit
```

_See code: [src/commands/config/commit.ts](https://github.com/kdavh/wk/blob/v0.0.1/src/commands/config/commit.ts)_

## `wk config:edit`

Open workspace configs in your favorite editor

```
USAGE
  $ wk config:edit

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ wk config edit
```

_See code: [src/commands/config/edit.ts](https://github.com/kdavh/wk/blob/v0.0.1/src/commands/config/edit.ts)_

## `wk help [COMMAND]`

display help for wk

```
USAGE
  $ wk help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `wk pkg:install [PACKAGE]`

Install a package.

```
USAGE
  $ wk pkg:install [PACKAGE]

OPTIONS
  -h, --help                 show CLI help
  --packagesDir=packagesDir

EXAMPLE
  $ wk install docker
```

_See code: [src/commands/pkg/install.ts](https://github.com/kdavh/wk/blob/v0.0.1/src/commands/pkg/install.ts)_

## `wk pkg:search`

Search for a package. Pipe to grep if filtering needed

```
USAGE
  $ wk pkg:search

OPTIONS
  -h, --help                 show CLI help
  --packagesDir=packagesDir

EXAMPLE
  $ wk pkg:search docker
```

_See code: [src/commands/pkg/search.ts](https://github.com/kdavh/wk/blob/v0.0.1/src/commands/pkg/search.ts)_
<!-- commandsstop -->

# Develop

## Install development tools

`npm install -g npx`

`npm install -g np` Like npm version, but also runs tests, etc

## Publish

Build src, and attempt to upload to npm registry (currently no corresponding npm package, so fails).

`np major|minor|patch`
`npm publish`
