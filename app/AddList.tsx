'use client';

import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { trpc } from '../client/ClientProvider';

const AddList = () => {
  const [open, setOpen] = useState(false);
  const [listName, setListName] = useState('');
  const addMutation = trpc.addList.useMutation();

  const handleClose = () => {
    addMutation.mutate({ name: listName });
    setOpen(false);
    setListName('');
  };

  return (
    <div>
      <Button
        variant='outlined'
        startIcon={<AddIcon />}
        sx={{ width: '100%' }}
        onClick={() => setOpen(true)}
      >
        Add list
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Create new list</DialogTitle>
        <DialogContent>
          <TextField
            value={listName}
            label='List name'
            onChange={e => setListName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddList;
