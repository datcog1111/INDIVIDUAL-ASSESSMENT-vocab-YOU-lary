// import { signOut } from '../utils/auth';
import { showVocab } from '../../pages/vocab';
import {
  getVocab, getJavascript, getCSS, getHTML
} from '../../api/vocabData';
import addVocabForm from '../forms/addVocabForm';

const navigationEvents = (user) => {
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#create-vocab').addEventListener('click', () => {
    addVocabForm({}, user);
  });

  document.querySelector('#javascript').addEventListener('click', () => {
    getJavascript(user.uid).then(showVocab);
  });

  document.querySelector('#CSS').addEventListener('click', () => {
    getCSS(user.uid).then(showVocab);
  });

  document.querySelector('#HTML').addEventListener('click', () => {
    getHTML(user.uid).then(showVocab);
  });
};

export default navigationEvents;
