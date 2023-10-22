import { faker } from '@faker-js/faker';

import { TCityName, TOffer, TOffers, TTypeName } from '../types/offer';

function createOffer(): TOffer {
  return {
    bedrooms: faker.number.int(10),
    city: {
      name: faker.helpers.arrayElement<TCityName>(['Amsterdam', 'Brussels', 'Cologne', 'Dusseldorf', 'Hamburg', 'Paris']),
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
    images: Array.from({ length: 6 }, () => faker.image.urlLoremFlickr({ category: 'cats' })),
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    location: {
      longitude: faker.number.float({ max: 50, precision: 0.000001 }),
      latitude: faker.number.float({ max: 50, precision: 0.000001 }),
      zoom: faker.number.int(10)
    },
    maxAdults: faker.number.int(5),
    previewImage: faker.image.urlLoremFlickr({ category: 'cats' }),
    price: faker.number.int(1000),
    rating: faker.number.float({ max: 5, precision: 0.1 }),
    title: faker.person.jobTitle(),
    type: faker.helpers.arrayElement<TTypeName>(['apartment', 'hotel', 'house', 'room'])
  };
}

const offers: TOffers = Array.from({ length: Math.floor(Math.random() * 11) }, createOffer);

export { offers };
