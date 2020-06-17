/* eslint-disable no-console */
'use strict'

const s3FolderUpload = require('s3-folder-upload')

if (!process.env.DEPLOY_ENV) {
  throw new Error('DEPLOY_ENV is required')
}

const deployEnv = process.env.DEPLOY_ENV.replace(/"/g, '')

const targetFile = `BorosTcfStub.${deployEnv}.js`

const bucket = 'c.dcdn.es/borostcf/stub'
const invalidationPath = `/borostcf/stub/${targetFile}`

const region = 'eu-west-1'
const cloudfrontDistribution = 'E1IADXXISJ5K7B'

const directoryName = 'deploy'

const awsAccessKey = process.env.AWS_ACCESS_KEY
const awsSecret = process.env.AWS_SECRET_KEY

const credentials = {
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecret,
  region: region,
  bucket: bucket
}

const invalidation = {
  awsDistributionId: cloudfrontDistribution,
  awsInvalidationPath: invalidationPath
}

const options = {
  useFoldersForFileTypes: false
}

const filesOptions = {
  [targetFile]: {
    CacheControl: 'public, max-age=3600'
  }
}

console.log('>>> Credentials', JSON.stringify(credentials))
s3FolderUpload(directoryName, credentials, options, invalidation, filesOptions)
