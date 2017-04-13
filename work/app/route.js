function routeConfig($routeProvider){
    $routeProvider.
        when('/add', {
            controller: 'AddController',
            templateUrl: 'add.html'
        })
}

app.config(routeConfig);
app.controller('AddController',function($scope,$location){
//  $scope.time = new Date();
//  $scope.content = '';
//  $scope.add = function(){
//      comment.push({
//          username : ,
//          content : $scope.content,
//          time : new Date(),
//          img:'images/a0.jpg',
//          vip:'1'
//      });
//  }
console.log('12132132');
});