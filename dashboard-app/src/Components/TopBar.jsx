import React from 'react';
import "./TopBar.css";
//import {NavLink} from "react-router-dom";
import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from "../theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  return (

    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.primary[400]} position="absolute" top={0} left={0} right={0}>

    {/* SEARCH BAR */}
    <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="10px" paddingLeft={"18%"}>
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>

    {/* ICONS */}
    <Box display="flex">
      <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
      </IconButton>
      <IconButton>
        <HelpOutlinedIcon />
      </IconButton>
      <IconButton>
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton>
        <PersonOutlinedIcon />
      </IconButton>
    </Box>
  </Box>
  );  
};

// function TopBar() {
//   return (
//     <div className="nav-bar">
//       /**Search Bar */
//       <input type="text" placeholder="Search" />

//     </div>

//     const {theme} = useTheme();


// );
// }

export default TopBar;