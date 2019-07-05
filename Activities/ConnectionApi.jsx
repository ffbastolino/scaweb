import Axios from 'axios';

const ConnectionApi = () => {
  const url = 'http://192.168.1.156:3001/api/activities/';

  return Axios.get(url)
    .then(response => response.data)
    .catch((error) => { throw error; });
};

const sendPercent = (newPercent) => {
  const url = 'http://192.168.1.156:3001/api/activities/';
  return Axios.post(url, newPercent)
    .catch((error) => {
      throw error;
    });
};
export default ConnectionApi;
export { sendPercent };
