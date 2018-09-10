class catalogueController {
  constructor(ProductService) {
    "ngInject";
    this.ProductService = ProductService;
    this.products = [];
  }

  $onInit() {
    this.ProductService.loadProducts()
      .then((products) => {
        this.products = products;
      });
  }
}

export default catalogueController;
