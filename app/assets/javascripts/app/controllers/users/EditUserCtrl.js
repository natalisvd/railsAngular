app.controller('EditUserCtrl', function($scope, Auth, $rootScope, $http){

    $scope.edit = function(){
        $scope.user.avatar = new File([$scope.file], $scope.file.$ngfName);
        $scope.obj_user = new FormData();
        $scope.obj_user.append('id', $scope.user.id);
        $scope.obj_user.append('user[username]', $scope.user.username);
        if($scope.user.password.length>  6 && $scope.user.password_confirmation.length > 6) {
            console.log('jopa');
            $scope.obj_user.append('user[password]', $scope.user.password);
            $scope.obj_user.append('user[password_confirmation]', $scope.user.password_confirmation);

        }
        $scope.obj_user.append('user[avatar]', $scope.user.avatar);


        $http.put('/users/edit', $scope.obj_user, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            transformResponse: function(data, headers){
                console.log(data);
                return data;
            }
        }).then(function(data){
            $state.go('posts');
        });

    };
    //
    // $scope.edit = function(user){
    //    $http({method: 'put', url: '/users/edit', data: user}).then(console.log('success'));
    // };
    $scope.$on('devise:new-registration', function (e, user){
        $rootScope.user = user;
    });


});