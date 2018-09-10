import angular from 'angular';
import uiRouter from 'angular-ui-router';
import personalDetailsComponent from './personalDetails.component';
import './personalDetails.scss';

const personalDetailsModule = angular.module('personalDetails', [
  uiRouter
])
  .component('personalDetails', personalDetailsComponent);

export default personalDetailsModule.name;
