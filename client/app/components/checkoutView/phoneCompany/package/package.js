import angular from 'angular';
import uiRouter from 'angular-ui-router';
import packageComponent from './package.component';
import './package.scss';

const packageModule = angular.module('Package', [
  uiRouter
])
  .component('package', packageComponent);

export default packageModule.name;
