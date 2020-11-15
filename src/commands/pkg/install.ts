import {Command, flags} from '@oclif/command'
import {execSync} from 'child_process'
import {homedir} from 'os'
import {cwd} from 'process'

const DEFAULT_PACKAGES_DIR = `${homedir()}/.dotfiles/pkg`
const PACKAGE_SCRIPTS_DIR = cwd() + '/src/pkg'

export default class Install extends Command {
  static description = 'Install a package.'

  static examples = [
    '$ wk install docker',
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
      const output = execSync(`./install.sh ${packagesDir} ${args.package}`, {cwd: PACKAGE_SCRIPTS_DIR})
      this.log(output.toString())
    } catch (error) {
      this.error(error.output.toString())
    }
  }
}
