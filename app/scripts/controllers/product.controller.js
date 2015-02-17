(function(){  
    "use strict";

    angular
      .module("app.product", [])
      .controller("productController", productController)

    function productController($scope, $routeParams, productService, cartService)
    {
      var modelProduct = function(product)
      {
        $scope.product = product;
      }

      $scope.addProdToCart = function(product){
        var quantity = this.quantity;
        cartService.addCartProduct(product.productId, product.name, product.price, quantity);
        cartService.getCartTotal();
      }

      productService.getProduct($routeParams.prodId)
        .then(modelProduct);
    }
  
}());