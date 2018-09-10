import template from './progressBar.html';
import controller from './progressBar.controller';
import './progressBar.scss';

const progressBarComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    step: '<'
  }
};

export default progressBarComponent;
