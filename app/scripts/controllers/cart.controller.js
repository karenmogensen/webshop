(function(){
    "use strict";

    angular
      .module("app.cart", [])
      .controller("cartController", cartController)

    function cartController($scope, $rootScope)
    {
    	$scope.showCartSection = function(){
    		if(Object.keys($rootScope.cartProducts).length){
    			return true;
    		}
	    		return false;
    	}
    }
  
}());