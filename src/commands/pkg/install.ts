import {Command, flags} from '@oclif/command'
import {homedir} from 'os'

import {install} from '../../pkg'

const DEFAULT_PACKAGES_DIR = `${homedir()}/.dotfiles/pkg`

export default class Install extends Command {
  static description = 'Install a package.'

  static examples = [
    '$ wk pkg:install docker',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // for testing
    packagesDir: flags.string(),
  }

  static args = [
    {
      name: 'package',
    },
  ]

  async run() {
    const {args, flags} = this.parse(Install)

    const packagesDir = flags.packagesDir || DEFAULT_PACKAGES_DIR

    try {
      this.log(install(args.package, packagesDir))
    } catch (error) {
      this.error(error)
    }
  }
}
