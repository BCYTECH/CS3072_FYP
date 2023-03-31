import React from 'react';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline , ThemeProvider, Box} from '@mui/material';

import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import Dashboard from './Pages/Dashboard';
import Inbox from './Pages/Inbox';

import { tokens } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [isSideBar, setIsSideBar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <TopBar setIsSideBar={setIsSideBar} />
          <Box
            style={{ display: "flex" }}
            sx={{
                "& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`,},
                "& .pro-icon-wrapper": {backgroundColor: "transparent !important",},
                "& .pro-inner-item": {padding: "5px 35px 5px 20px !important",},
                "& .pro-inner-item:hover": {color: "#868dfb !important",},
                "& .pro-menu-item.active": {color: "#6870fa !important",},
            }}
            // display="flex"
            // position="static"
          >
            <SideBar isSideBar={isSideBar} />
            <main className="content" style={{
              minWidth: 0,
            }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inbox" element={<Inbox />} />
              </Routes>
            </main>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;