(function(){
	"use strict";

	var productService = function($http, $filter){

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

		var getProduct = function(prodId){
			return $http.get('data/products')
				.then( function(response){
					return filterProducts(response.data, prodId);
				})
		}

		var filterProducts = function(data, prodId){
			for(var i = 0; i < data.length; i += 1){
		    	var product = data[i];
    			if(product.productId == prodId){
        			return product;
    			}
			}
		}

		return {
			getProduct : getProduct,
			getProducts: getProducts,
			getCategories: getCategories
		}
	}

	angular
		.module('app')
		.factory('productService', productService);
}());