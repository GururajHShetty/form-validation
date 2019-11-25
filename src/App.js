import React from 'react';
import Form from './Form'

function App() {
  return (
    <div className="container">
      <h2 className="col-md-4 offset-md-4">Dynamic Forms</h2><hr/>
      <div className="row">
        <div className="col-md-4 offset-md-4" >
          <Form />
        </div>
      </div>

    </div>
  );
}

export default App;
