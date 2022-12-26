import { Item, List, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const listSeedData: List[] = [
  {
    id: 1,
    name: 'list 1',
    createdAt: new Date()
  }
];

const itemSeedData: Item[] = [
  {
    id: 1,
    name: 'item 1',
    insertedAt: new Date(),
    listId: 1,
    updatedAt: null
  },
  {
    id: 2,
    name: 'item 2',
    insertedAt: new Date(),
    listId: 1,
    updatedAt: null
  }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const list of listSeedData) {
    await prisma.list.create({ data: list });
  }
  for (const item of itemSeedData) {
    await prisma.item.create({ data: item });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
