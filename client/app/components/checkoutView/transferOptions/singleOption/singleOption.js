import angular from 'angular';
import uiRouter from 'angular-ui-router';
import singleOptionComponent from './singleOption.component';
import './singleOption.scss';

const singleOptionModule = angular.module('singleOption', [
  uiRouter
])
  .component('singleOption', singleOptionComponent);

export default singleOptionModule.name;
