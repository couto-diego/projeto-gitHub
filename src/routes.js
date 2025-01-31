import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import RepoDetails from './pages/RepoDetails';
import UserDetails from './components/UserDetails'; // Caso precise da página de usuário

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SearchPage />} />
    <Route path="/user/:username" element={<UserDetails />} /> {/* Página de detalhes do usuário */}
    <Route path="/repo/:fullName" element={<RepoDetails />} /> {/* Página de detalhes do repositório */}
  </Routes>
);

export default AppRoutes;
