import { z } from 'zod';
import { procedure } from '../trpc';

const hello = procedure
  .input(
    z.object({
      text: z.string()
    })
  )
  .query(({ input }) => {
    return {
      greeting: `hello ${input.text}`
    };
  });

export default hello;
