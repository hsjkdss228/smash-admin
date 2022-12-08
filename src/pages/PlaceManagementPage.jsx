import { useState } from 'react';
import styled from 'styled-components';
import PlaceList from '../components/PlaceList';

const Container = styled.article`
  
`;

const Functions = styled.div`

`;

export default function PlaceManagementPage() {
  const [placeListComponentState, toggelPlaceListComponent] = useState(false);

  return (
    <Container>
      <Functions>
        <button
          type="button"
          onClick={() => toggelPlaceListComponent(!placeListComponentState)}
        >
          운동 장소 목록 조회
        </button>
      </Functions>
      {placeListComponentState && (
        <PlaceList />
      )}
    </Container>
  );
}
