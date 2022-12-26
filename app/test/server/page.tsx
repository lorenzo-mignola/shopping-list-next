import { trpcServer } from '../../../utils/trpcServer';

const getHello = async () => {
  const hello = await trpcServer.hello({ text: 'server' });
  return hello;
};

async function Page() {
  const hello = await getHello();
  return <div>{hello.greeting}</div>;
}

export default Page;
