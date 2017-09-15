app.controller('AuthCtrl', function($scope, $rootScope, Auth, $state){
    var config = {headers: {"X-HTTP-Method-Override": 'POST'}};
    $scope.login = function(user){
        Auth.login(user, config).then(function(user){
            $rootScope.user = user;
            $state.go('posts');
        }, function(errorResponse){}
        );
    };

    $scope.register = function(){
        Auth.register($scope.user, config).then(function(user){
                $rootScope.user = user;
                $state.go('posts');
            }, function(errorResponse){}
        );
    };


});
