import {Command, flags} from '@oclif/command'
import editor from '../../editor'

export default class Edit extends Command {
  static description = 'Open workspace configs in your favorite editor'

  static examples = [
    '$ wk config edit',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
  }

  // static args = [{name: 'file'}]

  async run() {
    // const {args, flags} = this.parse(Edit)

    // const name = flags.name ?? 'world'
    // this.log('edit wip')
    editor.openEditor()
    // exec(`code -n "${workspace_dir}"`)
    // if (args.file) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
