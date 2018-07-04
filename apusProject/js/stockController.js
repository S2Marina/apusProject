var apusProject = angular.module('apusProject', []);

apusProject.controller('stockController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.stocks = []
  $scope.stock={}
  $scope.products = []
  $scope.product={}

  $scope.listStocks = function(){
    $http.get('http://localhost:3000/stock').then(function(data){
        $scope.stocks = data.data;
    });
  };

  $scope.addStock = function(){
    var newId = 0;
    $http.get('http://localhost:3000/stock').then(function(data){
        $scope.stocks = data.data;
        newId = data.length + 1;
    });
    $http.post('http://localhost:3000/stock',{id:newId,
      product_id:$scope.newStock.product_id,
      quantity: $scope.newStock.quantity,
      date_time: $scope.newStock.date_time
    })
    $window.location.href = '/home/marina/agora vai/html/stock.html';
  };

  $scope.deleteStock = function(id){
    $http.delete('http://localhost:3000/stock/' + id)
    $window.location.href = '/home/marina/agora vai/html/stock.html';
  }

  $scope.listProducts = function(){
    $http.get('http://localhost:3000/products').then(function(data){
      $scope.products = data.data;
    });
  };


  $scope.getStock = function(){
    var id = $window.location.search.replace("?id=","")
    $http.get('http://localhost:3000/stock/' + id).then(function(data){
      $scope.stock = data.data;
    });
  };

  $scope.updateStock = function(id){
    id = id + 1;
    $http.put('http://localhost:3000/products/' + id,{
      product_id:$scope.stock.product_id,
      quantity: $scope.stock.quantity,
      date_time: $scope.stock.date_time
    })

    $window.location.href = '/home/marina/agora vai/html/stock.html';
  };

}
]);
