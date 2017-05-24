app.controller('PostsCtrl', function($scope, $stateParams, Posts){
    $scope.posts= [];
    $scope.post_load = function(){

        Posts.query({comment_offset: $scope.posts.length}, function (response) {
        $scope.posts = $scope.posts.concat(response);
        console.log(response);
    })
    }
    $scope.post_load()
});