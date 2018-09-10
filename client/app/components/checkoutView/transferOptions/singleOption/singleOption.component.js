import template from './singleOption.html';
import controller from './singleOption.controller';
import './singleOption.scss';

const singleOptionComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    singleOption: '<',
    selected: '<'
  }
};

export default singleOptionComponent;
