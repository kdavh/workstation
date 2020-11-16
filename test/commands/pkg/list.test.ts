import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('manifest:list', () => {
  test
  .stdout()
  .command(['manifest:list', '--manifestsDir', cwd() + '/test/manifest'])
  .it('runs manifest:list finds all', ctx => {
    expect(ctx.stdout).to.contain('test-manifest\ntest-manifest2')
  })
})
