class phoneCompanyController {
  constructor(CompanyService, OrderService) {
    "ngInject";
    this.CompanyService = CompanyService;
    this.OrderService = OrderService;
    this.companies = [];
    this.selectedPackage = null;
    this.selectedPackagePrice = 0;
  }

  $onInit() {
    this.CompanyService.loadCompanies()
      .then((res) => {
        this.companies = res.companies;
      });
  }

  selectPackage(selectedPackage) {
    this.selectedPackage = selectedPackage;
    this.OrderService.product.finalPrice -= this.selectedPackagePrice;
    this.selectedPackagePrice = selectedPackage.price;
    this.OrderService.product.finalPrice += this.selectedPackagePrice;
  }

  submitPackage() {
    this.OrderService.order.selectedPackage = this.selectedPackage;
    this.setStepFn({step: this.nextStepName});
  }
}

export default phoneCompanyController;
