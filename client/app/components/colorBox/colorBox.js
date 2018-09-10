import angular from 'angular';
import uiRouter from 'angular-ui-router';
import colorBoxComponent from './colorBox.component';
import './colorBox.scss';

const colorBoxModule = angular.module('colorBox', [
  uiRouter
])
  .component('colorBox', colorBoxComponent);

export default colorBoxModule.name;
