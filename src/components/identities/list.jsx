import React from 'react';
import {
  JsonViewer,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
} from 'juno-ui-components';
import ids from '../../mocks/Identities.mock';
function IdentitiesList() {
  return (
    <>
      <DataGrid columns={5}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Type</DataGridHeadCell>
          <DataGridHeadCell>SendingEnabled</DataGridHeadCell>
          <DataGridHeadCell>VerificationStatus</DataGridHeadCell>
          <DataGridHeadCell>Actions</DataGridHeadCell>
        </DataGridRow>
        {ids.length &&
          ids.map((id) => {
            return (
              <DataGridRow key={id.IdentityName}>
                <DataGridCell>{id.IdentityName}</DataGridCell>
                <DataGridCell>{id.IdentityType}</DataGridCell>
                <DataGridCell>{id.SendingEnabled}</DataGridCell>
                <DataGridCell>{id.VerificationStatus}</DataGridCell>
                <DataGridCell>Actions</DataGridCell>
              </DataGridRow>
            );
          })}
      </DataGrid>
    </>
  );
}

export default IdentitiesList;
