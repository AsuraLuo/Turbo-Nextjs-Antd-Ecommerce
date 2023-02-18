import { Outlet } from 'react-router-dom'

import AuthRoute from '@components/AuthRoute'

const Home = () => {
  return (
    <AuthRoute>
      <Outlet />
    </AuthRoute>
  )
}

export default Home
