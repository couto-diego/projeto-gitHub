import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { GlobalStyle } from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

const AppContent = () => {
  const { theme } = useContext(ThemeContext); // Pega o tema do Context

  return (
    <Router> {/* BrowserRouter deve envolver todo o conteúdo de roteamento */}
      <GlobalStyle theme={theme} />
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
