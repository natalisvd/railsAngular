app.controller('RegisterCtrl', function($scope, $rootScope, Auth, $state, Upload, $timeout, $http){
    $scope.user= {}


    $scope.register = function(){
        $scope.user.avatar = new File([$scope.file], $scope.file.$ngfName)


        console.log($scope.user.avatar);
        console.log($scope.user);

        $scope.obj_user = new FormData();
        $scope.obj_user.append('user[username]', $scope.user.username);
        $scope.obj_user.append('user[email]', $scope.user.email);
        $scope.obj_user.append('user[password]', $scope.user.password);
        $scope.obj_user.append('user[avatar]', $scope.user.avatar);


        $http.post('/users.json', $scope.obj_user, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            transformResponse: function(data, headers){
                console.log(data);
                return data;
            }
        }).then(function(data){
            Auth.login(data);
            $state.go('posts')
        })

    };

    $scope.registr_facebook = function(){

    }
});