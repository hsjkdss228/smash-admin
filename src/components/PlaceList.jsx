import { useEffect } from 'react';
import styled from 'styled-components';

import usePlaceStore from '../hooks/usePlaceStore';

const Container = styled.section`
  
`;

export default function PlaceList() {
  const placeStore = usePlaceStore();

  useEffect(() => {
    placeStore.fetchPlaces();
  });

  const { places } = placeStore;

  return (
    <Container>
      <h2>운동 장소 목록 리스트</h2>
      {!places || places.length === 0 ? (
        <p>등록된 운동 장소가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>장소명</th>
              <th>종목</th>
              <th>주소</th>
              <th>연락처</th>
              <th>예정된 운동</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.id}</td>
                <td>{place.name}</td>
                <td>{place.exercise}</td>
                <td>{place.address}</td>
                <td>{place.contactNumber}</td>
                <td>
                  <button
                    type="button"
                  >
                    예정 운동 조회하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}
