import faker from "@faker-js/faker";
import database from "../config/db";
import Container from "../models/Container";
import { Container as TypeContainer } from "../@types/Container";
import Position from "../models/Position";
import Category from "../models/Category";
import ContainerType from "../models/ContainerType";

main()
  .then(() => console.log("Seeded"))
  .catch((err) => console.log(err))
  .finally(() => process.exit());

async function main(): Promise<any> {
  await database();

  const data: TypeContainer = {
    origin: faker.address.country(),
    position: {
      X: faker.datatype.float({ min: 0, max: 50 }),
      Y: faker.datatype.float({ min: 0, max: 50 }),
      Z: faker.datatype.float({ min: 0, max: 50 }),
    },
    size: {
      X: Math.floor(faker.datatype.number({ min: 8, max: 12 })),
      Y: Math.floor(faker.datatype.number({ min: 2, max: 3 })),
      Z: Math.floor(faker.datatype.number({ min: 2, max: 3 })),
    },
    category: await Category.create({
      label: faker.lorem.word(),
    }),
    type: await ContainerType.create({
      label: faker.lorem.word(),
    }),
  };
  await Container.create(data);
}
