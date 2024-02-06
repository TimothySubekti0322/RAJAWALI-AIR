import React from 'react'

interface LoginProps {
    user: "admin" | "client"
    }

export const Login: React.FC<LoginProps> = ({user}) => {
    console.log(user)
  return (
    <div>Login</div>
  )
}

export default Login