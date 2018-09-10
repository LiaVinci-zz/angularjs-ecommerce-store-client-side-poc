import template from './colorBox.html';
import controller from './colorBox.controller';
import './colorBox.scss';

const colorBoxComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    color: '<',
    selected: '<'
  }
};

export default colorBoxComponent;
