import PersonalDetails from '../../../classes/PersonalDetails';

class personalDetailsController {
  constructor(OrderService) {
    "ngInject";

    this.OrderService = OrderService;
    // Used a class here to make the code cleaner.
    this.personalDetails = new PersonalDetails;
  }

  submitPersonalDetails() {
    this.OrderService.order.personalDetails = this.personalDetails;
    this.nextStepFn({step: this.nextStepName});
  }
}

export default personalDetailsController;
