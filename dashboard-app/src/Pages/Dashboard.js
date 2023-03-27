import React from 'react';
import {Typography, Box, useTheme, Button} from "@mui/material";
import { tokens } from '../theme';
import PieChart from '../Components/PieChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Info from '@mui/icons-material/Info';


// import { ThemeProvider } from '@mui/material/styles';
//import { display } from '@mui/system';
// (pending) import data from database

// import ReactDOM from 'react-dom';
// import TopBar from '../Components/TopBar';
//import './Pages/Dashboard.css';

export default function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div>
            {/* Header */}
            <Box m="20px" justifyContent={"space-between"} alignItems="center" textAlign={"left"} paddingTop={"75px"}>
                <Box mb="20px" >
                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}> My Dashboard </Typography>
                    {/* <Typography variant="h5" color={colors.greenAccent[400]}> Welcome to your Dashboard </Typography> */}
                </Box>
            </Box>

            {/* Pie Chart + Welcome Mesage */}
            <Box m="20px" width={"97%"} backgroundColor={colors.primary[400]} display="flex">
                <Box width={"50%"}>
                    <PieChart/>
                </Box>
                <Box paddingTop={"80px"}>
                    <Typography marginBottom={"10px"} variant={"h1"} fontWeight="bold"> Good Evening </Typography>
                    <Typography marginBottom={"20px"} variant={"h2"}> You have 30 unread emails </Typography>
                    <Button variant='contained' size='large' color="primary">Start Review</Button>
                </Box>
            </Box>

            {/* Categories + Stats*/}
            <Box m="20px" display="flex">

                {/* Category 1 */}
                <Box width={"27%"} paddingTop={"10px"} paddingRight={"50px"}>
                    <Box display={"flex"} borderBottom={"3px solid #B80F0F"} paddingBottom={"10px"}>
                        <Info/>
                        <Typography variant='h4'justifyContent="space-between"alignItems="center" paddingLeft={"10px"}> Urgent </Typography>
                    </Box>
                </Box>

                {/* Category 2 */}
                <Box width={"27%"} paddingTop={"10px"} paddingRight={"50px"}>
                    <Box display={"flex"} borderBottom={"3px solid #FFA84A"} paddingBottom={"10px"}>
                        <PriorityHighIcon/>
                        <Typography variant='h4'justifyContent="space-between"alignItems="center" paddingLeft={"10px"}> Important </Typography>
                    </Box>  
                </Box>

                {/* Category 3 */}
                <Box width={"27%"} paddingTop={"10px"}  paddingRight={"50px"}>
                    <Box display={"flex"} borderBottom={"3px solid #96C31E"} paddingBottom={"10px"}>
                        <LocalOfferIcon/>
                        <Typography variant='h4'justifyContent="space-between"alignItems="center" paddingLeft={"10px"}> Standard </Typography>
                    </Box>
                    
                </Box>

                {/* Statistics */}
                <Box width={"18.5%"} paddingTop={"10px"}>
                    <Box display={"flex"} borderBottom={"3px solid #4F81E5"} paddingBottom={"10px"}>
                        <TrendingUpIcon/>
                        <Typography variant='h4'justifyContent="space-between"alignItems="center" paddingLeft={"10px"}> My Statistics </Typography>
                    </Box>
                    <br/>
                    <Box paddingBottom="20px" sx={{ bgcolor: colors.primary[400], boxShadow: 1, borderRadius: 2, p: 2, width: 300}} >
                        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> 30 mins </Box>
                        <Box sx={{ color: 'text.secondary'}}>Average Reading Time</Box>
                        {/* <Box sx={{ color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}} > +18.77% </Box> */}
                        {/* <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}> in a day </Box> */}
                    </Box>
                    <br/>
                    <Box sx={{ bgcolor: colors.primary[400], boxShadow: 1, borderRadius: 2, p: 2, width: 300}} >
                        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}> 110 mins </Box>
                        <Box sx={{ color: 'text.secondary'}}>Total Reading Time</Box>
                        {/* <Box sx={{ color: 'success.dark', display: 'inline', fontWeight: 'bold', mx: 0.5, fontSize: 14,}} > +18.77% </Box> */}
                        {/* <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}> within last 7 days </Box> */}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}






            /* <Box width="100%" m="0 30px">
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4" fontWeight="bold" sx={{color:colors.grey[100]}}>Numbers</Typography>
                    <Typography variant="h5" fontWeight="italic" sx={{color:colors.greenAccent[500]}}>Average Numbers Title</Typography>
                </Box>
            </Box> */