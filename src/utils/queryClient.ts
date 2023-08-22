import { QueryClient, QueryObserver } from 'react-query'

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {},
})

export const observeQuery = (queryKey: string) => {
  return new QueryObserver(queryClient, {
    queryKey,
  })
}

export default queryClient
