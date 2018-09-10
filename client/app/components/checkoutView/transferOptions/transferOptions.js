import angular from 'angular';
import uiRouter from 'angular-ui-router';
import transferOptionsComponent from './transferOptions.component';
import singleOption from './singleOption/singleOption';
import './transferOptions.scss';

const transferOptionsModule = angular.module('transferOptions', [
  uiRouter,
  singleOption
])
  .component('transferOptions', transferOptionsComponent);

export default transferOptionsModule.name;
