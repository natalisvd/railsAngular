app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',

    function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider,
        $httpProvider
    ) {
        // $httpProvider.defaults.withCredentials = true;
        //
        // if (window.history && window.history.pushState) {
        //     $locationProvider.html5Mode(true); // Uses "/some-url" instead of "/!#some-url"
        // }

    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: 'app/views/home/_home.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state({
        name: 'posts',
        url: '/posts',
        templateUrl: 'app/views/posts/_posts.html',
        controller: 'PostsCtrl'

    });
    $stateProvider.state({
        name: 'post',
        url: '/post/:id?page=:count',
        templateUrl: 'app/views/posts/_post.html',
        controller: 'PostCtrl'

    });
    $stateProvider.state({
        name: 'new_post',
        url: '/new_post',
        templateUrl: 'app/views/posts/_new_post.html',
        controller: 'NewPostCtrl'

    });
    $stateProvider.state({
        name: 'login',
        url: '/login',
        templateUrl: 'app/views/users/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
            Auth.currentUser().then(function(){
                $state.go('home');
            });
        }
    });

    $stateProvider.state({
        name: 'register',
        url: '/register',
        templateUrl: 'app/views/users/register.html',
        controller: 'RegisterCtrl',
        onEnter: function(Auth, $state){
            Auth.currentUser().then(function(){
                $state.go('home');
            });
        }
    });
        $stateProvider.state({
            name: 'edit_user',
            url: '/user/edit',
            templateUrl: 'app/views/users/edit.html',
            controller: 'EditUserCtrl'

        });
    $urlRouterProvider.otherwise('/');

}]);