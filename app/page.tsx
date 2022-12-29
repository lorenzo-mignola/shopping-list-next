'use client';

import { trpc } from '../client/ClientProvider';
import ListName from './ListName';

export default function Home() {
  const { data: list = [] } = trpc.getAllList.useQuery();

  return (
    <main>
      <ListName lists={list} />
    </main>
  );
}
