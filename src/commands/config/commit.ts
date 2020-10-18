import {Command, flags} from '@oclif/command'
// var Git = require("nodegit");

const workspace_dir='${HOME}/.workstation-config'

export default class ConfigCommit extends Command {
  static description = 'Updates package_definitions, manifests, and workstation-setup repo'

  static examples = [
    `$ wk config commit`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {

  }
}
