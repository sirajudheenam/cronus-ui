import React from 'react';
import { Route, Link, useRouter, Redirect } from 'url-state-router';
import PlainEmail from './PlainEmail';
import TemplatedEmail from './TemplatedEmail';
import { Stack, Menu, MenuItem, Container } from 'juno-ui-components';
function Email() {
  const { currentPath } = useRouter();
  console.log(currentPath);
  return (
    <div>
      <Stack>
        <div>
          <Menu>
            <MenuItem label="Item with a Link" icon="home">
              <Link to="/email/plain">Plain Mail </Link>
            </MenuItem>
            <MenuItem label="Item with a Link">
              <Link to="/email/templated">Templated Mail</Link>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Container>
            <Route path="/email">
              <Redirect to="/email/templated" />
            </Route>

            <Route path="/email/templated">
              <TemplatedEmail />
            </Route>
            <Route path="/email/plain">
              <PlainEmail />
            </Route>
          </Container>
        </div>
      </Stack>
    </div>
  );
}

export default Email;
