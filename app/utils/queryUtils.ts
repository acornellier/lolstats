import { useQuery } from 'blitz'
import { useQuery as useReactQueryQuery } from 'react-query'
import type { UseQueryOptions } from 'react-query'
import type {
  AsyncFunc,
  FirstParam,
  PromiseReturnType,
} from 'next/dist/types/utils'

export type { PromiseReturnType }

export const useFetchQuery = <T>(url: string) =>
  useReactQueryQuery<T>(url, async () => (await fetch(url)).json(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    suspense: false,
  })

const onError = (error: unknown) => {
  const message = error instanceof Error ? error.message : `Unknown error`

  // eslint-disable-next-line no-console
  console.error(`query or mutation error: ${message}`)
}

export const useMyQuery = <T extends AsyncFunc, TResult = PromiseReturnType<T>>(
  queryFn: T,
  params: FirstParam<T>,
  options?: UseQueryOptions<TResult>,
) => {
  return useQuery(queryFn, params, {
    onError,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    ...options,
    suspense: false,
  })
}
