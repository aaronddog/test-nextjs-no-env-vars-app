import '@/styles/globals.css'
import DatadogInit from '@/components/datadog-init'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DatadogInit />
      <Component {...pageProps} />
    </>
  )
}