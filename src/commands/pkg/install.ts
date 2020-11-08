import {Command, flags} from '@oclif/command'
import * as Git from 'nodegit'
import {packageOptions} from "../../package"
import {execFile} from 'child_process'

export default class Install extends Command {
  static description = 'Install a package.'

  static examples = [
    '$ wk install docker',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {
      name: 'package',
      options: packageOptions,
    }
  ]

  // https://github.com/nodegit/nodegit
  async run() {
    const {args, flags} = this.parse(Install)

    execFile(`src/packages/${args.package}/index.sh`, [], {cwd: `src/packages/${args.package}`}, (err, stdout, stderr) => {
      if (err) {
        //some err occurred
        console.error(err)
      } else {
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    })
  }
}
