import React, { useLayoutEffect, useState } from 'react';
import { Container, Tabs, TabList, TabPanel, Tab } from 'juno-ui-components';
import { Router, useRouter, Route } from 'url-state-router';
import { REGION_MAP } from './lib/helpers/aws'; 
import Home from './components/Home';
import SVGAsComponent from './assets/juno-danger.svg';
import svgAsBackgroundImage from './assets/juno-danger.svg?url';
import mapBackgroundImage from './assets/map.svg?url';
import rocketImage from './assets/rocket.gif';

import Credentials from './components/credentials/index';
import Identities from './components/identities/index';
import SendEmail from './components/sendemail/index';
import Settings from './components/settings/Nebula';
import Templates from './components/templates';

const PATH_TAB_INDEX = {
  '/': 0,
  '/credentials': 1,
  '/identities': 2,
  '/sendemail': 3,
  '/templates': 4,
  '/settings': 5,
  '/providers': 6,
};

const AppContent = (props) => {
  console.log("REGION: ", REGION_MAP["na-us-1"]);
  
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { navigateTo, currentPath } = useRouter();
  useLayoutEffect(() => {
    const path = Object.keys(PATH_TAB_INDEX)
      .filter((key) => currentPath.startsWith(key))
      .pop();
    setCurrentTabIndex(PATH_TAB_INDEX[path]);
  }, [currentPath]);
  console.log("currentPath: " , currentPath);
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
          <Tab label="SendEmail" icon="edit">
            SendEmail
          </Tab>
          <Tab label="Templates">Templates</Tab>
          <Tab label="Settings">Settings</Tab>
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
          <SendEmail />
        </TabPanel>
        <TabPanel>
          <Templates />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default AppContent;
