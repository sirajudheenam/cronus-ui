import React from 'react';
import IdentitiesList from './list';
import DomainIdentitiesIndex from './domain/index';
import EmailIdentitiesIndex from './email/index';
import { Link, Redirect, Route } from 'url-state-router';
import { Stack, Menu, MenuItem, Container } from 'juno-ui-components';
function Identities() {
  return (
    <div className="m-6">
      <p>Identity Verification</p>
      <Stack>
        <div className="w-64">
          <Menu>
            <MenuItem label="DomainIdentitiesList" icon="home">
              <Link to="/identities/domain">Domain</Link>
            </MenuItem>
            <MenuItem label="EmailIdentitiesList" icon="home">
              <Link to="/identities/email">Email</Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="w-full">
          <Container>
            <Route path="/identities">
              <Redirect to="/identities/domain/index" />
            </Route>
            <Route path="/identities/domain">
              <Redirect to="/identities/domain/index" />
            </Route>
            <Route path="/identities/email">
              <Redirect to="/identities/email/index" />
            </Route>
            <Route path="/identities/domain/index">
              <DomainIdentitiesIndex />
            </Route>
            <Route path="/identities/email/index">
              <EmailIdentitiesIndex />
            </Route>
          </Container>
        </div>
      </Stack>
    </div>
  );
}

export default Identities;
