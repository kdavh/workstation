import {expect, test} from '@oclif/test'
import {cwd} from 'process'

describe('pkg:install', () => {
  test
  .stdout()
  .command(['pkg:install', '--packagesDir', cwd() + '/test/pkg', 'shell'])
  .it('runs pkg:install shell', ctx => {
    expect(ctx.stdout).to.contain('test shell install check')
    expect(ctx.stdout).to.contain('test shell installed')
  })

  test
  .stdout()
  .command(['pkg:install', '--packagesDir', cwd() + '/test/pkg', 'docker'])
  .it('runs pkg:install docker, depends on shell', ctx => {
    expect(ctx.stdout).to.contain('test shell install check')
    expect(ctx.stdout).to.contain('test shell installed')
    expect(ctx.stdout).to.contain('test docker install check')
    expect(ctx.stdout).to.contain('test docker installed')
  })

  test
  .stdout()
  .command(['pkg:install', '--packagesDir', cwd() + '/test/pkg', 'zsh'])
  .it('runs pkg:install zsh, already installed', ctx => {
    expect(ctx.stdout).to.contain('test shell install check')
    expect(ctx.stdout).to.contain('test shell installed')
    expect(ctx.stdout).to.contain('test zsh install check')
    expect(ctx.stdout).to.not.contain('test zsh installed')
  })
})
