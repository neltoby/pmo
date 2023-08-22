const moment = require('moment')

export const hasExpired = (expiredAt: number) => {
  return moment(expiredAt * 1000).isBefore(moment.now())
}
