import i18n from 'localisation'
import { FlavorConfig } from 'foundation'
import React from 'react'
import ApplicationGraph from '../di/applicationgraph'
import LoginScreen from '../feature/login/login_screen'
import DashboardScreen from '../feature/dashboard/dashboard_screen'

const Screen = () => {
  const a = new ApplicationGraph()
  return (
    <>
      <LoginScreen />
      {/* <DashboardScreen/> */}
    </>
  )
}
export default Screen
