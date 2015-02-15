(function(){
    "use strict";

    angular
      .module("app.product", [])
      .controller("productController", productController)

    function productController($scope, productService, cartService)
    {
      $scope.categoriesSelected = new Array();
      var modelProducts = function(data)
      {
        $scope.products = data;
      }

      var modelCategories = function(data)
      {
        $scope.categories = data;
      }

      $scope.addProdToCart = function(product){
        var quantity = this.quantity;
        cartService.addProductToCart(product, quantity); 
      }

      productService.getProducts()
        .then(modelProducts);

      productService.getProducts()
        .then(modelCategories);

      $scope.categoryChanged = function(category){
        var i = $scope.categoriesSelected.indexOf(category);
        if(i > -1)
        {
          $scope.categoriesSelected.splice(i, 1);
        }
        else
        {
          $scope.categoriesSelected.push(category);
        }
      }  

      $scope.categoryFilter = function(product){
        if($scope.categoriesSelected.length > 0)
        {
          if($scope.categoriesSelected.indexOf(product.category) < 0)
          {
            return;
          } 
        }
        return product;
      }

    }
  
}());