import { useGlobalsTokenData } from '../StoreProvider';
import React, { useEffect } from 'react';
import { JsonViewer } from 'juno-ui-components';

function Nebula() {
  const tokenData = useGlobalsTokenData();
  const AuthToken = tokenData.token.value;
  const ProjectId = tokenData.token.project.id; // Project ID
  const nebulaEndpoint = tokenData.token.catalog
    .find((e) => e.type === 'nebula') // Find the first element with type 'nebula'
    ?.endpoints.find((ep) => ep.interface === 'internal')?.url; // From that element, find the first endpoint with interface 'internal' // Get the url of the found endpoint

  useEffect(() => {
    if (nebulaEndpoint) {
      fetch(`${nebulaEndpoint}/v1/aws/${ProjectId}`, {
        headers: {
          'X-Auth-Token': `${AuthToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });


  return (
    <div>
      Nebula Component <br />
      {tokenData && <JsonViewer data={tokenData} />}
    </div>
  );
}

export default Nebula;
