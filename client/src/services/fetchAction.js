import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const fetchData = async (url = '', method = 'GET', body, options = {}) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method,
    ...options,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });
  return response.json();
  // const data = await response.json();
  // console.log(1, response, data);
  // return data;
};

// const fetchData = async (url = '', method = 'GET', options = {}) => {
//   const  data  = await axios({
//     baseURL: BASE_URL,
//     url,
//     method,
//     ...{
//       ...options,
//       headers: {
//         'Cache-Control': 'no-cache, no-store',
//         'Content-Type': 'application/json',
//         ...options.headers,
//       },
//     },
//     withCredentials: true,
//   });
//   return data;
// };

export default fetchData;
