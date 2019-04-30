import React, { useContext } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { AuthUserContext } from './AuthUser'

const AuthorizedRoute = ({ component, history, ...rest }) => {
  // debugger
  const { logged } = useContext(AuthUserContext)
  if (logged === null) return <div>Loading...</div>
  if (logged !== true) {
    // history.push('/counter')
    // return null
  }
  console.log({ ...rest })
  return <Route component={component} {...rest} />
}

export default withRouter(AuthorizedRoute)
