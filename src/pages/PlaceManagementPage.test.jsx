import { fireEvent, render, screen } from '@testing-library/react';
import context from 'jest-plugin-context';

import PlaceManagementPage from './PlaceManagementPage';

describe('PlaceManagementPage', () => {
  function renderPlaceManagementPage() {
    render((
      <PlaceManagementPage />
    ));
  }

  context('운동 장소 목록 조회 페이지에 접속하면', () => {
    it('운동 장소 목록 조회 페이지를 렌더링', () => {
      renderPlaceManagementPage();
    });

    context('운동 장소 목록 조회 버튼을 누르면', () => {
      it('운동 장소 목록 조회 컴포넌트 출력 상태 변화', () => {
        renderPlaceManagementPage();

        fireEvent.click(screen.getByText('운동 장소 목록 조회'));
        screen.getByText('운동 장소 목록 리스트');
        fireEvent.click(screen.getByText('운동 장소 목록 조회'));
        expect(screen.queryByText('운동 장소 목록 리스트')).toBe(null);
      });
    });
  });
});
