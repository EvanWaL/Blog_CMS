import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthorizedPrimaryHeader from '../ui/AuthorizedPrimaryHeader'
import CounterLayout from '../containers/Counter'
// import ProjectSubLayout from './ProjectSubLayout'

const AuthorizedLayout = ({ match }) => (
  <div className="app authorized-layout">
    {/* <AuthorizedPrimaryHeader /> */}
    {/* <Switch> */}
    <Route path={match.url} exact component={CounterLayout} />
    {/* </Switch> */}
  </div>
)

export default AuthorizedLayout
