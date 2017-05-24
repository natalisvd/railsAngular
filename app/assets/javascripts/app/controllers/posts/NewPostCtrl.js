app.controller('NewPostCtrl', function($scope, Post, $state) {
    $scope.addPost = function(form) {
        console.log(form)
        $scope.form.user_id = $scope.user.id;
        var post = new Post(form);
        console.log(post)
        post.$save(function(savedPost){
            console.log(savedPost);
            $state.go("post", {id: savedPost.id})
        });
        console.log(form);
    }
});