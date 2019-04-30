import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthorizedPrimaryHeader from '../ui/AuthorizedPrimaryHeader'
import CounterLayout from '../containers/Counter'
import HomeLayout from '../containers/Home'

const AuthorizedLayout = ({ match }) => {
  debugger
  return (
    <div className="app authorized-layout">
      {/* <AuthorizedPrimaryHeader /> */}
      <Switch>
        <Route path={match.url} exact component={HomeLayout} />
        <Route path="/counter" component={() => <div>id</div>} />
      </Switch>
    </div>
  )
}

export default AuthorizedLayout
