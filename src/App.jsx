import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import HomePage from './pages/HomePage';
import PlaceManagementPage from './pages/PlaceManagementPage';
import UserManagementPage from './pages/UserManagementPage';
import GlobalStyle from './styles/GlobalStyle';

const Container = styled.div`
  
`;

export default function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" elements={<HomePage />} />
          <Route path="/places" elements={<PlaceManagementPage />} />
          <Route path="/users" elements={<UserManagementPage />} />
        </Routes>
      </Container>
    </>
  );
}
