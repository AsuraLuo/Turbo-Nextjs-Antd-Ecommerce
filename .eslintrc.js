module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ocloud`
  extends: ['ocloud'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
