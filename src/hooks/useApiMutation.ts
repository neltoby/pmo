import { useRecoilValue } from 'recoil'
import { useMutation } from 'react-query'

import { callApi } from '../utils/httpClient'
import { pmoAuthAtom } from '@/auth/state/atoms'
import { ApiRequest } from '@/model/api'

const useApiMutation = <TData>(key: string, service: ApiRequest, options: {} = {}) => {
  const { pmoUrl, token } = useRecoilValue(pmoAuthAtom)

  const apiContext = {
    baseUrl: pmoUrl,
  }

  const { ...mutationProps } = useMutation<TData>(
    async (payload: any) => {
      if (payload) {
        service.body = payload
      }
      const { baseUrl } = apiContext
      return callApi(token, baseUrl, service)
    },
    {
      mutationKey: key,
      ...options,
    },
  )

  return {
    ...mutationProps,
    apiContext,
  }
}

export default useApiMutation
