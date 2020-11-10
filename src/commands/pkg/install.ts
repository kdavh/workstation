import {Command, flags} from '@oclif/command'
import {packageOptions} from '../../pkg'
import {execSync} from 'child_process'
import {cwd} from 'process'

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
      options: packageOptions,
    },
  ]

  // https://github.com/nodegit/nodegit
  async run() {
    const {args, flags} = this.parse(Install)

    const packageScriptsDir = cwd() + '/src/pkg'
    const packagesDir = flags.packagesDir || packageScriptsDir

    try {
      const output = execSync(`./install.sh ${packagesDir} ${args.package}`, {cwd: packageScriptsDir})
      this.log(output.toString())
    } catch (error) {
      this.error(error.output.toString())
    }
  }
}
