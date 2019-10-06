import React from 'react';

import Counter from 'Components/Counter';

const App = () => {
  return (
    <div id="id-main-wrapper">
      <h1>Hello</h1>
      <p>This is an example of a functional component.</p>
      <p>Click the buttons to interact with the class component below.</p>
      <Counter />
    </div>
  );
};

export default App;