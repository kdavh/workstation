import {Command, flags} from '@oclif/command'
import {packageOptions} from '../../package'
import {execSync} from 'child_process'
import {cwd} from 'process'

export default class Install extends Command {
  static description = 'Install a package.'

  static examples = [
    '$ wk install docker',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
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

    const packagesDir = flags.packagesDir || cwd() + '/src/packages/'
    // let packageDir = packagesDir + '/' + args.package

    try {
      const output = execSync('./install.sh ' + args.package, {cwd: packagesDir})
      // require('../../packages/' + args.package)
      this.log(output.toString())
    } catch (error) {
      this.error(error.output.toString())
    }
  }
}
