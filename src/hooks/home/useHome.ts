import { useFlag } from '@unleash/proxy-client-react'

// TODO: Implement your own logic here
const useHome = () => {
  const testToggle = useFlag('test')
  const isToggleEnabled = testToggle ? 'enabled' : 'disabled'

  return {
    isToggleEnabled,
  }
}

export default useHome
