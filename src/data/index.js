import { faker } from "@faker-js/faker";

faker.seed(123);

export const data = [...Array(50)].map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.urlLoremFlickr({ category: "technics" }),
  price: Number(faker.commerce.price()),
  material: faker.commerce.productMaterial(),
  brand: faker.company.name(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.helpers.arrayElement(["Save 50%", "70% Bonanza", "Flash Sale"]),
}));