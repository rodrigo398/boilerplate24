import { PropsWithChildren } from 'react'

import FeatureFlagProvider from '@src/providers/FeatureFlagProvider'
import ThemeProvider from '@src/providers/ThemeProvider'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <FeatureFlagProvider>{children}</FeatureFlagProvider>
    </ThemeProvider>
  )
}

export default Providers
