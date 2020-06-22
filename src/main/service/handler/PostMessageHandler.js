export class PostMessageHandler {
  handle(event = {}) {
    const payload = this._toPayload(event.data)
    payload &&
      window.__tcfapi(
        payload.command,
        payload.version,
        (retValue, success) => {
          const returnMsg = {
            __tcfapiReturn: {
              returnValue: retValue,
              success: success,
              callId: payload.callId
            }
          }
          if (typeof event.data === 'string') {
            event.source.postMessage(JSON.stringify(returnMsg), '*')
          } else {
            event.source.postMessage(returnMsg, '*')
          }
        },
        payload.parameter
      )
  }

  _toPayload(message = {}) {
    try {
      const json = typeof message === 'string' ? JSON.parse(message) : message
      return json?.__tcfapiCall
    } catch (error) {
      return undefined
    }
  }
}
