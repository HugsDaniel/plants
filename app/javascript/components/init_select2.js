import $ from 'jquery';
import select2 from 'select2';

const initSelect2 = () => {
  $(document).ready(function() {
      $('.select2-multiple-input').select2();
  });
}

export { initSelect2 }
