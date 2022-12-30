'use client';

import { Box, Grid, Typography } from '@mui/material';
import theme from '../../../client/theme';
import type { FullList } from '../../../types/FullList';
import Item from './(item)/Item';

interface ListProps {
  list: FullList;
}

const List = ({ list }: ListProps) => {
  return (
    <Box>
      <Typography
        variant='h3'
        sx={{ fontWeight: 'bold', my: theme.spacing(2), mx: theme.spacing(1) }}
      >
        {list.name}
      </Typography>
      <Grid container spacing={2}>
        {list.items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default List;
