import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('pkg:list', () => {
  test
  .stdout()
  .command(['pkg:list', '--packagesDir', cwd() + '/test/pkg'])
  .it('runs pkg:list finds all', ctx => {
    expect(ctx.stdout).to.contain('docker\nshell\nzsh')
  })
})
