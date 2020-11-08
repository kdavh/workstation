import {homedir} from 'os'
import * as path from 'path'

export const workspaceRootDir = path.join(homedir(), '.workspace-config')
