export const PMO_AUTH = 'pmoAuth'
export const DEFAULT_PMO_AUTH = {
  key: PMO_AUTH,
  default: {
    token: '',
    pmoUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:4500' : 'http://pmo-dev.us-east-1.elasticbeanstalk.com',
  },
}

export const USER_DETAILS = 'userDetails'
