var apusProject = angular.module('apusProject', []);

apusProject.controller('productController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.products = []
  $scope.product={}
  $scope.categories = []
  $scope.category={}
  $scope.id = {}

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


  $scope.getProduct = function(){
    var id = $window.location.search.replace("?id=","") - 1
    $http.get('http://localhost:3000/product/' + id).then(function(data){
      $scope.product = data.data;
    });
  };

  $scope.updateProduct = function(id){
    id = id + 1;
    $http.put('http://localhost:3000/product/' + id,{
      category_id:$scope.product.category_id,
      title:$scope.product.title,
      description: $scope.product.description,
      price:$scope.product.price,
      quantity:$scope.product.quantity
    })

    $window.location.href = '/home/marina/agora vai/html/product.html';
  };

}
]);
