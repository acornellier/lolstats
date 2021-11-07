import { ReactNode } from 'react'
import { Head } from 'blitz'

type LayoutProps = {
  title?: string
  children: ReactNode
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'lolstats'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-blueGray-800 text-white text-opacity-90">
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  )
}
