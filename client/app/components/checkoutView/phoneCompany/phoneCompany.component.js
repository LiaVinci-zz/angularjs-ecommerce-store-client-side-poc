import template from './phoneCompany.html';
import controller from './phoneCompany.controller';
import './phoneCompany.scss';

const phoneCompanyComponent = {
  restrict: 'E',
  template,
  controller,
  bindings: {
    nextStepName: '@',
    backStepName: '@',
    setStepFn: '&'
  }
};

export default phoneCompanyComponent;
