export default {
  props: ['pagination', 'getProducts'], // 從外到內傳 pagination
  template: ` <nav aria-label="Page navigation example">
  <ul class="pagination">
      <li class="page-item" :class="{disabled: !pagination.has_pre}">
          <a class="page-link" href="#" aria-label="Previous" @click="getProducts(pagination.current_page - 1)">
              <span aria-hidden="true">&laquo;</span>
          </a>
      </li>

      <li class="page-item" :class="{active: page === pagination.current_page}" v-for="page in pagination.total_pages"><a class="page-link" href="#" @click="getProducts(page)">{{page}}</a></li>

      <li class="page-item" :class="{disabled: !pagination.has_next}">
          <a class="page-link" href="#" aria-label="Next" @click="getProducts(pagination.current_page + 1)">
              <span aria-hidden="true">&raquo;</span>
          </a>
      </li>
  </ul>
</nav>`,
};