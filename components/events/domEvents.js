import {
  getSingleVocab, deleteVocab, getVocab, getJavascript, getCSS, getHTML
} from '../../api/vocabData';
// import { showVocab } from '../pages/vocab';
import addVocabForm from '../forms/addVocabForm';
import { showVocab } from '../../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('WANT TO DELETE?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm({}, user);
    }

    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user));
    }

    if (e.target.id === 'javascript') {
      getJavascript(user.uid).then(showVocab);
    }

    if (e.target.id === 'CSS') {
      getCSS(user.uid).then(showVocab);
    }

    if (e.target.id === 'HTML') {
      getHTML(user.uid).then(showVocab);
    }
  });
};

export default domEvents;
