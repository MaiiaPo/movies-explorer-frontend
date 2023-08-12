import './App.css';
import {useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { auth } from "../../utils/auth";

import Main from '../Main/Main/Main';
import Movies from '../Movies/Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register'
import Header from '../сommon/Header/Header'
import NotFound from "../NotFound/NotFound";
import Footer from "../сommon/Footer/Footer";
import ProtectedRouteElement from "../сommon/ProtectedRoute/ProtectedRoute";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathFooter = ['/', '/movies', '/saved-movies'];

  // Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);

  function handleRegister ({ username, email, password }) {
    auth.register(username, email, password)
      .then(() => {
        navigate('/signin', {replace: true});
        console.log('регистрация успешна')
      })
      .catch((e) => {
        console.error(e)
      });
  }

  function handleLogin ({ email, password }) {
    auth.authorize(email, password).then((data) => {
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      navigate('/');
    })
      .catch(err => {
        console.error(err)
      });
  }

  useEffect(() => {
    // проверка токена
    tokenCheck();
  }, [])

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');

      auth.getToken(jwt).then((res) => {
        if (res){
          setLoggedIn(true);
          navigate("/", {replace: true})
        }
      })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div className="App">
      {pathHeader.includes(location.pathname) && (
        <Header />
      )}
      <main className="main">
        <Routes>
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister}/>} />
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={
              <ProtectedRouteElement element={Main} loggedIn={loggedIn}/>
            }
          />

          <Route path="/movies" element={
              <ProtectedRouteElement element={Movies} loggedIn={loggedIn}/>
            }
          />

          <Route path="/saved-movies" element={
              <ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn}/>
            }
          />

          <Route path="/profile" element={
              <ProtectedRouteElement element={Profile} loggedIn={loggedIn}/>
            }
          />
        </Routes>
      </main>
      {pathFooter.includes(location.pathname) && (
          <Footer />
      )}
    </div>
  );
}

export default App;
