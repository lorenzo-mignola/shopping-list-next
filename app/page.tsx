'use client';

import { trpc } from '../client/ClientProvider';
import AddList from './AddList';
import ListName from './ListName';

export default function Home() {
  const { data: list = [] } = trpc.getAllList.useQuery();

  return (
    <main>
      <ListName lists={list} />
      <AddList />
    </main>
  );
}
