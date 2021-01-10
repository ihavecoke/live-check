interface Options {
  checkTimes?: number
  checkInterval?: number
}

const defaultCheckTimes = 500
const defaultCheckInterval = 50

export default function (
  condition: () => boolean,
  options: Options = {} as Options
) {
  return new Promise<Boolean>((resolve, reject) => {
    const checkTimes = options.checkTimes || defaultCheckTimes
    const checkInterval = options.checkInterval || defaultCheckInterval
    let currentCheckCount = 0
    let intervalId: any = 0

    intervalId = setInterval(() => {
      currentCheckCount += 1
      if (checkTimes <= currentCheckCount) {
        clearInterval(intervalId)
        reject(false)
      }
      if (condition()) {
        clearInterval(intervalId)
        resolve(true)
      }
    }, checkInterval)
  })
}
