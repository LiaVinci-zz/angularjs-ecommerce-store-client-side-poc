import template from './product-card.html';
import controller from './product-card.controller';
import './product-card.scss';

const productCardComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    product: '<data'
  },
};

export default productCardComponent;
