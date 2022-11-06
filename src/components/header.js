import '../css/header.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';
import CodingTab from './codingTab';

function Header(){
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }                  
    return(
        <>
        <div className='header-body'>
            <div className='logo'>
                BlogSite.com
            </div>
            <div className='tabs'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Coding" {...a11yProps(0)} />
                        <Tab label="Entertainment" {...a11yProps(1)} />
                        <Tab label="Wildlife" {...a11yProps(2)} />
                        <Tab label="Photography" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <CodingTab/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Entertainment
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Wildlife
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Photography
                </TabPanel>
            </Box>
            </div>
        </div>
        </>
    );
}

export default Header;
