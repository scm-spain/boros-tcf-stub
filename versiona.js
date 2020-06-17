const versiona = require('versiona')

versiona({
  repoOrg: 'scm-spain',
  repoName: 'boros-tcf-stub',
  publish: false,
  masterCommand: env => `DEPLOY_ENV=${env} npm run deploy`
})
