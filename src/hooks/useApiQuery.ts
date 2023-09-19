import { useRecoilValue } from 'recoil'
import { useQuery, useQueryClient } from 'react-query'

import HttpClient from '../utils/httpClient'
import { pmoAuthAtom } from '@/auth/state/atoms'
import useLazyQuery from '@/hooks/useLazyQuery'
import { ApiRequest } from '@/model/api'
import { callApi } from '@/utils/httpClient'

const useApiQuery = <TRes>(key: any, service: ApiRequest, lazy: boolean = true, options: {} = {}) => {
  const { pmoUrl, token } = useRecoilValue(pmoAuthAtom)
  const queryClient = useQueryClient()

  const apiContext = {
    client: HttpClient,
    baseUrl: pmoUrl,
  }

  const queryFn = lazy ? useLazyQuery : useQuery
  //@ts-ignore
  const { ...queryProps } = queryFn<TRes>(key, async () => callApi(token, apiContext.baseUrl, service), {
    ...options,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  const invalidate = () => queryClient.invalidateQueries(key)

  return {
    ...queryProps,
    invalidate,
    apiContext,
  }
}

export default useApiQuery
