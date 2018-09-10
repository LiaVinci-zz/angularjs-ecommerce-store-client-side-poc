class productViewController {
  constructor($state, $stateParams, OrderService) {
    "ngInject";
    this.$state = $state;
    this.OrderService = OrderService;

    if ($stateParams.product === null)
      this.$state.go('catalogue');

    // Creating a deep copy of product Object as I add properties and I don't want the original object to be effected.
    this.product = angular.copy($stateParams.product);
    this.product.selectedColor = null;
    this.product.selectedSize = null;
    this.product.finalPrice = null;
  }

  selectColor(color) {
    this.product.selectedColor = color;
  }

  selectSize(storage) {
    this.product.selectedSize = storage;
    this.product.finalPrice = storage.price;
  }

  submit() {
    this.OrderService.product = this.product;
    this.$state.go('checkoutView');
  }
}

export default productViewController;
