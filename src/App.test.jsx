import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('어드민 프로젝트를 정상적으로 실행', () => {
    render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));
  });
});
