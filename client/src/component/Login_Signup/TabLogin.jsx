import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import Login from './Login';
import SignUp from './SignUp';


const TabLogin = () => {
    const [selectedTab, setSelectedTab] = useState('Login'); // Initialize with 'login' tab selected
  return (
    <Box mt={'10%'} >
       <Tabs 
        isFitted variant='enclosed' 
        defaultIndex={0}  
        onChange={(index) => setSelectedTab(index === 0 ? 'Login' : 'SignUp')} 
        w={'25%'} 
        margin={'auto'}
         borderWidth="0.5px"
         borderRadius={'10'}
        //borderColor="gray.200"
        //borderRadius="md" 
        >
      <TabList mb='1em'>
        <Tab as={'b'}p={3} fontSize={20} _selected={{ color: 'white', bg: '#FF0080' }}>Login</Tab>
        <Tab as={'b'}p={3} fontSize={20} _selected={{ color: 'white', bg: '#FF0080' }}>SignUp</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {selectedTab === 'Login' && (
            <Login/>
          )}
        </TabPanel>
        <TabPanel>
          {selectedTab === 'SignUp' && (
            <SignUp />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
    </Box>
  )
}

export default TabLogin
