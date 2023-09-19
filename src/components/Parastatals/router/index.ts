export const PARASTATAL_BASE_URL = 'parastatals'


export const getParastatalsListUrl = (theme = true) =>  theme ? `${PARASTATAL_BASE_URL}?themes=${true}` : `${PARASTATAL_BASE_URL}?themes=${false}`;