const baseOpenEditor = require('open-editor')
import {srcRootDir} from './definitions'

function openEditor() {
  baseOpenEditor([
    srcRootDir,
  ], {editor: 'vscode'})
}

export default {
  openEditor,
}
