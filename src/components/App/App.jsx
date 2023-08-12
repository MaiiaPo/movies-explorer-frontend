import './App.css';
import {useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { auth } from "../../utils/auth";
import api from "../../utils/api";

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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathFooter = ['/', '/movies', '/saved-movies'];

  // Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [successUpdateUser, setSuccessUpdateUser] = useState(false);

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

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      loggedIn && Promise.all([api.getUserData()])
        .then(([userData]) => {
          setLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [loggedIn]);

  function handleUpdateProfile(userData) {
    api.updateUserData(userData).then((currentUser) => {
      setCurrentUser(currentUser);
      setSuccessUpdateUser(true)
    })
      .catch((err) => {
        setSuccessUpdateUser(false)
        console.error(err);
      })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {pathHeader.includes(location.pathname) && (
          <Header loggedIn={loggedIn} />
        )}
        <main className="main">
          <Routes>
            <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
            <Route path="/" element={<Main handleRegister={handleRegister} />}/>
            <Route path="*" element={<NotFound />} />

            <Route path="/movies" element={
              <ProtectedRouteElement element={Movies} loggedIn={loggedIn}/>
            }
            />

            <Route path="/saved-movies" element={
              <ProtectedRouteElement element={SavedMovies} loggedIn={loggedIn}/>
            }
            />

            <Route path="/profile" element={
              <ProtectedRouteElement
                element={Profile}
                loggedIn={loggedIn}
                handleSignOut={handleSignOut}
                handleUpdateProfile={handleUpdateProfile}
                successUpdate={successUpdateUser}
              />
            }
            />
          </Routes>
        </main>
        {pathFooter.includes(location.pathname) && (
          <Footer />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
