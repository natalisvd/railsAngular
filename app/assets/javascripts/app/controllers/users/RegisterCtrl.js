app.controller('RegisterCtrl', function($scope, $rootScope, Auth, $state, Upload, $timeout, $http){
    $scope.user= {}


    $scope.register = function(){
        $scope.user.avatar = new File([$scope.file], $scope.file.$ngfName);
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
            $state.go('posts');
        });

    };

    $scope.register_facebook = function(){
            var checkUser, openUrl;
            checkUser = function() {
                return Auth.currentUser().then(function (user){
                    $rootScope.user = user;
                    console.log(user);
                    if (user.id) {
                        $modalInstance.dismiss("cancel");
                    } else {
                        Auth._currentUser = null;
                        return $scope.error = 'error';
                    }
                }), function(error) {
                    return $scope.error = error.user.errors;
                };
            };
            openUrl = '/users/auth/facebook';
            window.$windowScope = $scope;
            var W = window.open(openUrl, "Authenticate Account", "width=740, height=520");
            window.checkUserOnParent = checkUser();
            setTimeout(function(){ W.close();
            location.reload();}, 2000);


        return true;
    };


});