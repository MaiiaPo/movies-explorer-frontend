import './App.css';
import {useEffect, useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { auth } from "../../utils/auth";
import api from "../../utils/mainApi";

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
import {moviesApi} from "../../utils/moviesApi";
import InfoTooltip from "../сommon/InfoTooltip/InfoTooltip";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathFooter = ['/', '/movies', '/saved-movies'];

  // Авторизован пользователь или нет
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [successUpdateUser, setSuccessUpdateUser] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccessAuth, setIsSuccessAuth] = useState(false);

  function handleRegister (values) {
    auth.register(values.name, values.email, values.password)
      .then(() => {
        setIsInfoTooltipOpen(true);
        setIsSuccessAuth(true);
        handleLogin(values);
        console.log('регистрация успешна')
      })
      .catch((e) => {
        setIsInfoTooltipOpen(true);
        setIsSuccessAuth(false);
        console.error(e)
      });
  }

  function handleLogin (values) {
    auth.authorize(values.email, values.password).then((data) => {
      localStorage.setItem('jwt', data.token);
      setLoggedIn(true);
      navigate('/movies');
    })
      .catch(err => {
        setIsInfoTooltipOpen(true);
        setIsSuccessAuth(false)
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
          navigate(location.pathname);
        }
      })
        .catch((err) => console.error(err));
    }
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      if (loggedIn) {
        api.getSavedMovies()
          .then((data) => {
            setSavedMovies(data);
            localStorage.setItem('savedMovies', JSON.stringify(data));
          })
          .catch((error) => console.error(error));

        api.getUserData()
          .then((userData) => {
            setLoggedIn(true);
            setCurrentUser(userData);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, [loggedIn]);

  useEffect(() => {
    loggedIn && localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, loggedIn]);


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

  function handleSaveMovie(movie) {
      api.saveMovie(movie).then((res) => {
        setSavedMovies([...savedMovies, res]);
      })
      .catch((error) => console.error(error));
  }

  function handleDeleteMovie(movieId) {
    api.deleteMovie(movieId)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (movie) => movie._id !== movieId
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {console.error(error)})

    api.getSavedMovies().then((data) => {
      setSavedMovies(data);
    }).catch((error) => {console.error(error)})
  }

  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
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
            <Route path="/signup" element={<Register handleRegister={handleRegister} loggedIn={loggedIn} />} />
            <Route path="/" element={<Main handleRegister={handleRegister} />}/>
            <Route path="*" element={<NotFound />} />

            <Route path="/movies" element={
              <ProtectedRouteElement
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
              />
            }
            />

            <Route path="/saved-movies" element={
              <ProtectedRouteElement
                element={SavedMovies}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                loggedIn={loggedIn}/>
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
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccessAuth}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
