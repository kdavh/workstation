import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('pkg:search', () => {
  test
  .stdout()
  .command(['pkg:search', '--packagesDir', cwd() + '/test/packages'])
  .it('runs pkg:search finds all', ctx => {
    expect(ctx.stdout).to.contain('docker\nshell\nzsh')
  })
})
