class OrderService {
  constructor() {
    this.order = {};
    this.product = {};
    this.transferOptions = [
      {
        name: 'Pick up',
        ready: 'will be ready for pick up in 2-4 business days',
        price: 0,
        payment: 'payment can be done directly at the time of pick up.',
        icon: 'glyphicon-shopping-cart'
      },
      {
        name: 'Regular delivery',
        ready: 'will be delivered to your address within 12-18 business days',
        price: 20,
        payment: 'payment can be done directly upon delivery.',
        icon: 'glyphicon-send'
      },
      {
        name: 'Express delivery',
        ready: 'will be delivered to your address within 3-6 business days',
        price: 50,
        payment: 'payment can be done directly upon delivery.',
        icon: 'glyphicon-plane'
      }
    ];
  }
}

export default OrderService;
