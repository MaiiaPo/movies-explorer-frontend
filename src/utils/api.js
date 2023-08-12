class Api {
  constructor({headers, address}) {
    this._headers = headers;
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    // eslint-disable-next-line prefer-promise-reject-errors
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
}

const api = new Api({
  address: 'https://api.maiiapo-movies.nomoredomains.xyz',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
