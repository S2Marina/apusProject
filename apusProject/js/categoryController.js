var apusProject = angular.module('apusProject', []);

apusProject.controller('categoryController', ['$scope', '$window', '$http', function($scope,$window, $http){

  $scope.categories = []
  $scope.category={}

  $scope.addCategory = function(){
    $http.get('http://localhost:3000/category').then(function(data){
      $scope.categories = data.data;
    });
    var newId = $scope.categories.length + 1;
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

}
]);
