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
  const token = localStorage.getItem('token') || '';

  if (method === 'get') {
    return instance(url, {
      method,
      headers: {
        token: token,
      },
    });
  }
  return instance({
    url,
    method,
    data,
    headers: {
      'Content-type': 'application/json',
      token: token,
    },
  });
};

export { apiConnectionWithoutToken, apiConnectionWithToken };
