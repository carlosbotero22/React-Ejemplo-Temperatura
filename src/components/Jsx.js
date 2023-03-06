import React, { Fragment } from 'react';

export default function App() {
  const temperatura = 21;
  return (
    <Fragment>
      <h3>Hace calor o frio?</h3>
      <h4>{temperatura > 20 ? 'Calor' : 'Frio'}</h4>
    </Fragment>
  );
}
