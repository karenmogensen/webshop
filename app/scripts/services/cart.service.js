(function()
{
	"use strict";

	var cartService = function($filter)
	{
        var cartProducts = [],
            cartTotal = 0;

        var addCartProduct = function(id, name, price, quantity){
            var found = $filter('filter')(cartProducts, {id: id}, true)
            if(found.length)
            {
                found[0].quantity += quantity;
            }
            else
            {
                cartProducts.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: quantity
                });
            }
            calculateCartTotal();
        }

        var calculateCartTotal = function(){
            cartTotal = 0;
            for(var i = 0; i < cartProducts.length; i += 1)
            {
                console.log(cartProducts[i].price*cartProducts[i].quantity);
                cartTotal += cartProducts[i].price * cartProducts[i].quantity;
            }
            console.log("SUM: " + cartTotal);
        }

        var getCartProducts = function(){
            return cartProducts;
        }

        var getCartTotal = function(){
            return cartTotal;
        }

        var removeProductFromCart = function(index)
        {
            cartProducts.splice( index, 1 );
        }

    	return{
            addCartProduct : addCartProduct,
            getCartProducts : getCartProducts,
            getCartTotal : getCartTotal,
            removeProductFromCart : removeProductFromCart
    	}
   	}

	angular
		.module('app')
		.factory('cartService', cartService);
}
());