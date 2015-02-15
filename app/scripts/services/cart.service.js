(function()
{
	"use strict";

	var cartService = function($rootScope)
	{

    	var addProductToCart = function(product, quantity)
    	{
    		var existingQuantity = 0;
    			
    		if($rootScope.cartProducts[product.name])
    		{
    			var existingProduct = $rootScope.cartProducts[product.name];
    			existingQuantity = existingProduct.quantity;

    		}
    		$rootScope.cartProducts[product.name] = {
    			product: product,
    			quantity: quantity + existingQuantity
    		}
    	}

    	return{
    		addProductToCart : addProductToCart
    	}
   	}

	angular
		.module('app')
		.factory('cartService', cartService);
}
());