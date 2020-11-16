import {Command, flags} from '@oclif/command'
import {execSync} from 'child_process'
import {homedir} from 'os'

import {install} from '../../pkg'

const DEFAULT_MANIFESTS_DIR = `${homedir()}/.dotfiles/manifest`

export default class Install extends Command {
  static description = 'Install a manifest (set of packages).'

  static examples = [
    '$ wk manifest:install work',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // for testing
    manifestsDir: flags.string(),
  }

  static args = [
    {
      name: 'manifest',
    },
  ]

  async run() {
    const {args, flags} = this.parse(Install)

    const manifestsDir = flags.manifestsDir || DEFAULT_MANIFESTS_DIR
    // assume packages are always in sibling dir
    const packagesDir = manifestsDir + '/../pkg'

    const output = execSync(`cat ${manifestsDir}/${args.manifest}`).toString()

    for (const p of output.trim().split('\n')) {
      if (!p) {
        this.log('Invalid empty manifest line.')
      }
      try {
        const output = install(p, packagesDir)
        this.log(output)
      } catch (error) {
        this.error(error)
      }
    }
  }
}
