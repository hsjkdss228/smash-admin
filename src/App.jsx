import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/Header';
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
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<PlaceManagementPage />} />
          <Route path="/users" element={<UserManagementPage />} />
        </Routes>
      </Container>
    </>
  );
}
