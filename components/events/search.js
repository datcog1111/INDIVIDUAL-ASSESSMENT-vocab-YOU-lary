import { getVocab } from '../../api/vocabData';
import { showVocab } from '../../pages/vocab';

const searchVocab = (user) => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();

    const searchEvent = e.target.value.toLowerCase();
    let result;
    getVocab(user.uid).then((data) => {
      result = data.filter((item) => item.title.toLowerCase().includes(searchEvent) || item.description.toLowerCase().includes(searchEvent) || item.language.toLowerCase().includes(searchEvent));

      showVocab(result);
    });
  });
};

export default searchVocab;
