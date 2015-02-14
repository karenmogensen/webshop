"use strict";

var app = angular.module('app', ['ngRoute', 'app.product', 'app.cart']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/products.html',
		controller: 'productController'
	})
}])

app.directive('cartsection', [function () {
    	return {
    		restrict: 'E',
    		scope: false,
    		templateUrl: 'views/cart.html',
    		controller: 'cartController'
    	};
}])