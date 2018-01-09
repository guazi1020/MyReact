import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import counterPanel from './Count/counterPanel'

const render=(App)=>{
  ReactDOM.render(
    <AppContainer>
      <App id="MyButton1" />
    </AppContainer>,
      document.getElementById('app')
  )
}
render(counterPanel)



if (module.hot) {
  module.hot.accept('./Count/counterPanel', () => renderJSXOne(counterPanel));
  
}