import useHome from '@src/hooks/home/useHome'

const Home = () => {
  const { isToggleEnabled } = useHome()

  return <div>Hello from Home Page - Test toggle is {isToggleEnabled}</div>
}

export default Home
