import React from 'react';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {
  return (
    <div>
      <h1>
        <Field />
        <Languages />
        <hr />
        <Translate />
      </h1>
    </div>
  );
}
