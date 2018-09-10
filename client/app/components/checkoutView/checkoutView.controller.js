class checkoutViewController {
  constructor($state, OrderService) {
    "ngInject";

    this.$state = $state;
    this.OrderService = OrderService;

    if (Object.keys(this.OrderService.product).length === 0)
      this.$state.go('catalogue');

    this.product = this.OrderService.product;
    this.step = 'details';
  }

  setStep(step) {
    if (step === 'confirmation') {
      return this.$state.go('confirmation');
    }
    this.step = step;
  }
}

export default checkoutViewController;
