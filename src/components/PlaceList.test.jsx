import { render, screen } from '@testing-library/react';
import context from 'jest-plugin-context';
import PlaceList from './PlaceList';

let places;
const fetchPlaces = jest.fn();
jest.mock('../hooks/usePlaceStore', () => () => ({
  places,
  fetchPlaces,
}));

describe('PlaceList', () => {
  function renderPlaceList() {
    render((
      <PlaceList />
    ));
  }

  context('운동 장소 목록 리스트 컴포넌트를 불러오면', () => {
    context('운동 장소 데이터가 없는 경우', () => {
      beforeEach(() => {
        places = [];
      });

      it('운동 장소가 없다는 안내 메시지를 출력', () => {
        renderPlaceList();

        screen.getByText('등록된 운동 장소가 없습니다.');
      });
    });

    context('운동 장소 데이터가 존재하는 경우', () => {
      beforeEach(() => {
        places = [
          {
            id: 1,
            name: '운동장소 1',
            exercise: '운동종목 1',
            address: '충남 금산군 금산읍 인삼약초로 22',
            contactNumber: '031-124-5678',
          },
          {
            id: 2,
            name: '운동장소 2',
            exercise: '운동종목 2',
            address: '서울 광진구 아차산로40길 39-16',
            contactNumber: '44-4444-4444',
          },
        ];
      });

      it('테이블에 리스트 값을 출력', () => {
        renderPlaceList();

        expect(screen.queryAllByText('예정 운동 조회하기').length).toBe(2);
      });
    });
  });
});
