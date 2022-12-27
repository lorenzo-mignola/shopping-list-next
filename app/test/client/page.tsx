'use client';

import { Button } from '@mui/material';
import { trpc } from '../../../client/ClientProvider';

function Page() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  const list = trpc.getListById.useQuery(1);
  return (
    <>
      <Button variant='contained'>TEST</Button>
      <div>{hello.data?.greeting}</div>
      <pre>{JSON.stringify(list.data, null, 2)}</pre>
    </>
  );
}

export default Page;
