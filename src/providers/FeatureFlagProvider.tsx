import { FlagProvider } from '@unleash/proxy-client-react'
import { PropsWithChildren } from 'react'

// TODO: move to config file
const config = {
  url: import.meta.env.VITE_UNLEASH_URL,
  clientKey: import.meta.env.VITE_UNLEASH_CLIENT_KEY,
  refreshInterval: import.meta.env.VITE_UNLEASH_REFRESH_INTERVAL,
  appName: import.meta.env.VITE_UNLEASH_APP_NAME,
}

const FeatureFlagProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <FlagProvider config={config}>{children}</FlagProvider>
}
export default FeatureFlagProvider
