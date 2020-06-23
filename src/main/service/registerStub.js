import {registerTcfApiLocator} from './registerTcfApiLocator'
import {registerIframeMessageHandler} from './registerIframeMessageHandler'
import {registerTcfApiHandler} from './registerTcfApiHandler'

export const registerStub = () => {
  if (typeof window === 'undefined') {
    return
  }
  if (!registerTcfApiLocator()) {
    return
  }
  registerIframeMessageHandler()
  registerTcfApiHandler()
}
