import renderToDOM from '../utils/renderToDOM';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" id="navbar-logo">CRUNCH TIME</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar-items">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="all-vocab">ALL CARDS<span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#" id="create-vocab">CREATE ENTRY</a></li>
      <li class="nav-item active">
      <a class="nav-link" href="#" id="javascript">JS<span class="sr-only">(current)
      </span>
      </a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#" id="CSS">CSS<span class="sr-only">(current)</span>
      </a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" href="#" id="HTML">HTML<span class="sr-only">(current)</span>
      </a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      SORT</a>
      <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" id="alphabet">ALPHABETICAL</a></li>
      <li><a class="dropdown-item" href="#" id="new">OLDEST</a></li>
      <li><a class="dropdown-item" href="#" id="old">NEWEST</a></li></ul>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search">
    </form>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
