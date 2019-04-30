import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../containers/Login'

console routes = {
  login: Login,
  404:()=>(<div>404</div>)
}

const UnauthorizedLayout = ({ match }) => (
  <div className="app unauthorized-layout">
    <Switch>
      <Route path={match.url} component={Login} />
    </Switch>
  </div>
)

export default UnauthorizedLayout
