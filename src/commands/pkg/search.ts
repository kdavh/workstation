import {Command, flags} from '@oclif/command'
import {execSync} from 'child_process'
import {homedir} from 'os'

const DEFAULT_PACKAGES_DIR = `${homedir()}/.dotfiles/pkg`

export default class Search extends Command {
  static description = 'Search for a package. Pipe to grep if filtering needed'

  static examples = [
    '$ wk pkg:search docker',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // for testing
    packagesDir: flags.string(),
  }

  async run() {
    const {flags} = this.parse(Search)

    const packagesDir = flags.packagesDir || DEFAULT_PACKAGES_DIR

    try {
      const output = execSync(`ls ${packagesDir}`)
      this.log(output.toString())
    } catch (error) {
      this.error(error.output.toString())
    }
  }
}
