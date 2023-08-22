'use client'
import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

type RootDependencyType = {
  children: ReactNode
}
const queryClient = new QueryClient();
export const RootDependency: FC<RootDependencyType> = ({children}) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  )
}