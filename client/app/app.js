import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Shared from './shared/shared';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    Shared,
    Components
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/catalogue');
  })

  .component('app', AppComponent);
