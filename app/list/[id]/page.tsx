'use client';

import { Skeleton } from '@mui/material';
import { trpc } from '../../../client/ClientProvider';
import List from './List';

interface ListParams {
  params: {
    id: string;
  };
}

const ListPage = ({ params: { id } }: ListParams) => {
  const { data: list, isLoading } = trpc.getListById.useQuery(Number(id));

  if (isLoading) {
    return <Skeleton variant='rounded' height={60}></Skeleton>;
  }

  if (!list) {
    return <div>No list found</div>;
  }

  return <List list={list} />;
};

export default ListPage;
