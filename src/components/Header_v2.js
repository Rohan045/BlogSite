import '../css/header.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';
import CodingTab from './codingTab';
import CodeIcon from '@mui/icons-material/Code';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
                    <Tabs value={value} onChange={handleChange} xaria-label="basic tabs example">
                        <Tab sx={{minHeight:"47px"}} icon = {<CodeIcon/>} iconPosition="start" label="Coding" {...a11yProps(0)} />
                        <Tab sx={{minHeight:"47px"}} icon = {<MovieIcon/>} iconPosition = "start" label="Entertainment" {...a11yProps(1)}/>
                        <Tab sx={{minHeight:"47px"}} icon = {<PetsIcon/>} iconPosition = "start" label="Wildlife" {...a11yProps(2)} />
                        <Tab sx={{minHeight:"47px"}} icon = {<CameraAltIcon/>} iconPosition = "start"label="Photography" {...a11yProps(3)} />
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
