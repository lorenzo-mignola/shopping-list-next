import { Button } from '@mui/material';
import { trpcServer } from '../../../utils/trpcServer';

const getHello = async () => {
  const hello = await trpcServer.hello({ text: 'server' });
  return hello;
};

const getList = (id: number) => trpcServer.getListById(id);

async function Page() {
  const hello = await getHello();
  const list = await getList(1);
  return (
    <>
      <Button variant='contained'>TEST</Button>
      <div>{hello.greeting}</div>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </>
  );
}

export default Page;
