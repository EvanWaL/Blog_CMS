import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../containers/Login'

const UnauthorizedLayout = ({ match }) => (
  <div className="app unauthorized-layout">
    <Switch>
      <Route path={match.url} component={Login} />
    </Switch>
  </div>
)

export default UnauthorizedLayout
