const mockPlanetDetailsResponse = {
  name: 'test',
  rotation_period: 'test',
  diameter: 'test',
  climate: 'test',
  gravity: 'test',
  terrain: 'test',
  population: 'test',
  residents: [
    'http://resident1',
    'http://resident2',
  ],
};

const planetCollectionMock = [
  {
    name: 'Test Name',
    climate: 'Test Climate',
    population: '10000',
    url: 'http://swapi.dev/api/planets/1',
    residents: [
      'http://resident1',
      'http://resident2',
    ],
  },
];

const firstResident = {
  name: 'John',
  height: '100',
  mass: '100',
  gender: 'male',
};

const secondResident = {
  name: 'Jenny',
  height: '90',
  mass: '90',
  gender: 'female',
};

const planetDetailsMock = {
  name: 'test',
  rotation_period: 'test',
  diameter: 'test',
  climate: 'test',
  gravity: 'test',
  terrain: 'test',
  population: 'test',
  residents: [
    secondResident,
    firstResident,
  ],
};

export const mocks = {
  mockPlanetDetailsResponse,
  planetCollectionMock,
  firstResident,
  secondResident,
  planetDetailsMock,
};
