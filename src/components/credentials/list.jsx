import {
  JsonViewer,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
} from 'juno-ui-components';
import credentialsMock from '../../mocks/Credentials.mock';
import React from 'react';
function CredentialsList() {
  return (
    <>
      <DataGrid columns={3}>
        <DataGridRow>
          <DataGridHeadCell>Access</DataGridHeadCell>
          <DataGridHeadCell>Secret</DataGridHeadCell>
          <DataGridHeadCell>Actions</DataGridHeadCell>
        </DataGridRow>
        {credentialsMock.credentials.length &&
          credentialsMock.credentials.map((credential) => {
            return (
              <DataGridRow key={credential.access}>
                <DataGridCell>{credential.access}</DataGridCell>
                <DataGridCell>{credential.secret}</DataGridCell>
                <DataGridCell>Actions</DataGridCell>
              </DataGridRow>
            );
          })}
      </DataGrid>
    </>
  );
}

export default CredentialsList;
