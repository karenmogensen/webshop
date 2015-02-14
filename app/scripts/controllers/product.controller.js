(function(){
    "use strict";

    angular
      .module("app.product", [])
      .controller("productController", productController)

    function productController($scope, $http)
    {
      $scope.categoriesSelected = new Array();
      var getProducts = function(response)
      {
        $scope.products = response.data;
      }

      $http.get("data/products")
        .then(getProducts);

      var getCategories = function(response)
      {
        $scope.categories = response.data;
      }

      $http.get("data/categories")
        .then(getCategories);

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