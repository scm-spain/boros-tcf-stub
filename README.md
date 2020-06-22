# Boros TCF Stub

[![Build status](https://travis-ci.org/scm-spain/boros-tcf-stub.svg?branch=master)](https://travis-ci.org/scm-spain/boros-tcf-stub)
[![codecov](https://codecov.io/gh/scm-spain/boros-tcf-stub/branch/master/graph/badge.svg)](https://codecov.io/gh/scm-spain/boros-tcf-stub)
[![GitHub license](https://img.shields.io/github/license/scm-spain/boros-tcf-stub.svg)](https://github.com/scm-spain/boros-tcf-stub/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@adv-ui/boros-tcf-stub.svg)](https://www.npmjs.com/package/@adv-ui/boros-tcf-stub)

## Table of Contents

* [About](#about)
* [Features](#features)
* [Usage](#usage)
* [License](#license)


## About

The Boros TCF stub implements the [standard TCF v2 stub](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#how-does-the-cmp-stub-api-work)

## Features

- Registers the `__tcfapiLocator` frame

- Stubs the `window.__tcfapi` responding immediately to the commands
  - `ping` [See PingReturn in the stubbed __tcfapi](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#requirements-for-the-cmp-stub-api-script)
  - `pending` returns the pending calls accumulated while calling `window.__tcfapi` commands

- Initializes the cross-framee communication via `postMessagee`, [see usage details](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#how-can-vendors-that-use-iframes-call-the-cmp-api-from-an-iframe)

## Usage

### As an importable module

> Use it this way if you're generating your own initialization

**Install**
```
npm i @adv-ui/boros-tcf-stub --save
```

**Register the Stub**
```
import registerStub from '../main'

// do your magic

registerStub()
```

> Remember that the Stub **must** be registered before any script depending on the TCF is loaded

### As a standalone script

**Add it to the `head` tag**

```
<script
  src="https://c.dcdn.es/borostcf/stub/BorosTcfStub.pro.js"
  async="false" 
/>
```

## License
Boros TCF Stub is [MIT licensed](./LICENSE).
