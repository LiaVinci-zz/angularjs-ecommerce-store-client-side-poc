class transferOptionsController {
  constructor(OrderService) {
    "ngInject";

    this.OrderService = OrderService;
    this.selectedTransfer = null;
    this.selectedTranferPrice = 0;
    this.transferOptions = this.OrderService.transferOptions;
  }

  selectTransfer(selectedTransfer) {
    this.selectedTransfer = selectedTransfer;
    this.OrderService.product.finalPrice -= this.selectedTranferPrice;
    this.selectedTranferPrice = selectedTransfer.price;
    this.OrderService.product.finalPrice += this.selectedTranferPrice;
  }

  submitTransfer() {
    this.OrderService.order.selectedTransfer = this.selectedTransfer;
    this.setStepFn({step: this.nextStepName});
  }
}

export default transferOptionsController;
