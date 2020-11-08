const baseOpenEditor = require('open-editor')
import {workspaceRootDir} from './definitions'

function openEditor() {
  baseOpenEditor([
    workspaceRootDir,
  ], {editor: 'vscode'})
}

export default {
  openEditor,
}
