var apusProject = angular.module('apusProject', []);

apusProject.controller('productController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.products = []
  $scope.product={}
  $scope.categories = []
  $scope.category={}

  $scope.addProduct = function(){
    var newId = 0;
    $http.get('http://localhost:3000/products').then(function(data){
        $scope.products = data.data;
        newId = data.length + 1;
    });
    $http.post('http://localhost:3000/products',{id:newId,
      category_id:$scope.newProduct.category_id,
      title:$scope.newProduct.title,
      description: $scope.newProduct.description,
      price:$scope.newProduct.price,
      quantity:$scope.newProduct.quantity
    })
    $window.location.href = '/home/marina/agora vai/html/product.html';
  };


  $scope.listProducts = function(){
    $http.get('http://localhost:3000/products/').then(function(data){
      $scope.products = data.data;
    });
  };

  $scope.listCategories = function(){
    $http.get('http://localhost:3000/category').then(function(data){
      $scope.categories = data.data;
    });
  };

  $scope.deleteProduct = function(id){
    $http.delete('http://localhost:3000/products/' + id)
    $window.location.href = '/home/marina/agora vai/html/product.html';
  }

  $scope.getCategory = function(id){
    $http.get('http://localhost:3000/category/' + id).then(function(data){
      $scope.categories = data.data;
      $scope.category = $scope.categories.getElementById(id);
    });
  }
}
]);
