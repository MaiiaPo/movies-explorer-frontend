import {BEATFILM} from "./constants";

class MainApi {
  constructor({headers, address}) {
    this._headers = headers;
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _request(url, options) {
    options.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`
    return fetch(`${this._address}${url}`, options).then(this._checkResponse)
  }

  getUserData() {
    return this._request('/users/me', {
      headers: this._headers,
    })
  }

  updateUserData(userData) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
    })
  }

  getSavedMovies() {
    return this._request(`/movies`, {
      headers: this._headers,
    })
  }

  saveMovie(movie) {
    return this._request(`/movies`, {
      method: 'POST',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${BEATFILM}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${BEATFILM}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      }),
      headers: this._headers
    }).then((res) => this._checkResponse(res));
  }
}

const api = new MainApi({
  address: 'https://api.maiiapo-movies.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
