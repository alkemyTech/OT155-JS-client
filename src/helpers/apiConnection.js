import instance from '../api/config/axios';

const apiConnectionWithoutToken = (url, data, method = 'get') => {
  if (method === 'get') {
    return instance.get(url);
  }
  return instance(url, {
    method,
    data,
    headers: { 'Content-Type': 'application/json' },
  });
};

const apiConnectionWithToken = (url, data, method = 'get') => {
  const token = localStorage.getItem('persist:user') || '';
  const parsedToken = JSON.parse(token)

  if (method === 'get') {
    return instance(url, {
      method,
      headers: {
        Authorization: parsedToken.token.replaceAll('"',''),
      },
    });
  }
  return instance({
    url,
    method,
    data,
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
  });
};

export { apiConnectionWithoutToken, apiConnectionWithToken };