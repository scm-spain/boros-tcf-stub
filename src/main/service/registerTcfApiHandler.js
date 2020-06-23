import {TcfApiHandler} from './handler/TcfApiHandler'

export const registerTcfApiHandler = ({onReady}) => {
  const tcfApiHandler = new TcfApiHandler({onReady})
  window.__tcfapi = (command, version, callback, parameter) =>
    tcfApiHandler.handle({command, version, callback, parameter})
}
