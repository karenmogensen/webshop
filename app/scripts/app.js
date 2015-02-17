"use strict";

var app = angular.module('app', ['ngRoute', 'app.products', 'app.cart', 'app.product']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
    .when('/', {
		templateUrl: 'views/products.html',
		controller: 'productsController'
	})
    .when('/product/:prodId', {
        templateUrl: 'views/product.html',
        controller: 'productController'
    })
    .when('/checkOut', {
        templateUrl: 'views/checkOut.html',
        controller: 'cartController'
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
