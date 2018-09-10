import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkoutViewComponent from './checkoutView.component';
import progressBar from './progressBar/progressBar';
import personalDetails from './personalDetails/personalDetails';
import phoneCompany from './phoneCompany/phoneCompany';
import transferOptions from './transferOptions/transferOptions';
import './checkoutView.scss';

const checkoutViewModule = angular.module('checkoutView', [
  uiRouter,
  progressBar,
  personalDetails,
  phoneCompany,
  transferOptions
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('checkoutView', {
        url: '/checkoutView',
        component: 'checkoutView',
        params: {
          product: null
        }
      });
  })
  .component('checkoutView', checkoutViewComponent);

export default checkoutViewModule.name;
