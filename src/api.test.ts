import { Api } from './api';

describe(`Given api`, () => {
  test(`When GET /health
  Then response is NOT 404`, async () => {
    const api = await Api();

    const { statusCode } = await api.inject({
      method: 'GET',
      url: '/health',
    });

    expect(statusCode).not.toEqual(404);
  });
});
