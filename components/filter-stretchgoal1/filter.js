import renderToDOM from '../../utils/renderToDOM';

const sortButton = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="filter-btn" data-bs-toggle="dropdown" aria-expanded="false">
    SORT BY
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">alphabetically</a></li>
    <li><a class="dropdown-item" href="#">newest-oldest</a></li>
    <li><a class="dropdown-item" href="#">oldest-newest</a></li>
    <li><hr class="dropdown-divider"></li>
  </ul>
</div>`;
renderToDOM('#form-container', sortButton);

export default sortButton;
