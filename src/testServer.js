/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const { apiBaseUrl } = config;

const testServer = setupServer(
  rest.get(
    `${apiBaseUrl}/places`,
    async (request, response, context) => (
      response(
        context.status(200),
        context.json({
          places: [
            {
              id: 1,
              name: '운동장소',
              exercise: '운동종목',
              address: '충남 금산군 금산읍 상옥1길 9',
              contactNumber: '02-1234-5678',
            },
            {
              id: 2,
              name: '운동장소 2',
              exercise: '운동종목 2',
              address: '서울 광진구 아차산로40길 39-16',
              contactNumber: '02-123-4567',
            },
          ],
        }),
      )
    ),
  ),
);

export default testServer;
