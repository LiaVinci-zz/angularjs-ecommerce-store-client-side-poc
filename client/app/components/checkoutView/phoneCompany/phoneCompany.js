import angular from 'angular';
import uiRouter from 'angular-ui-router';
import phoneCompanyComponent from './phoneCompany.component';
import Package from './package/package';
import './phoneCompany.scss';

const phoneCompanyModule = angular.module('phoneCompany', [
  uiRouter,
  Package
])
  .component('phoneCompany', phoneCompanyComponent);

export default phoneCompanyModule.name;
