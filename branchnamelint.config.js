const fs = require('fs')

const readDirectories = (path) =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map(({ name }) => name)

module.exports = {
  pattern: ':username-:type-:desc',
  params: {
    username: ['caesar'],
    type: [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'chore',
      'revert',
      'build',
      'hotfix'
    ],
    desc: ['[a-z0-9-]+'],
    scope: readDirectories('./apps')
  },
  prohibited: ['development', 'main', 'test', 'build', 'master', 'release']
}
