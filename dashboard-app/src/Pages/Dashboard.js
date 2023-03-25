import React from 'react';
import {Typography, Box, useTheme} from "@mui/material";
import { tokens } from '../theme';
import PieChart from '../Components/PieChart';

import { ThemeProvider } from '@mui/material/styles';
//import { display } from '@mui/system';
// (pending) import data from database

// import ReactDOM from 'react-dom';
// import TopBar from '../Components/TopBar';
//import './Pages/Dashboard.css';

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div display="flex" margin-left="30%" maxHeight="100vh" paddingLeft="240px">
            {/* Header */}
            <Box m="20px" justifyContent={"space-between"} alignItems="center" textAlign={"center"} paddingTop={"75px"}>
                <Box mb="30px">
                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}> My Dashboard </Typography>
                    {/* <Typography variant="h5" color={colors.greenAccent[400]}> Welcome to your Dashboard </Typography> */}
                </Box>
            </Box>

            {/* Pie Chart + Welcome Mesage */}
            <Box m="20px">
                <h3> Good Evening </h3>
                <PieChart />
            </Box>
            
            {/* Categories */}

            {/* Statistics */}
            {/* <Box width="100%" m="0 30px">
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4" fontWeight="bold" sx={{color:colors.grey[100]}}>Numbers</Typography>
                    <Typography variant="h5" fontWeight="italic" sx={{color:colors.greenAccent[500]}}>Average Numbers Title</Typography>
                </Box>
            </Box> */}
            <ThemeProvider theme={theme}>
                <Box sx={{ bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300}} >
                    <Box sx={{ color: 'text.secondary'}}>Average Reading Time</Box>
                    <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> 30 minutes </Box>
                    {/* <Box sx={{ color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}} > +18.77% </Box>
                    <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}> vs. last week </Box> */}
                </Box>
                <br></br>
                <Box sx={{ bgcolor: 'background.paper', boxShadow: 1, borderRadius: 2, p: 2, minWidth: 300,}} >
                    <Box sx={{ color: 'text.secondary'}}>Total Reading Time</Box>
                    <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> 110 minutes </Box>
                    {/* <Box sx={{ color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}} > +18.77% </Box> */}
                    <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}> within last 7 days </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}
