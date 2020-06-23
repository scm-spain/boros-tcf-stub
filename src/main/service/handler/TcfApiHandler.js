/* eslint-disable standard/no-callback-literal */
export class TcfApiHandler {
  constructor({onReady}) {
    this._queue = []
    this._onReady = onReady
  }

  handle({command, version, callback, parameter}) {
    switch (command) {
      case PING_COMMAND: {
        if (typeof callback === 'function') {
          callback({
            gdprApplies: true,
            cmpLoaded: false,
            cmpStatus: 'stub'
          })
        }
        break
      }
      case PENDING_COMMAND: {
        return this._queue
      }
      case ON_READY_COMMAND: {
        return this._onReady
      }
      default: {
        this._queue.push(() =>
          window.__tcfapi(command, version, callback, parameter)
        )
        break
      }
    }
  }
}

const PING_COMMAND = 'ping'
const PENDING_COMMAND = 'pending'
const ON_READY_COMMAND = 'onReady'
