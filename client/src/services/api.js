
const BASE_URL = process.env.REACT_APP_URL;

async function request(method, url, data) {
 
    const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "content-type": "application/json",
      };

      options.body = JSON.stringify(data);
  
    }
 
  }

  const serializedAuth = sessionStorage.getItem("session");
  if (serializedAuth) {
    const auth = JSON.parse(serializedAuth);

    if (auth.accessToken) {
      options.headers = {
        ...options.headers,
        "X-Authorization": auth.accessToken,
      };
    }
  }
  
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}

export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const put = request.bind(null,'PUT');
export const remove = request.bind(null,'DELETE');
