class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password})
    })
      .then((res) => this._checkResponse(res))
  };

  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res))
      .then((data) => {
        if (data.token){
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  };

  getToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res))
  };
}

export const auth = new Api({
  baseUrl: 'https://api.maiiapo-movies.nomoredomains.xyz',
});
