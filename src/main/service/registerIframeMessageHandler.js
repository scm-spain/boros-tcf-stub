import {PostMessageHandler} from './handler/PostMessageHandler'

const postMessageHandler = new PostMessageHandler()
export const registerIframeMessageHandler = () => {
  window.addEventListener(
    'message',
    event => postMessageHandler.handle(event),
    false
  )
}
