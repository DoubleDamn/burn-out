import React from 'react';
import { TestPlaceholder } from './components/tests/TestPlaceholder';
import { Header } from './components/header/Header';
import { MinuteTest } from './components/tests/MinuteTest';

const App = () => {
  return (
    <>
      <Header />
      <TestPlaceholder />
      <MinuteTest />
    </>
  );
};

export default App;
