import {waitUntil} from './waitUntil'

export const registerTcfApiLocator = () => {
  if (window.frames[TCF_API_LOCATOR]) {
    return false
  }
  waitUntil({condition: () => !!window.document.body}).then(() => {
    const iframe = window.document.createElement('iframe')
    iframe.style.cssText = 'display:none'
    iframe.name = TCF_API_LOCATOR
    window.document.body.appendChild(iframe)
  })
  return true
}

const TCF_API_LOCATOR = '__tcfapiLocator'
