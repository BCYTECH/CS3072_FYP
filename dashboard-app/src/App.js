//import './App.css';
import React from 'react';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline , ThemeProvider} from '@mui/material';

import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import Dashboard from './Pages/Dashboard';
import Inbox from './Pages/Inbox';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [theme, colorMode] = useMode();
  const [isSideBar, setIsSideBar] = useState(false);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
        <SideBar isSideBar={isSideBar} />
          <main className="content">
          <TopBar setIsSideBar={setIsSideBar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;