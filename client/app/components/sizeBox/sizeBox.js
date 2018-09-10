import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sizeBoxComponent from './sizeBox.component';
import './sizeBox.scss';

const sizeBoxModule = angular.module('sizeBox', [
  uiRouter
])
  .component('sizeBox', sizeBoxComponent);

export default sizeBoxModule.name;
