/* eslint-disable standard/no-callback-literal */
export class TcfApiHandler {
  constructor() {
    this._queue = []
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
