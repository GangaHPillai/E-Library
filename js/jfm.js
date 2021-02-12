angular.module('App', []).controller('CrudCtrl', ['$scope',
    function($scope) {
      $scope.book = [
          {
            name : "Becoming",
            author : "Michelle Obama",
            price : "950",
            editable : false
          },
          {
            name : "The Hobbit",
            author : "J. R. R Tolkien",
            price : "820",
            editable : false
          }
        ];
     
     $scope.entity = {}
        
     $scope.edit = function(index){
       $scope.entity = $scope.book[index];
       $scope.entity.index = index;
       $scope.entity.editable = true;
     }
        
     $scope.delete = function(index){
       $scope.book.splice(index,1);
     }
        
     $scope.save = function(index){
       $scope.book[index].editable = false;
       
     }
        
     $scope.add = function(){
       $scope.book.push({
        name : "",
        artist : "",
        price : "",
        editable : true
       })
     }
    }
]);