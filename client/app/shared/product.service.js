class ProductService {
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }

  loadProducts() {
    return this.$http
      .get('http://localhost:5000/mockProducts.json')
      .then(res => res.data);
  }
}

export default ProductService;
