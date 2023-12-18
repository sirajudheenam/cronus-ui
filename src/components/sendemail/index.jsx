import React from 'react';
import { Route, Link, useRouter, Redirect } from 'url-state-router';
import PlainEmail from './PlainEmail';
import TemplatedEmail from './TemplatedEmail';
import { Stack, Menu, MenuItem, Container } from 'juno-ui-components';
function SendEmail() {
  const { currentPath } = useRouter();
  console.log("currentPath" , currentPath);
  return (
    <div>
      <Stack>
        <div>
          <Menu>
            <MenuItem label="Plain Email" icon="home">
              <Link to="/sendemail/plain">Plain Mail </Link>
            </MenuItem>
            <MenuItem label="Templated Email">
              <Link to="/sendemail/templated">Templated Mail</Link>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Container>
            <Route path="/sendemail">
              <Redirect to="/sendemail/plain" />
            </Route>
            <Route path="/sendemail/templated">
              <TemplatedEmail />
            </Route>
            <Route path="/sendemail/plain">
              <PlainEmail />
            </Route>
          </Container>
        </div>
      </Stack>
    </div>
  );
}

export default SendEmail;
