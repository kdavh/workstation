import {Command, flags} from '@oclif/command'
import * as Git from 'nodegit'

export default class ConfigCommit extends Command {
  static description = 'Updates package_definitions, manifests, and workstation-setup repo'

  static examples = [
    '$ wk config commit',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  // https://github.com/nodegit/nodegit
  async run() {
    // Git.Repository.open(...)
  }
}
