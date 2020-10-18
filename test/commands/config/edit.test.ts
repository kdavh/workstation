import {expect, test} from '@oclif/test'

describe('config:edit', () => {
  test
  .stdout()
  .command(['config:edit'])
  .it('runs config:edit', ctx => {
    expect(ctx.stdout).to.contain('edit wip')
  })
})
