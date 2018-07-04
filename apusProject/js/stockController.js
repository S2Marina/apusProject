var apusProject = angular.module('apusProject', []);

apusProject.controller('stockController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.stocks = []
  $scope.stock={}

  $scope.listStocks = function(){
    $http.get('http://localhost:3000/stock').then(function(data){
        $scope.stocks = data.data;
    });
  };

  $scope.addStock = function(){
    $http.get('http://localhost:3000/stock').then(function(data){
        $scope.stocks = data.data;
    });
    var newId = $scope.stocks.length + 1;
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

}
]);
