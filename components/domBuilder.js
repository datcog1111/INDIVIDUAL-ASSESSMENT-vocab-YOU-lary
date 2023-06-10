import renderToDOM from '../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <h1 id="logo">CRUNCH TIME</h1>
  <div id="logo"></div>
  <div id="computer">
  <img src="https://media.cybernews.com/images/featured/2021/02/qw2ja4h83fz41.jpg" alt="alternatetext"></div>
  <div id="navigation"></div>
  <div id="main-container">
  <div id="sort-button"></div>
  <div id="form-container"></div>
  <div id="store"></div>
  <div id="view"></div>
</div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
