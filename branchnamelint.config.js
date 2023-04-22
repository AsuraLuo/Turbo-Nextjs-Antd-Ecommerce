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
    desc: ['[a-z0-9-]+']
  },
  prohibited: ['main', 'development', 'test', 'build', 'master', 'release']
}
