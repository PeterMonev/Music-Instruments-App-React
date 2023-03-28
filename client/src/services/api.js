const BASE_URL = "http://localhost:3030";

async function request(method, url, data) {

  let options = {method, headers: {}};

  if (method !== 'GET' && method !== 'DELETE') {
      options = {
          method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      }
  }

  const user = JSON.parse(sessionStorage.getItem('session') || '{}');
  console.log(user);
  console.log(user.accessToken);
  if (user && user.accessToken) {
      options.headers['X-Authorization'] = user.accessToken;
  }

  return fetch(`${BASE_URL}${url}`, options)
      .then(res => res.json())
      .then(res => {
          if (res.message) {
              throw res;
          }
          return res;
      });
}

export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const put = request.bind(null,'PUT');
export const remove = request.bind(null,'DELETE');
