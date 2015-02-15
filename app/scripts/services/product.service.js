(function(){
	"use strict";

	var productService = function($http){

		var getProducts = function(){
			return $http.get('data/products')
				.then( function(response){
					return response.data;
				})
		}

		var getCategories = function(){
			return $http.get('data/categories')
				.then( function(response){
					return response.data;
				})
		}

		return {
			getProducts: getProducts,
			getCategories: getCategories
		}
	}

	angular
		.module('app')
		.factory('productService', productService);
}());