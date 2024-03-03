import React from 'react'
import Login from './login'
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';
const App = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <Home />
      ):(  
      <Login />
      )}
    </div>
  )
}

export default App
