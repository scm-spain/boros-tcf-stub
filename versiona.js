const versiona = require('versiona')

const isMaster = () =>
  process.env.TRAVIS_BRANCH === 'master' &&
  process.env.TRAVIS_PULL_REQUEST === 'false'

const publishCommand = () => {
  if (process.env.TRAVIS_TAG.includes('-beta')) return false
  const environment = isMaster() ? 'dev' : 'pro'
  return `DEPLOY_ENV=${environment} npm run deploy`
}

versiona({
  repoOrg: 'scm-spain',
  repoName: 'boros-tcf-stub',
  publish: publishCommand()
})
