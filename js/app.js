var miniRouting = angular.module('miniRouting', ['ngRoute']);

miniRouting.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .when('/settings',{
    templateUrl: 'js/settings/settingsTmpl.html',
    controller: 'settingsCtrl'
  })
  .when('/products/:id', {
    templateUrl: 'js/products/productTmpl.html',
    controller: 'productsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
