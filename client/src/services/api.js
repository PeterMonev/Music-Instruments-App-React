const BASE_URL = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const user = JSON.parse(sessionStorage.getItem("userData"));

  if (user) {
    options.headers["X-Authorization"] = user.accesToken;
  }

  try {
    const response = await fetch(BASE_URL + url, data);

    if (!response.ok) {
      const error = await response.json();

      if (res.status === 403) {
        sessionStorage.removeItem("userData");
      }

      throw new Error(error.errors);
    }

    if (response.status === 204) {
      return response;
    }
    
    const result = await response.json();
    return result;

  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const put = request.bind(null,'PUT');
export const remove = request.bind(null,'DELETE');
