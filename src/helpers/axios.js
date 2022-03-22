import instance from '../api/config/axios';

const axiosWithoutToken = (url, data, method = 'get') => {
  if (method === 'get') {
    return instance.get(url);
  } else {
    return instance(url, {
      method,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

const axiosWithToken = (url, data, method = 'get') => {
  const token = localStorage.getItem('token') || '';

  if (method === 'get') {
    return instance(url, {
      method,
      headers: {
        token: token,
      },
    });
  } else {
    return instance({
      url,
      method,
      data,
      headers: {
        'Content-type': 'application/json',
        token: token,
      },
    });
  }
};

export { axiosWithoutToken, axiosWithToken };


/*   
Usage examples:

const queryAPI = async () => {
         try {
           const response = await axiosWithoutToken('/users')
           console.log(response);
         } catch (error) {
           console.log(error)
         }
       }

const queryAPI = async () => {
        try {
          const response = await axiosWithoutToken('/users', {
            name: "José Hernandez",
            email: "jose@gmail.com",
            password: "jose123456!"
          }, 'POST')
         console.log(response);
        } catch (error) {
          console.log(error)
        }
      }

*/