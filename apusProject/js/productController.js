var apusProject = angular.module('apusProject', []);

apusProject.controller('productController', ['$scope', '$location', '$http', function($scope,$location, $http){

  $scope.products = []//isso é uma lista
  $scope.product={}//isso é um produto


  var newId = $scope.products.lengh + 1;

  $scope.addProduct = function(){
    $http.post('http://localhost:3000/products',{id:newId,
      category_id:'0',
      title:$scope.newProduct.title,
      description: $scope.newProduct.description,
      price:$scope.newProduct.price,
      quantity:$scope.newProduct.quantity
    })
  };


  $scope.listProducts = function(){
    $http.get('http://localhost:3000/products').then(function(data){
        $scope.products = data.data;
    });
  };

}
]);
