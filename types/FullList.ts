import type { Item, ItemInList, List } from '@prisma/client';

export type FullList = List & {
  items: (ItemInList & {
    item: Item;
  })[];
};
