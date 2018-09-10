import template from './sizeBox.html';
import controller from './sizeBox.controller';
import './sizeBox.scss';

const sizeBoxComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    size: '<',
    selected: '<'
  }
};

export default sizeBoxComponent;
