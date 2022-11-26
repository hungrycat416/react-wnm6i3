import React from 'react';
import { createRoot } from 'react-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

const App = () => {
  return (
  <AppBar>
    <Toolbar>
      <IconButton>
        <MenuIcon/>
        </IconButton>
      <Typography>
        Marsupials
        </Typography>
    </Toolbar>
  </AppBar>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
