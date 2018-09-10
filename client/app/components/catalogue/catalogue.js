import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productCard from './product-card/product-card';
import catalogueComponent from './catalogue.component';

const catalogueModule = angular.module('catalogue', [
  uiRouter,
  productCard
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('catalogue', {
        url: '/catalogue',
        component: 'catalogue'
      });
  })
  .component('catalogue', catalogueComponent);

export default catalogueModule.name;
