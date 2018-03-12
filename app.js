var countryApp = angular.module('countryApp', [
  'ngRoute',
  'countryControllers',
  'countriesFactory',
  'countryDirective'
]);

countryApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});


/*All scripts found at 
https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples
*/