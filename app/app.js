import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return (
      <div className="foobar">Test</div>
    );
  }
}


ReactDOM.render(
  <Test />,
  document.body
);
