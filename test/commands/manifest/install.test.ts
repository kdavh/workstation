import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('manifest:install', () => {
  test
  .stdout()
  .command(['manifest:install', '--manifestsDir', cwd() + '/test/manifest', 'test-manifest'])
  .it('runs manifest:install test-manifest', ctx => {
    expect(ctx.stdout).to.contain('test docker install check')
    expect(ctx.stdout).to.contain('test zsh install check')
  })
})
