(function(){
  "use strict";
  angular
    .module("Main", ["Main.product", "Main.cart"])
    .run(function($rootScope){
      $rootScope.message = "";
    });
}());