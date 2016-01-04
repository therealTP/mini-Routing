angular.module('miniRouting', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
  .state('home', {
    templateUrl: 'js/home/homeTmpl.html',
    url: '/',
    controller: 'homeCtrl'
  })
  .state('products', {
    templateUrl: 'js/products/productsTmpl.html',
    url: '/products/:id',
    controller: 'productsCtrl'
  })
  .state('settings', {
    templateUrl: 'js/settings/settingsTmpl.html',
    url: '/settings',
    controller: 'settingsCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
