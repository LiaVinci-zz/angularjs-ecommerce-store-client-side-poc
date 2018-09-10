import angular from 'angular';
import uiRouter from 'angular-ui-router';
import progressBarComponent from './progressBar.component';
import './progressBar.scss';

const progressBarModule = angular.module('progressBar', [
  uiRouter
])
  .component('progressBar', progressBarComponent);

export default progressBarModule.name;
