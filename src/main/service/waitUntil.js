export const waitUntil = ({
  condition,
  timeout = 20000,
  interval = 5,
  timeoutMessage
}) =>
  new Promise((resolve, reject) => {
    const iid = setInterval(() => {
      if (condition()) {
        clearTimeout(tid)
        clearInterval(iid)
        resolve()
      }
    }, interval)
    const tid = setTimeout(() => {
      clearTimeout(tid)
      clearInterval(iid)
      reject(new Error(timeoutMessage))
    }, timeout)
  })
