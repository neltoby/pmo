import { useQuery, QueryFunction } from 'react-query'

const useLazyQuery = <T>(queryKey: string, queryFunction: QueryFunction<T>) => {
  const queryResult = useQuery<T>(queryKey, queryFunction, {
    enabled: false,
    refetchOnWindowFocus: false,
  })
  const { refetch } = queryResult

  return {
    ...queryResult,
    fetch: refetch,
  }
}

export default useLazyQuery
