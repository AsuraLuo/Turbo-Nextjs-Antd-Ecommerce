const fs = require('fs')
const path = require('path')

const readDirectories = (url) =>
  fs
    .readdirSync(url, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map(({ name }) => name)

module.exports = {
  pattern: ':username/:type/:desc',
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
    scope: readDirectories(path.resolve(__dirname, './apps'))
  },
  prohibited: ['dev', 'test', 'build', 'master', 'release'],
  whiteList: ['main']
}
