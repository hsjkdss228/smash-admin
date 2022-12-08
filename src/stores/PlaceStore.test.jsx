import context from 'jest-plugin-context';
import PlaceStore from './PlaceStore';

describe('PlaceStore', () => {
  let placeStore;

  beforeEach(() => {
    placeStore = new PlaceStore();
    jest.clearAllMocks();
  });

  context('서버에 장소 목록 데이터를 요청하면', () => {
    it('응답으로 받은 장소 목록 데이터를 상태로 저장', async () => {
      await placeStore.fetchPlaces();

      const { places } = placeStore;
      expect(places.length).toBe(2);
    });
  });
});
