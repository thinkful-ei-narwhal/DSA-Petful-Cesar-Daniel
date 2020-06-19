import config from '../config';

const apiService = {
  getPets(){
    let error;
    console.log(config.API_ENDPOINT);
    return fetch(`${config.API_ENDPOINT}/pets`, {
      method: 'GET',
      headers: {}
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        console.log(res);
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },

  // delete pets =[

  getPeople(){
    let error;
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: 'GET',
      headers: {}
      })
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data})
  },

  // remove people =[
}

export default apiService;