import React, {createElement as e} from 'react';

function App() {
  // return (
  //   <h1>some text</h1>
  // )
  return e('div', {className: 'container'}, [
    e('h1', {className: 'font-bode'}, 'some text'),
    e('button', {className: ''}, 'button')
  ])
}

export default App;
