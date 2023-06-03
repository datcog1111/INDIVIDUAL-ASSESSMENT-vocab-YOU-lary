import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getVocab;
