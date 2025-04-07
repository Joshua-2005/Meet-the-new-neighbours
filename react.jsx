//App.jsx File
import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello Joshua</h1>
      <h2>Start doing work</h2>
      <>
    </div>
  );
}
export function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}


// Log to console
console.log('Hello console')
//index.jsx 
  import React from 'react';
import ReactDOM from 'react-dom/client';

import { App,Welcome } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(
  <>
  <App/>
  <Welcome name="Joshua"/>
  </>
)
