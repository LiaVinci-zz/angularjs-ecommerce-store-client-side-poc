import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productCardComponent from './product-card.component';

const productCardModule = angular.module('productCard', [
  uiRouter
])
  .component('productCard', productCardComponent);

export default productCardModule.name;
