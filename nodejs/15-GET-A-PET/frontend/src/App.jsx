import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Auth/login';
import Register from './components/pages/Auth/Register';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Container from './components/layouts/Container';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </UserContextProvider>

      <Footer />
    </Router>
  );
}

export default App;
