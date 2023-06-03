import { getVocab } from '../api/vocabData';

const selectLanguage = (language, user) => {
  let domString =`<label for="language">Select Language</label>
  <select class="form-control" id="language" required>
  <option value"">Select Language</option>`;

  getVocab(user.uid).then((vocabArray) => {
    vocabArray.forEach((vocab) => {
      domString+= `
      <option
      value="${vocab.firebaseKey}"
      ${vocabId === vocab.firebaseKey ? 'selected' : ''}>
      ${vocab}`
    })
  })
  </select>
}
