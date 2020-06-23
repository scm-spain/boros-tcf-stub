const versiona = require('versiona')

versiona({
  repoOrg: 'scm-spain',
  repoName: 'boros-tcf-stub',
  masterCommand: env => `DEPLOY_ENV=${env} npm run deploy`
})
