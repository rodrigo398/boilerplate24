import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@modules/home'
import Users from '@modules/users'

export const App = () => {
  return (
    <Router>
      <main id="main-pass">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
