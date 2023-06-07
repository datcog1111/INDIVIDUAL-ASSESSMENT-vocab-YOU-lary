// import { signOut } from '../utils/auth';
import { showVocab } from '../pages/vocab';
import { getVocab } from '../api/vocabData';

const navigationEvents = (user) => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });
};

export default navigationEvents;
