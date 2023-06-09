import renderToDOM from '../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <h1 id="logo">CRUNCH TIME</h1>
  <div id="logo"></div>
  <div id="navigation"></div>
  <div id="main-container">
  <div id="add-button"></div>
  <div id="form-container"></div>
  <div id="store"></div>
  <div id="view"></div>
</div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
