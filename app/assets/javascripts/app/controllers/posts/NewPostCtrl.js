app.controller('NewPostCtrl', function($scope, Post, $state, Upload, $http) {
    $scope.addPost = function(form) {
        $scope.file = new File([$scope.file], $scope.file.$ngfName);
        $scope.obj_post = new FormData();
        console.log(form);
        console.log(form.title);
        $scope.obj_post.append('post[file_post]', $scope.file);
        $scope.obj_post.append('post[title]', form.title);
        $scope.obj_post.append('post[body]',form.body);
        $scope.obj_post.append('post[user_id]', $scope.user.id);
        console.log($scope.obj_post);

        $http.post('/posts', $scope.obj_post, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            transformResponse: function(data, headers){
                console.log(data);
                console.log(data.id);

                return data;
            }
        }).then(function(data){
            console.log(data);
            console.log(data.data);
            var post = JSON.parse(data.data);
            $state.go("post", {id: post.id});
        });

    };
});