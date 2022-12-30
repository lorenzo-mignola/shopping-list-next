'use client';

import AddIcon from '@mui/icons-material/Add';
import {
  Autocomplete,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField
} from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { trpc } from '../../../../client/ClientProvider';
import theme from '../../../../client/theme';

const getListId = (pathname: string) => Number(pathname.split('/').at(-1));

const AddItem = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newItemValue, setNewItemValue] = useState('');

  const pathname = usePathname();
  const { data: itemsOptions = [], isLoading } =
    trpc.searchItem.useQuery(searchTerm);
  const addMutation = trpc.addItemInList.useMutation();

  const handleClose = () => {
    setOpen(false);
    setSearchTerm('');
    setNewItemValue('');
  };

  const addItem = async () => {
    const itemOption = itemsOptions.find(item => item.name === newItemValue);
    const id = itemOption?.id || null;
    const name = newItemValue;
    const listId = getListId(pathname || '');
    if (Number.isNaN(listId)) {
      throw new Error('Missing listId');
    }
    await addMutation.mutateAsync({ name, id, listId });
    handleClose();
  };

  return (
    <>
      <Fab
        color='primary'
        sx={{
          bottom: theme.spacing(4),
          right: theme.spacing(4),
          position: 'absolute'
        }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Create new list</DialogTitle>
        <DialogContent>
          <Autocomplete
            sx={{ width: 300 }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={option =>
              typeof option === 'string' ? option : option.name
            }
            options={itemsOptions}
            freeSolo
            onInputChange={(_, value) => setNewItemValue(value)}
            renderInput={params => (
              <TextField
                {...params}
                label='Search item'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {isLoading ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  )
                }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addItem} color='primary' disabled={!newItemValue}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddItem;
