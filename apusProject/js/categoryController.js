var apusProject = angular.module('apusProject', []);

apusProject.controller('categoryController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.categories = []
  $scope.category={}

  $scope.addCategory = function(){
    var newId = 0;
    $http.get('http://localhost:3000/category').then(function(data){
      $scope.categories = data.data;
      newId = data.length + 1;
    });

    $http.post('http://localhost:3000/category',{id:newId,
      name: $scope.newCategory.name
    })
    $window.location.href = '/home/marina/agora vai/html/category.html';
  };


  $scope.listCategories = function(){
    $http.get('http://localhost:3000/category').then(function(data){
        $scope.categories = data.data;
    });
  };

  $scope.deleteCategory = function(id){
    $http.delete('http://localhost:3000/category/' + id)
    $window.location.href = '/home/marina/agora vai/html/category.html';
  }

  $scope.getCategory = function(){
    var id = $window.location.search.replace("?id=","")
    $http.get('http://localhost:3000/category/' + id).then(function(data){
      $scope.category = data.data;
    });
  };

  $scope.updateCategory = function(id){
    id = id + 1;
    $http.put('http://localhost:3000/category/' + id,{
      name: $scope.category.name
    })

    $window.location.href = '/home/marina/agora vai/html/category.html';
  };

}
]);
