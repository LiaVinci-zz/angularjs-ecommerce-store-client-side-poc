import Catalogue from './catalogue/catalogue';
import ProductView from './productView/productView';
import colorBox from './colorBox/colorBox';
import sizeBox from './sizeBox/sizeBox';
import PersonalDetailsView from './checkoutView/checkoutView';
import Confirmation from './confirmation/confirmation';

const componentModule = angular.module('app.components', [
  Catalogue,
  ProductView,
  colorBox,
  sizeBox,
  PersonalDetailsView,
  Confirmation
]);

export default componentModule.name;
