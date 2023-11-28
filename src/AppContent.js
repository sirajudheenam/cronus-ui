import React, { useLayoutEffect, useState } from 'react';
import { Container, Tabs, TabList, TabPanel, Tab } from 'juno-ui-components';
import { Router, useRouter, Route } from 'url-state-router';

import Home from './components/Home';
import SVGAsComponent from './assets/juno-danger.svg';
import svgAsBackgroundImage from './assets/juno-danger.svg?url';
import mapBackgroundImage from './assets/map.svg?url';
import rocketImage from './assets/rocket.gif';
import Credentials from './components/credentials/list';
import Identities from './components/identities/index';
import Email from './components/email/index';
const PATH_TAB_INDEX = {
  '/': 0,
  '/credentials': 1,
  '/identities': 2,
  '/email': 3,
  '/templates': 4,
};

const AppContent = (props) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { navigateTo, currentPath } = useRouter();
  useLayoutEffect(() => {
    const path = Object.keys(PATH_TAB_INDEX)
      .filter((key) => currentPath.startsWith(key))
      .pop();

    setCurrentTabIndex(PATH_TAB_INDEX[path]);
  }, [currentPath]);
  console.log(currentPath);
  return (
    <Container>
      <Tabs
        onSelect={(i) => {
          setCurrentTabIndex(i);
          navigateTo(Object.keys(PATH_TAB_INDEX)[i]);
        }}
        selectedIndex={currentTabIndex}
      >
        <TabList>
          <Tab label="Home" icon="home">
            Home
          </Tab>
          <Tab label="Credentials" icon="manageAccounts">
            Credentials
          </Tab>
          <Tab label="Identities" icon="edit">
            Identities
          </Tab>
          <Tab label="Email" icon="edit">
            Email
          </Tab>
          <Tab label="Templates">Templates</Tab>
        </TabList>
        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <Credentials />
        </TabPanel>
        <TabPanel>
          <Identities />
        </TabPanel>
        <TabPanel>
          <Email />
        </TabPanel>
        <TabPanel>Templates</TabPanel>
      </Tabs>
    </Container>
  );
};

export default AppContent;
