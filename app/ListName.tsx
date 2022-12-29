'use client';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import type { List as ListType } from '@prisma/client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

interface ListNameProps {
  lists: ListType[];
}

const getCreatedAt = (date: Date) =>
  `Created at: ${format(date, 'dd.MM.yyyy HH:mm')}`;

const ListName = ({ lists }: ListNameProps) => {
  const router = useRouter();

  const openList = (id: number) => router.push(`/list/${id}`);

  return (
    <List dense>
      {lists.map(list => (
        <ListItem key={list.id} onClick={() => openList(list.id)}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>
            <ListItemText
              primary={list.name}
              secondary={getCreatedAt(list.createdAt)}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListName;
