import React from 'react';
import IdentitiesList from './list';
import { Link, Redirect, Route } from 'url-state-router';
import { Stack, Menu, MenuItem, Container } from 'juno-ui-components';
function Identities() {
  return (
    <div className="m-6">
      <Stack>
        <div className="w-64 ">
          <Menu>
            <MenuItem label="Item with a Link" icon="home">
              <Link to="/identities/list"> List </Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="w-full">
          <Container>
            <Route path="/identities">
              <Redirect to="/identities/list" />
            </Route>
            <Route path="/identities/list">
              <IdentitiesList />
            </Route>
          </Container>
        </div>
      </Stack>
    </div>
  );
}

export default Identities;
