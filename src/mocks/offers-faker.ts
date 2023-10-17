import { faker } from '@faker-js/faker';

import { CityName, Offer, Offers, TypeName } from '../types/offer';

function createOffer(): Offer {
  return {
    bedrooms: faker.number.int(10),
    city: {
      name: faker.helpers.arrayElement<CityName>(['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris']),
      location: {
        longitude: faker.number.float({ max: 50, precision: 0.000001 }),
        latitude: faker.number.float({ max: 50, precision: 0.000001 }),
        zoom: faker.number.int(10)
      }
    },
    description: faker.commerce.productDescription(),
    goods: faker.helpers.arrayElements([
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher'
    ], 3),
    host: {
      avatarUrl: faker.image.avatar(),
      id: faker.string.uuid(),
      isPro: faker.datatype.boolean(),
      name: faker.internet.displayName()
    },
    id: faker.string.uuid(),
    images: Array.from({ length: 5 }, () => faker.image.urlLoremFlickr()),
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    location: {
      longitude: faker.number.float({ max: 50, precision: 0.000001 }),
      latitude: faker.number.float({ max: 50, precision: 0.000001 }),
      zoom: faker.number.int(10)
    },
    maxAdults: faker.number.int(5),
    previewImage: faker.image.urlLoremFlickr(),
    price: faker.number.int(1000),
    rating: faker.number.float({ max: 5, precision: 0.1 }),
    title: faker.person.jobTitle(),
    type: faker.helpers.arrayElement<TypeName>(['apartment', 'hotel', 'house', 'room'])
  };
}

const offers: Offers = Array.from({ length: 4 }, createOffer);

export { offers };
