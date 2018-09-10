import template from './package.html';
import controller from './package.controller';
import './package.scss';

const packageComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    package: '<',
    selected: '<'
  }
};

export default packageComponent;
