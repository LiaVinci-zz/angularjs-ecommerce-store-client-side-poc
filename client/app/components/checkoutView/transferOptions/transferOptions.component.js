import template from './transferOptions.html';
import controller from './transferOptions.controller';
import './transferOptions.scss';

const transferOptionsComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    nextStepName: '@',
    backStepName: '@',
    setStepFn: '&'
  }
};

export default transferOptionsComponent;
