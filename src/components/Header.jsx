import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: 0;
`;

export default function Header() {
  const navigate = useNavigate();

  const navigateLink = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <button
        type="button"
        onClick={() => navigateLink('/places')}
      >
        운동 장소 관리
      </button>
      <button
        type="button"
        onClick={() => navigateLink('/users')}
      >
        사용자 관리
      </button>
    </Container>
  );
}
