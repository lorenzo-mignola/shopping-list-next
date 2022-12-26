'use client';

import { trpc } from '../../../client/ClientProvider';

function Page() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  return <div>{hello.data?.greeting}</div>;
}

export default Page;
