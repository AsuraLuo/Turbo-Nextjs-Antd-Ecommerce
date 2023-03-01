module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ecloud`
  extends: ['ecloud'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
