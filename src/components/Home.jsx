import React from 'react';
import { useGlobalsTokenData } from './StoreProvider';
import { JsonViewer } from 'juno-ui-components';

function Home() {
  const tokenData = useGlobalsTokenData();

  return (
    <>
      <div>
        Home Component <br />
        {tokenData && <JsonViewer data={tokenData} />}
      </div>
    </>
  );
}

export default Home;
