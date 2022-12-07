import YoungDongRouter from './router';
import run from './init/start';
import { React, useEffect } from 'react';
import 'antd/dist/reset.css';

function App() {
  useEffect(() => {
    run();
  }, []);
  return (
    <>
      <YoungDongRouter />
    </>
  );
}

export default App;
