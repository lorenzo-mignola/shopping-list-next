'use client';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { format } from 'date-fns';
import { trpc } from '../../../../client/ClientProvider';
import type { FullList } from '../../../../types/FullList';

interface ItemProps {
  item: FullList['items'][number];
}

const Item = ({ item }: ItemProps) => {
  const setDoneMutation = trpc.setItemDone.useMutation();
  return (
    <Grid item sm={12} md={6} lg={2}>
      <Card>
        <CardContent>
          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
            {item.item.name}
          </Typography>
          <Typography variant='subtitle1'>
            Inserted at:{' '}
            <b>{format(new Date(item.insertedAt), 'dd.MM.yyy HH:mm')}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => setDoneMutation.mutate(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
