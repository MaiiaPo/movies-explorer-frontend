import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Main from '../Main/Main/Main';
import Movies from '../Movies/Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Header from '../сommon/Header/Header'
import NotFound from "../NotFound/NotFound";
import Footer from "../сommon/Footer/Footer";
function App() {
  const location = useLocation();
  const pathHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathFooter = ['/', '/movies', '/saved-movies'];

  return (
    <div className="App">
      {pathHeader.includes(location.pathname) && (
        <Header />
      )}
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {pathFooter.includes(location.pathname) && (
          <Footer />
      )}
    </div>
  );
}

export default App;
