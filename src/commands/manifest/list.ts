import {Command, flags} from '@oclif/command'
import {execSync} from 'child_process'
import {homedir} from 'os'

const DEFAULT_MANIFESTS_DIR = `${homedir()}/.dotfiles/manifest`

export default class List extends Command {
  static description = 'List manifests. Pipe to grep if filtering needed'

  static examples = [
    '$ wk manifest:list',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // for testing
    manifestsDir: flags.string(),
  }

  async run() {
    const {flags} = this.parse(List)

    const manifestsDir = flags.manifestsDir || DEFAULT_MANIFESTS_DIR

    try {
      const output = execSync(`ls ${manifestsDir}`)
      this.log(output.toString())
    } catch (error) {
      this.error(error.output.toString())
    }
  }
}
