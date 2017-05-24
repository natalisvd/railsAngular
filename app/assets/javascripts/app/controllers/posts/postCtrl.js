app.controller('PostCtrl', function($scope, $stateParams, Post, Comments, Comment){
    $scope.post =[];
    $scope.comments = [];
    Post.get({id: $stateParams.id}, function (response) {
        $scope.post = response.post;
    });




    $scope.comment_load = function(){
        Comments.query({post_id: $stateParams.id, comment_offset: $scope.comments.length}, function (response) {
           console.log(response)
            $scope.comments = _.concat(response, $scope.comments);
   })};

   $scope.comment_load()

    $scope.addComment = function(form){

        if(!$scope.form || $scope.form.body === '') { return; }
        $scope.form.post_id = $stateParams.id;
        $scope.form.user_id = $scope.user.id;
        console.log(form);
        var comment = new Comment(form);
        comment.$save(function(savedComment){
            console.log(savedComment);
            $scope.comments = _.concat($scope.comments, savedComment)

        });
        $scope.form.body = '';
    }

});