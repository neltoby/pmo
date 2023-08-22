import { useRecoilValue } from 'recoil'
import { useMutation } from 'react-query'

import { callApi } from '../utils/httpClient'
import { kiaGoAuthAtom } from '@/auth/state/atoms'
import { ApiRequest } from '@/model/api'

const useApiMutation = <TData>(key: string, service: ApiRequest, options: {} = {}) => {
  const { kiaGoUrl, token } = useRecoilValue(kiaGoAuthAtom)

  const apiContext = {
    baseUrl: kiaGoUrl,
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
