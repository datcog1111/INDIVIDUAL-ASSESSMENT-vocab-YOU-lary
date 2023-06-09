import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getJavascript = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const javaScript = Object.values(data).filter((item) => item.language === 'JavaScript');
      resolve(javaScript);
    })
    .catch(reject);
});

const getHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const htML = Object.values(data).filter((item) => item.language === 'HTML');
      resolve(htML);
    })
    .catch(reject);
});

const getCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cSS = Object.values(data).filter((item) => item.language === 'CSS');
      resolve(cSS);
    })
    .catch(reject);
});

const sortAlphabet = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const alphabet = Object.values(data).sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
      resolve(alphabet);
    })
    .catch(reject);
});

const sortNewest = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const newest = Object.values(data).sort((a, b) => {
        if (a.time < b.time) return -1;
        return 0;
      });
      resolve(newest);
    })
    .catch(reject);
});

const sortOldest = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const oldest = Object.values(data).sort((a, b) => {
        if (a.time > b.time) return -1;
        return 0;
      });
      resolve(oldest);
    })
    .catch(reject);
});

export {
  getVocab, createVocab, updateVocab, getSingleVocab, deleteVocab, getJavascript, getHTML, getCSS, sortAlphabet, sortNewest, sortOldest
};
