app.controller('editPostCtrl', function($scope, $stateParams, Post){
    $scope.post =[]
    $scope.form = []
    Post.get({id: $stateParams.id}, function (response) {
        $scope.post = response
        $scope.form = $scope.post
        console.log(response)
    })

    $scope.updatePost = function(form) {
        console.log(form);
        Post.update({id: form.id}, form)
    }

});