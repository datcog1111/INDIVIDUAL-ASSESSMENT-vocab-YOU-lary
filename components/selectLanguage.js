import renderToDOM from '../utils/renderToDOM';

const selectLanguage = (languageId, user) => {
  let domString = `<label for="language">Select Language</label>
  <select class="form-control" id="language_id" required>
  <option value="">SELECT LANGUAGE</option>`

  getVocab(user.uid).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
      <option
      value="${language.firebaseKey}"
      ${languageId === language.firebaseKey ? 'selected' : ''}>
      </option>`;
        });
    domString += '</select>';

    renderToDOM('#select-language', domString);
});
}
