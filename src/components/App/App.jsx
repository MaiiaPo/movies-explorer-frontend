import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Main from '../Main/Main/Main';
import Movies from '../Movies/Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Header from '../сommon/Header/Header'
import Footer from "../сommon/Footer/Footer";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && <Footer/>}
    </div>
  );
}

export default App;
