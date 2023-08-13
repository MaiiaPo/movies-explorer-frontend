class MoviesApi {
  constructor({headers, address}) {
    this._headers = headers;
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._address}`, { headers: this._headers })
      .then((res) => this._checkResponse(res));
  }
}

export const moviesApi = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});
