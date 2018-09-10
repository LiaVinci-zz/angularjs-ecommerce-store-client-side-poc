import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productViewComponent from './productView.component';
import './productView.scss';

const productViewModule = angular.module('productView', [
  uiRouter,
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('productView', {
        url: '/productView',
        component: 'productView',
        params: {
          product: null
        }
      });
  })
  .component('productView', productViewComponent);

export default productViewModule.name;
