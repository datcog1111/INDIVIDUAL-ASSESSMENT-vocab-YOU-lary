import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
  <div class="form-group>
  <label for="title">Vocabulary Word</label>
  <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Word" value="${obj.title || ''}" required>
  </div>
  <div class = "form-group">
  <label for="description">Description</label>
  <textarea class="form-control" placeholder="Vocabulary Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
  </div>
  <div class="form-group" id="select-language">
  </div>
  <button type="submit" class="btn btn-primary">Submit Entry
  </button>
  </div>
  </form>`;

  renderToDOM('#form-container', domString);
  // selectLanguage(`${obj.language} || ''`, user);
};

export default addVocabForm;
