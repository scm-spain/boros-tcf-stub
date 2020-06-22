import {TcfApiHandler} from './handler/TcfApiHandler'

const tcfApiHandler = new TcfApiHandler()
export const registerTcfApiHandler = () => {
  window.__tcfapi = (command, version, callback, parameter) =>
    tcfApiHandler.handle({command, version, callback, parameter})
}
