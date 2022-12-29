'use client';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            '& a': {
              color: 'inherit',
              textDecoration: 'none'
            }
          }}
        >
          <Link href='/'>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Shopping list
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
