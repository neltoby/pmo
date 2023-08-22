import { useRecoilValue } from 'recoil'
import { useQuery, useQueryClient } from 'react-query'

import HttpClient from '../utils/httpClient'
import { kiaGoAuthAtom } from '@/auth/state/atoms'
import useLazyQuery from '@/hooks/useLazyQuery'
import { ApiRequest } from '@/model/api'
import { callApi } from '@/utils/httpClient'

const useApiQuery = <TRes>(key: any, service: ApiRequest, lazy: boolean = true, options: {} = {}) => {
  const { kiaGoUrl, token } = useRecoilValue(kiaGoAuthAtom)
  const queryClient = useQueryClient()
  console.log(kiaGoUrl, useRecoilValue(kiaGoAuthAtom), 'line 13')
  const apiContext = {
    client: HttpClient,
    baseUrl: kiaGoUrl,
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
