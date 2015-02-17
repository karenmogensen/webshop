(function(){
    "use strict";

    angular
      .module("app.cart", [])
      .controller("cartController", cartController)

    function cartController($scope, $location, cartService)
    {
        //Set cartproducts in scope
        $scope.cartProducts = cartService.getCartProducts();

        $scope.cartTotal = cartService.getCartTotal();

        $scope.checkOut = function(){
            $location.path( "/checkOut" );
       }        

    	$scope.showCartSection = function(){
    		if(Object.keys($scope.cartProducts).length){
     			return true;
    		}
	    		return false;
    	}
        $scope.removeProductFromCart = function(index){
            cartService.removeProductFromCart(index);
        }

    }
  
}());