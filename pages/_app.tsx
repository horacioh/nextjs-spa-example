import React from "react"
import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import App from "../components/root"

const NoSSR: React.FC = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

const Dynamic = dynamic(() => Promise.resolve(NoSSR), { ssr: false })

export default function Root({ pageProps }: AppProps & { Component: any }) {
  return (
    <Dynamic>
      <App {...pageProps} />
    </Dynamic>
  )
}
