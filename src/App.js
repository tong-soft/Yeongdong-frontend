import YoungDongRouter from './router';
import run from './init/start';
import { React, useEffect, useState } from 'react';
import 'antd/dist/reset.css';

function App() {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    run().then(() => {
      setIsInit(true);
    });
  }, []);

  return isInit ? (
    <>
      <YoungDongRouter />
    </>
  ) : null;
}

export default App;
