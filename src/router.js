import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Container from 'components/Container';
import FavoritesProvider from 'context/Favorites';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}