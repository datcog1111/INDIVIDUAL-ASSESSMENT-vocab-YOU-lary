import renderToDOM from '../utils/renderToDOM';
import clearDom from '../utils/clearDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card">
    <div class="card-header">
      ${item.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${item.description}</p>
        <footer class="blockquote-footer">${item.language} <cite title="Source Title">${item.time}</cite></footer>
      </blockquote>
      <i class="btn btn-success fas fa-eye"
      id="edit-vocab-btn--${item.firebaseKey}"></i>
      <i id="delete-vocab-btn--${item.firebaseKey}"
      class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
