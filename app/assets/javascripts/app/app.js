var app= angular.module('railsAngular', ['ui.router', 'Devise', 'templates', 'ngResource', 'ngFileUpload', 'monospaced.qrcode']);

app.run(['Auth', function (Auth) {
    Auth.currentUser().then(function(user) {
    });
}]);
app.factory("Posts", ['$resource', function($resource){
    return $resource('/posts');
}]);

app.factory("Post", ['$resource', function($resource){
    return $resource('/posts/:id',  null,
        {
            'update': { method:'PUT' }
        });

}]);

app.factory('Comment', ['$resource', function($resource){
    return $resource('posts/:post_id/comments/:id', {post_id: '@post_id', id: '@id'},
        {
            'update': { method:'PUT' }
        });
}]);

app.factory('Comments', ['$resource', function($resource){
    return $resource('posts/:post_id/comments', {post_id: '@post_id'});
}]);

app.directive('navBar', function NavBar(){
    return {
        restrict: 'E',
        templateUrl: '/assets/app/views/users/nav.html',
        controller: 'NavCtrl'
    }
});
