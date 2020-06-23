import jsdom from 'jsdom-global'
import {expect} from 'chai'
import registerStub from '../main'
import {waitUntil} from '../main/service/waitUntil'

describe('boros tcf stub', () => {
  beforeEach(() => {
    jsdom(null, {runScripts: 'dangerously'})
    window.postMessage = message => {
      const event = new window.MessageEvent('message', {
        data: message,
        source: window
      })
      window.dispatchEvent(event)
    }
  })

  it('should register the __tcfapiLocator iframe', () => {
    registerStub()
    return waitUntil({condition: () => !!window.frames.__tcfapiLocator})
  })

  it('should register the __tcfapi facade with pending command', () => {
    registerStub()
    let pending = window.__tcfapi('pending')
    expect(pending.length).to.equal(0)

    let pinged = false
    window.__tcfapi('ping', 2, () => (pinged = true))
    expect(pinged).to.be.true
    pending = window.__tcfapi('pending')
    expect(pending.length).to.equal(0)

    window.__tcfapi('anyOtherCommand', 2, () => null)
    pending = window.__tcfapi('pending')
    expect(pending.length).to.equal(1)
  })

  it('should accept iframe communications', () => {
    registerStub()

    const callId = Math.random() + ''
    const msg = {
      __tcfapiCall: {
        command: 'ping',
        version: '2',
        callId: callId
      }
    }

    const responsePromise = new Promise((resolve, reject) =>
      window.addEventListener('message', event => {
        try {
          const response = event.data.__tcfapiReturn
          if (response) {
            expect(response.callId).to.equal(callId)
            expect(response.returnValue.cmpStatus).to.equal('stub')
            resolve()
          }
        } catch (error) {
          reject(error)
        }
      })
    )

    window.postMessage(msg, '*')
    return responsePromise
  })
})
