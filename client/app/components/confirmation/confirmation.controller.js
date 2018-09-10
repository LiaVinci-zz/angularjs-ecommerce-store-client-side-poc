class confirmationController {
  constructor($state, OrderService) {
    "ngInject";

    this.$state = $state;
    this.OrderService = OrderService;

    if (Object.keys(this.OrderService.product).length === 0 || Object.keys(this.OrderService.order).length === 0)
      this.$state.go('catalogue');

    this.productDetails = this.OrderService.product;
    this.orderDetails = this.OrderService.order;
  }

  backToCatalogue() {
    this.OrderService.product = {};
    this.OrderService.order = {};
    this.$state.go('catalogue');
  }
}

export default confirmationController;
