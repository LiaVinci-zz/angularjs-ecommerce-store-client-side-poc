import template from './personalDetails.html';
import controller from './personalDetails.controller';
import './personalDetails.scss';

const personalDetailsComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    nextStepName: '@',
    nextStepFn: '&'
  }
};

export default personalDetailsComponent;
