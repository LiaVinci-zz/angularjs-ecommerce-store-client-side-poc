import ProductService from './product.service';
import OrderService from './order.service';
import CompanyService from './company.service';

const sharedModule = angular.module('app.shared', [])
  .service('ProductService', ProductService)
  .service('OrderService', OrderService)
  .service('CompanyService', CompanyService);

export default sharedModule.name;
