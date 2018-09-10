class CompanyService {
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }

  loadCompanies() {
    return this.$http
      .get('http://localhost:5000/mockCompanies.json')
      .then(res => res.data);
  }
}

export default CompanyService;
