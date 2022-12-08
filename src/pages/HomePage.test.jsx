import { render } from '@testing-library/react';
import context from 'jest-plugin-context';

import HomePage from './HomePage';

describe('HomePage', () => {
  context('홈 페이지에 접속하면', () => {
    it('홈 페이지를 정상적으로 렌더링', () => {
      render((
        <HomePage />
      ));
    });

    // TODO: 어떤 정보가 메인에 나와야 할까...
    // 헤더 테스트는 헤더 쪽에서 해 주고 있기 때문에 헤더 테스트를 하는 것은 부적절
    // 관리자 템플릿을 보면서 베낄 수 있는 건 베끼는게 좋겠다. 통계라던가...?
  });
});
