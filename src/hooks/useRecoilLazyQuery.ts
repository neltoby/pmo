import { QueryFunction } from 'react-query'
import { RecoilState, useSetRecoilState } from 'recoil'

import useLazyQuery from '@commons/hooks/useLazyQuery'
import useOptimizedEffect from '@commons/hooks/useOptimizedEffect'

const useRecoilLazyQuery = <T>(queryKey: string, queryFunction: QueryFunction<T>, recoilState: RecoilState<T>) => {
  const queryResult = useLazyQuery(queryKey, queryFunction)
  const setState = useSetRecoilState<T>(recoilState)

  const { data, isFetched } = queryResult

  //TODO: Handle fetching & error cases
  useOptimizedEffect(() => {
    if (isFetched) {
      setState(data)
    }
  }, [isFetched])

  return { ...queryResult }
}

export default useRecoilLazyQuery
