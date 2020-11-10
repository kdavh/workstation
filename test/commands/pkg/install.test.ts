import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('pkg:install', () => {
  test
  .stdout()
  .command(['pkg:install', '--packagesDir', cwd() + '/test/packages', 'shell'])
  .it('runs pkg:install', ctx => {
    console.log(ctx.stdout)
    expect(ctx.stdout).to.contain('test shell install check')
  })
})
