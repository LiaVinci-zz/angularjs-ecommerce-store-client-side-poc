import angular from 'angular';
import uiRouter from 'angular-ui-router';
import confirmationComponent from './confirmation.component';
import './confirmation.scss';

const confirmationModule = angular.module('Confirmation', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('confirmation', {
        url: '/confirmation',
        component: 'confirmation',
        params: {
          product: null
        }
      });
  })
  .component('confirmation', confirmationComponent);

export default confirmationModule.name;
