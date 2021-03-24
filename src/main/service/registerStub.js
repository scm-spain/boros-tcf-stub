import {registerTcfApiLocator} from './registerTcfApiLocator'
import {registerIframeMessageHandler} from './registerIframeMessageHandler'
import {registerTcfApiHandler} from './registerTcfApiHandler'

export const registerStub = ({onReady} = {}) => {
  if (typeof window === 'undefined') {
    return
  }
  if (window.__tcfapi) {
    console.warn('[BorosTcf] attempted to register the stub twice')
    return
  }
  if (!registerTcfApiLocator()) {
    return
  }
  registerIframeMessageHandler()
  registerTcfApiHandler({onReady})
}
